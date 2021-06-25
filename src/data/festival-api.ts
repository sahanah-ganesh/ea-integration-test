import { RESTDataSource } from 'apollo-datasource-rest';
import fetch from 'node-fetch';

export default class FestivalAPI extends RESTDataSource {
  response: any[];
  constructor() {
    super();
    this.baseURL = "https://eacp.energyaustralia.com.au/codingtest/api/v1/"
    this.response = []
  }

  festivalReducer(festival: any) {
    return {
        name: festival.name,
        bands: festival.bands
    }
  }

  changeNullFields(data: any[]) {
    for (const obj of data) {
        if (obj.name === undefined || obj.name === null) {
          console.log(typeof obj.name)
          obj.name = "";
        }
        for (const nestedObj of obj.bands) {
            if (nestedObj.recordLabel === undefined || obj.recordLabel === null) {
                nestedObj.recordLabel = ""
            }
        }
      }
      const result = data.sort((a: { name: string; }, b: { name: string; }) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
      return Array.isArray(result)
        ? result.map((festival) => this.festivalReducer(festival))
        : [];
    }

  async getFestivals() {
    if (this.response.length > 1) {
      return this.changeNullFields(this.response)
    }
    await fetch('https://eacp.energyaustralia.com.au/codingtest/api/v1/festivals')
      .then(res => {
        if (res.status >= 200 && res.status < 300) {
          return res.json()
        }
        console.log(res.status)
        return
      })
      .then(json => {
        console.log(json)
        this.response.push(...json)
        return this.changeNullFields(this.response)
      })
        .catch(err => {
          console.log(err)
          return
        })
        return this.changeNullFields(this.response)
  }

  aggregateBands(data: any) {
    let result = []
    for (const obj of data) {
      if (obj.bands) {
        result.push(...obj.bands)
      }
    }
    return Array.isArray(result)
    ? result
    : [];
  }

  aggregateRecordLabels(data: { name: any; bands: any; }[]) {
    let result: { name: any; }[] = []
    for (const obj of data) {
      if (obj.bands) {
        obj.bands.map((band: { recordLabel: any; }) => {
          result.push({ "name": band.recordLabel })
        })
      }
    }
    const duplicatesRemoved = this.removeDuplicates(result)
    return Array.isArray(duplicatesRemoved)
    ? duplicatesRemoved
    : [];
  }

  getBands() {
    const allFestivals = this.changeNullFields(this.response)
    return this.aggregateBands(allFestivals)
  }

  getRecordLabels() {
    const allFestivals = this.changeNullFields(this.response)
    return this.aggregateRecordLabels(allFestivals)
  }

  removeDuplicates(collection: any[]) {
    return collection.reduce((filtered: any[], item: any) => 
      filtered.some((filteredItem: any) => 
        JSON.stringify(filteredItem ) == JSON.stringify(item)) 
          ? filtered
          : [...filtered, item]
    , [])
  }

  getFestivalsByBandName(name: any) {
    const allFestivals: any = this.response.length > 1 ? this.changeNullFields(this.response) : this.getFestivals()
    console.log(allFestivals)
    let result: { name: any; }[] = []
    for (const obj of allFestivals) {
      if (obj.bands) {
        obj.bands.map((band: { name: any; }) => {
          if (band.name == name) {
            result.push({ "name": obj.name })
          }
        })
      }
    }
    return Array.isArray(result)
    ? result
    : [];
  }

  getFestivalBandsByName(name: any) {
    const festivalsArray = this.getFestivalsByBandName(name)
    return [{
      "name": name,
      "festivals": festivalsArray
    }]
  }

  getLabelFestivalBandsByName(label: any) {
    const allFestivals: any = this.getFestivals()
    let result: any[] = []
    for (const obj of allFestivals) {
      if (obj.bands) {
        obj.bands.map((band: { recordLabel: any; name: any; }) => {
          if (band.recordLabel == label) {
            const festivalsArray = this.getFestivalBandsByName(band.name)
            result.push(...festivalsArray)
          }
        })
      }
    }
    result = result.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
    return Array.isArray(result)
    ? [{ "label": label, "bands": result }]
    : [];
  }

  getLabels() {
    const allFestivals = this.changeNullFields(this.response)
    let result: any[] = []
    for (const obj of allFestivals) {
      if (obj.bands) {
        obj.bands.map((band: { recordLabel: any; }) => {
          const festivalsArray = this.getLabelFestivalBandsByName(band.recordLabel)
          result.push(...festivalsArray)
        })
      }
    }
    result = result.sort((a, b) => a.label.toLowerCase().localeCompare(b.label.toLowerCase()))
    result = this.removeDuplicates(result)
    return Array.isArray(result)
    ? result
    : [];
  }
}
