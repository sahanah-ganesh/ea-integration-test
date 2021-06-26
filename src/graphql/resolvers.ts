import { Resolvers } from './generated'

export const resolvers: Resolvers = {
  Query: {
    festivals: (_, __, { dataSources }) => {
      return dataSources.festivalAPI.getFestivals()
    },
    bands: (_, __, { dataSources }) => {
      return dataSources.festivalAPI.getBands()
    },
    recordLabels: (_, __, { dataSources }) => {
      return dataSources.festivalAPI.getRecordLabels()
    },
    festival: (_, { name }, { dataSources }) => {
      return dataSources.festivalAPI.getFestivalsByBandName(name)
    },
    festivalBands: (_, { name }, { dataSources }) => {
      return dataSources.festivalAPI.getFestivalBandsByName(name)
    },
    label: (_, { label }, { dataSources }) => {
      return dataSources.festivalAPI.getLabelFestivalBandsByName(label)
    },
    labels: (_, __, { dataSources }) => {
      return dataSources.festivalAPI.getLabels()
    },
  },
}
