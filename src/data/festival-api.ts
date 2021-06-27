import { RESTDataSource } from 'apollo-datasource-rest'
import { removeDuplicates } from '../utils/removeDuplicates'
import { sortAscending } from '../utils/sortAscending'
import { arrayCheck } from '../utils/arrayCheck'
import { transformDataAllChecks } from '../utils/transformDataAllChecks'
import axios from 'axios'
import logger from '../utils/logger'

export default class FestivalAPI extends RESTDataSource {
  festivalReducer(festival: any) {
    return {
      name: festival.name,
      bands: festival.bands,
    }
  }

  fetchFromAPI() {
    const url = `${process.env.URL}`
    logger.debug('Fetching festivals...')
    const response = axios
      .get(url)
      .then((response: any) => {
        logger.info('Successfully fetched festivals')
        return response.data
      })
      .catch((error: any) => {
        return logger.error('Error in fetching festivals: ', error)
      })
    return response
  }

  async getFestivals() {
    const allFestivals = await this.fetchFromAPI()
    const dataTransformed = transformDataAllChecks(allFestivals)
    return dataTransformed
  }

  aggregateBands(data: any) {
    const result: any = []
    for (const obj of data) {
      if (obj.bands) {
        result.push(...obj.bands)
      }
    }
    return arrayCheck(result)
  }

  aggregateRecordLabels(data: any) {
    const result: any = []
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
    const allFestivals = await this.getFestivals()
    return this.aggregateBands(allFestivals)
  }

  async getRecordLabels() {
    const allFestivals = await this.getFestivals()
    return this.aggregateRecordLabels(allFestivals)
  }

  async getFestivalsByBandName(name: any) {
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
    const resultSorted = sortAscending(result)
    return arrayCheck(resultSorted)
  }

  async getFestivalBandsByName(name: any) {
    const festivalsArray = await this.getFestivalsByBandName(name)
    return [
      {
        name: name,
        festivals: festivalsArray,
      },
    ]
  }

  async getLabelFestivalBandsByName(label: any) {
    const allFestivals = await this.getFestivals()
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
    const allFestivals = await this.getFestivals()
    let result: any = []
    for (const obj of allFestivals) {
      if (obj.bands) {
        obj.bands.map(async (band: any) => {
          const festivalsArray = await this.getLabelFestivalBandsByName(
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
