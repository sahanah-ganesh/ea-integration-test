export const nullFestivalName = [
  {
    bands: [{ name: 'Critter Girls', recordLabel: 'ACR' }],
  },
]

export const nullBandsName = [
  {
    name: 'Twisted Tour',
    bands: [{ recordLabel: 'ACR' }],
  },
]

export const duplicateBands = [
  {
    name: 'Twisted Tour',
    bands: [
      { name: 'Summon', recordLabel: 'Outerscope' },
      { name: 'Auditones', recordLabel: 'Marner Sis. Recording' },
      { name: 'Auditones', recordLabel: 'Marner Sis. Recording' },
    ],
  },
]

export const duplicateBandFestivals = [
  {
    label: 'ACR',
    bands: [
      {
        name: 'Manish Ditch',
        festivals: [
          {
            name: 'Trainerella',
          },
        ],
      },
      {
        name: 'Critter Girls',
        festivals: [
          {
            name: '',
          },
        ],
      },
      {
        name: 'Manish Ditch',
        festivals: [
          {
            name: 'Trainerella',
          },
        ],
      },
    ],
  },
]

export const duplicateRecordLabels = [
  {
    label: 'Outerscope',
    bands: [
      {
        name: 'Squint-281',
        festivals: [
          {
            name: 'Small Night In',
          },
          {
            name: 'Twisted Tour',
          },
        ],
      },
      {
        name: 'Summon',
        festivals: [
          {
            name: 'Twisted Tour',
          },
        ],
      },
    ],
  },
  {
    label: 'MEDIOCRE Music',
    bands: [
      {
        name: 'Yanke East',
        festivals: [
          {
            name: 'Small Night In',
          },
        ],
      },
    ],
  },
  {
    label: 'Outerscope',
    bands: [
      {
        name: 'Squint-281',
        festivals: [
          {
            name: 'Small Night In',
          },
          {
            name: 'Twisted Tour',
          },
        ],
      },
      {
        name: 'Summon',
        festivals: [
          {
            name: 'Twisted Tour',
          },
        ],
      },
    ],
  },
]

export const bandsNotSorted = [
  { name: 'Wild Antelope', recordLabel: 'Still Bottom Records' },
  { name: 'Manish Ditch', recordLabel: 'ACR' },
  { name: 'YOUKRANE', recordLabel: 'Anti Records' },
  { name: 'Adrian Venti', recordLabel: 'Monocracy Records' },
]

export const bandsSorted = [
  { name: 'Adrian Venti', recordLabel: 'Monocracy Records' },
  { name: 'Manish Ditch', recordLabel: 'ACR' },
  { name: 'Wild Antelope', recordLabel: 'Still Bottom Records' },
  { name: 'YOUKRANE', recordLabel: 'Anti Records' },
]

export const bandFestivalsNotSorted = [
  {
    label: 'ACR',
    bands: [
      {
        name: 'Manish Ditch',
        festivals: [
          {
            name: 'Trainerella',
          },
        ],
      },
      {
        name: 'Critter Girls',
        festivals: [
          {
            name: '',
          },
        ],
      },
    ],
  },
]

export const bandFestivalsSorted = [
  {
    label: 'ACR',
    bands: [
      {
        name: 'Critter Girls',
        festivals: [
          {
            name: '',
          },
        ],
      },
      {
        name: 'Manish Ditch',
        festivals: [
          {
            name: 'Trainerella',
          },
        ],
      },
    ],
  },
]

export const recordLabelsNotSorted = [
  {
    label: 'MEDIOCRE Music',
    bands: [
      {
        name: 'Yanke East',
        festivals: [
          {
            name: 'Small Night In',
          },
        ],
      },
    ],
  },
  {
    label: 'XS Recordings',
    bands: [
      {
        name: 'Werewolf Weekday',
        festivals: [
          {
            name: 'LOL-palooza',
          },
        ],
      },
    ],
  },
  {
    label: 'Outerscope',
    bands: [
      {
        name: 'Summon',
        festivals: [
          {
            name: 'Twisted Tour',
          },
        ],
      },
      {
        name: 'Squint-281',
        festivals: [
          {
            name: 'Small Night In',
          },
          {
            name: 'Twisted Tour',
          },
        ],
      },
    ],
  },
]

export const recordLabelsSorted = [
  {
    label: 'MEDIOCRE Music',
    bands: [
      {
        name: 'Yanke East',
        festivals: [
          {
            name: 'Small Night In',
          },
        ],
      },
    ],
  },
  {
    label: 'Outerscope',
    bands: [
      {
        name: 'Squint-281',
        festivals: [
          {
            name: 'Small Night In',
          },
          {
            name: 'Twisted Tour',
          },
        ],
      },
      {
        name: 'Summon',
        festivals: [
          {
            name: 'Twisted Tour',
          },
        ],
      },
    ],
  },
  {
    label: 'XS Recordings',
    bands: [
      {
        name: 'Werewolf Weekday',
        festivals: [
          {
            name: 'LOL-palooza',
          },
        ],
      },
    ],
  },
]

export const data = [
  {
    name: 'LOL-palooza',
    bands: [
      { name: 'Winter Primates', recordLabel: '' },
      { name: 'Frank Jupiter', recordLabel: 'Pacific Records' },
      { name: 'Jill Black', recordLabel: 'Fourth Woman Records' },
      { name: 'Werewolf Weekday', recordLabel: 'XS Recordings' },
    ],
  },
  {
    name: 'Small Night In',
    bands: [
      { name: 'Squint-281', recordLabel: 'Outerscope' },
      { name: 'The Black Dashes', recordLabel: 'Fourth Woman Records' },
      {
        name: 'Green Mild Cold Capsicum',
        recordLabel: 'Marner Sis. Recording',
      },
      { name: 'Yanke East', recordLabel: 'MEDIOCRE Music' },
      { name: 'Wild Antelope', recordLabel: 'Marner Sis. Recording' },
    ],
  },
  {
    name: 'Trainerella',
    bands: [
      { name: 'Wild Antelope', recordLabel: 'Still Bottom Records' },
      { name: 'Manish Ditch', recordLabel: 'ACR' },
      { name: 'YOUKRANE', recordLabel: 'Anti Records' },
      { name: 'Adrian Venti', recordLabel: 'Monocracy Records' },
    ],
  },
  {
    name: 'Twisted Tour',
    bands: [
      { name: 'Summon', recordLabel: 'Outerscope' },
      { name: 'Auditones', recordLabel: 'Marner Sis. Recording' },
      { name: 'Squint-281' },
    ],
  },
  {
    bands: [
      { name: 'Critter Girls', recordLabel: 'ACR' },
      { name: 'Propeller', recordLabel: 'Pacific Records' },
    ],
  },
]
