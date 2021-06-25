const { gql } = require('apollo-server');

const typeDefs = gql`
  type Festival {
      name: String
      bands: [Band]
  }

  type FestivalName {
      name: String
  }

  type Band {
      name: String
      recordLabel: String
  }

  type FestivalBand {
      name: String
      festivals: [FestivalName]
  }

  type RecordLabel {
      name: String
  }

  type LabelFestivalBand {
      label: String
      bands: [FestivalBand]
  }
  
  type Query {
      festivals: [Festival]!
      bands: [Band]!
      recordLabels: [RecordLabel]!
      festival(name: String!): [FestivalName]!
      festivalBands(name: String!): [FestivalBand]!
      label(label: String!): [LabelFestivalBand]!
      labels: [LabelFestivalBand]!
  }
`;

module.exports = typeDefs;