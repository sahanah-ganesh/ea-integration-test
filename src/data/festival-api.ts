import { RESTDataSource } from 'apollo-datasource-rest'
import { removeDuplicates } from '../utils/removeDuplicates'
import { sortAscending } from '../utils/sortAscending'
import { arrayCheck } from '../utils/arrayCheck'
import { transformDataAllChecks } from '../utils/transformDataAllChecks'
import axios from 'axios'

export default class FestivalAPI extends RESTDataSource {
  constructor() {
    super()
  }

  festivalReducer(festival: any) {
    return {
      name: festival.name,
      bands: festival.bands,
    }
  }

  fetchFromAPI() {
    const url = `${process.env.URL}`
    const response = axios
      .get(url)
      .then((response: any) => {
        return response.data
      })
      .catch((error: any) => {
        return console.log(`HTTP error status: ${error}`)
      })
    return response
  }

  async getFestivals() {
    const allFestivals = await this.fetchFromAPI()
    const dataTransformed = transformDataAllChecks(allFestivals)
    console.log(dataTransformed)
    return dataTransformed
  }

  aggregateBands(data: any) {
    let result = []
    for (const obj of data) {
      if (obj.bands) {
        result.push(...obj.bands)
      }
    }
    return arrayCheck(result)
  }

  aggregateRecordLabels(data: any) {
    let result: any = []
    for (const obj of data) {
      if (obj.bands) {
        obj.bands.map((band: any) => {
          result.push({ name: band.recordLabel })
        })
      }
    }
    const duplicatesRemoved = removeDuplicates(result)
    return arrayCheck(duplicatesRemoved)
  }

  async getBands() {
    let allFestivals = await this.getFestivals()
    return this.aggregateBands(allFestivals)
  }

  async getRecordLabels() {
    let allFestivals = await this.getFestivals()
    return this.aggregateRecordLabels(allFestivals)
  }

  async getFestivalsByBandName(name: any) {
    try {
      const allFestivals: any = await this.getFestivals()
      let result: any = []
      for (const obj of allFestivals) {
        if (obj.bands) {
          obj.bands.map((band: any) => {
            if (band.name == name) {
              result.push({ name: obj.name })
            }
          })
        }
      }
      return arrayCheck(result)
    } catch (e) {
      console.log(e)
    }
  }

  async getFestivalBandsByName(name: any) {
    let festivalsArray = await this.getFestivalsByBandName(name)
    return [
      {
        name: name,
        festivals: festivalsArray,
      },
    ]
  }

  async getLabelFestivalBandsByName(label: any) {
    let allFestivals = await this.getFestivals()
    let result: any = []
    for (const obj of allFestivals) {
      if (obj.bands) {
        obj.bands.map(async (band: any) => {
          if (band.recordLabel == label) {
            const festivalsArray = await this.getFestivalBandsByName(band.name)
            result.push(...festivalsArray)
          }
        })
      }
    }
    const resultSorted = sortAscending(result)
    return Array.isArray(resultSorted) ? [{ label: label, bands: result }] : []
  }

  async getLabels() {
    let allFestivals = await this.getFestivals()
    let result: any = []
    for (const obj of allFestivals) {
      if (obj.bands) {
        obj.bands.map(async (band: any) => {
          let festivalsArray = await this.getLabelFestivalBandsByName(
            band.recordLabel,
          )
          result.push(...festivalsArray)
        })
      }
    }
    result = result.sort((a: any, b: any) =>
      a.label.toLowerCase().localeCompare(b.label.toLowerCase()),
    )
    const duplicatesRemoved = removeDuplicates(result)
    return arrayCheck(duplicatesRemoved)
  }
}
