import { RESTDataSource } from 'apollo-datasource-rest'
import { removeDuplicates } from '../utils/removeDuplicates'
import { sortAscending } from '../utils/sortAscending'
import { arrayCheck } from '../utils/arrayCheck'
import { transformDataAllChecks } from '../utils/transformDataAllChecks'
import axios, { AxiosResponse } from 'axios'
import logger from '../utils/logger'
import { Bands } from '../interfaces/bands'

// using async redis which is a wrapper allowing the use of async/await for redis
const asyncRedis = require('async-redis')

const client = asyncRedis.createClient()

client.on('error', function (err: Error) {
  logger.error(err)
})

export default class FestivalAPI extends RESTDataSource {
  // fetches from redis cache and returns parsed response
  // if there is an error, fetches from API instead
  async fetchFromCache() {
    const response = await client
      .get('data')
      .then((res: string) => {
        if (res) {
          const parsedResponse = JSON.parse(res)
          return parsedResponse
        }
        return this.fetchFromAPI()
      })
      .catch((err: Error) => {
        logger.error('Error fetching from cache: ', err)
        return this.fetchFromAPI()
      })
    return response
  }

  // fetches from API but only successfully returns complete data (content-length of over 1000)
  // transforms the data to change null fields to empty string, removes duplicates, sorts by ascending alphabet and checks if it is an array
  // if there is partial data, an empty array is returned. TO DO: allow for partial data return?
  // logs any errors
  fetchFromAPI() {
    const url = `${process.env.URL}`
    logger.debug('Fetching festivals...')
    const response = axios
      .get(url)
      .then((response: AxiosResponse) => {
        if (response.data && response.headers['content-length'] > 1000) {
          logger.info('Successfully fetched festivals')
          const dataTransformed = transformDataAllChecks(response.data)
          client.set('data', JSON.stringify(dataTransformed))
          return dataTransformed
        }
        logger.error('Returned empty array')
        return []
      })
      .catch((error: Error) => {
        logger.error('Error in fetching festivals: ', error)
      })
    return response
  }

  // returns data from cache and ensures data is correctly transformed
  async getFestivals() {
    const allFestivals = await this.fetchFromCache()
    const dataTransformed = transformDataAllChecks(allFestivals)
    return dataTransformed
  }

  // checks if the band name in the query is the same as the band name in the data
  // returns array of band name objects sorted by ascending alphabet
  async getFestivalsByBandName(name: string) {
    const allFestivals = await this.getFestivals()
    let result: any[] = []
    for (const obj of allFestivals) {
      if (obj.bands) {
        obj.bands.map((band: Bands) => {
          if (band.name == name) {
            result.push({ name: obj.name })
          }
        })
      }
    }
    return sortAscending(result)
  }

  async getFestivalBandsByName(name: string) {
    const festivalsArray = await this.getFestivalsByBandName(name)
    return [
      {
        name: name,
        festivals: festivalsArray,
      },
    ]
  }

  // goes through array of band objects to check if recordLabel matches query label
  // runs query with those band names to return festivals, sorts ascending alphabet and returns transformed data structure
  async getLabelFestivalBandsByName(label: string) {
    const allFestivals = await this.getFestivals()
    const result = []
    for (const obj of allFestivals) {
      if (obj.bands) {
        for (const band of obj.bands) {
          if (band.recordLabel == label) {
            const festivalsArray = await this.getFestivalBandsByName(band.name)
            result.push(...festivalsArray)
          }
        }
      }
    }
    const resultSorted = sortAscending(result)
    return [{ label: label, bands: resultSorted }]
  }

  // similar to above function but returning all labels with a transformed data structure
  async getLabels() {
    const allFestivals = await this.getFestivals()
    let result = []
    for (const obj of allFestivals) {
      if (obj.bands) {
        for (const band of obj.bands) {
          const festivalsArray = await this.getLabelFestivalBandsByName(
            band.recordLabel,
          )
          result.push(...festivalsArray)
        }
      }
    }
    const duplicatesRemoved = removeDuplicates(result)
    return arrayCheck(duplicatesRemoved)
  }
}
