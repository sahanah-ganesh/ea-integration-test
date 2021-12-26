import { sortAscending } from '../src/utils/sortAscending'
import {
  bandsNotSorted,
  bandsSorted,
  bandFestivalsNotSorted,
  bandFestivalsSorted,
  recordLabelsSorted,
  recordLabelsNotSorted,
} from './mocks'

describe('sortAscending Utils', () => {
  it('Sorted asc Bands array', () => {
    expect(sortAscending(bandsNotSorted)).toEqual(bandsSorted)
  })
  it('Sorted asc in Band Festivals array', () => {
    expect(sortAscending(bandFestivalsNotSorted)).toEqual(bandFestivalsSorted)
  })
  it('Sorted asc in Record Labels array', () => {
    expect(sortAscending(recordLabelsNotSorted)).toEqual(recordLabelsSorted)
  })
})
