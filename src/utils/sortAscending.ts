import { Bands, BandsFestivals } from '../interfaces/bands'
import { Festivals } from '../interfaces/festivals'
import { RecordLabels } from '../interfaces/recordLabels'

// ascending alphabetical sort by name or label
// checks if nested array of band objects exists and sorts by name
export const sortAscending = (data: any[]) => {
  for (const obj of data) {
    if (obj.bands) {
      obj.bands.sort((a: Bands | BandsFestivals, b: Bands | BandsFestivals) =>
        a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
      )
    }
    if (obj.label) {
      data.sort((a: RecordLabels, b: RecordLabels) =>
        a.label.toLowerCase().localeCompare(b.label.toLowerCase()),
      )
    }
    if (obj.name) {
      data.sort((a: Festivals, b: Festivals) =>
        a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
      )
    }
  }
  return data
}
