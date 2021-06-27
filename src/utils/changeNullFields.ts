import { Festivals } from '../interfaces/festivals'
const { difference } = require('lodash')

const festivalDefaults = { name: String() }
const bandsDefaults = { name: String(), recordLabel: String() }

export const changeNullFields = (festivals: [Festivals]) => {
  for (const festival of festivals) {
    const festivalsRequiredKeys = Object.keys(festivalDefaults)
    const objKeys = Object.keys(festival)
    const missingFestivalKeys = difference(festivalsRequiredKeys, objKeys)

    for (const missingFestivalKey of missingFestivalKeys) {
      // @ts-ignore
      festival[missingFestivalKey] = festivalDefaults[missingFestivalKey]
    }

    const bandRequiredKeys = Object.keys(bandsDefaults)

    for (const band of festival.bands) {
      const objKeys = Object.keys(band)
      const missingBandKeys = difference(bandRequiredKeys, objKeys)

      for (const missingBandKey of missingBandKeys) {
        // @ts-ignore
        band[missingBandKey] = bandsDefaults[missingBandKey]
      }
    }
  }
  return festivals
}
