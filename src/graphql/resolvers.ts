import { Resolvers } from './generated'
import logger from '../utils/logger'

export const resolvers: Resolvers = {
  Query: {
    festivals: (_, __, { dataSources }) => {
      return dataSources.festivalAPI.getFestivals()
    },
    festival: (_, { name }, { dataSources }) => {
      logger.debug('Fetching festival by name')
      return dataSources.festivalAPI.getFestivalsByBandName(name)
    },
    festivalBands: (_, { name }, { dataSources }) => {
      logger.debug('Fetching festival bands by name')
      return dataSources.festivalAPI.getFestivalBandsByName(name)
    },
    label: (_, { label }, { dataSources }) => {
      logger.debug('Fetching record labels by label name')
      return dataSources.festivalAPI.getLabelFestivalBandsByName(label)
    },
    labels: (_, __, { dataSources }) => {
      logger.debug('Fetching all record labels')
      return dataSources.festivalAPI.getLabels()
    },
  },
}
