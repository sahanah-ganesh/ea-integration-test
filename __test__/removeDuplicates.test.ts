import { removeDuplicates } from '../src/utils/removeDuplicates'
import {
  duplicateBands,
  duplicateBandFestivals,
  duplicateRecordLabels,
} from './mocks'

describe('removeDuplicates Utils', () => {
  // reference: https://stackoverflow.com/a/57002833
  // extends the expect function to check if an array is distinct
  expect.extend({
    toBeDistinct(received) {
      const pass =
        Array.isArray(received) && new Set(received).size === received.length
      if (pass) {
        return {
          message: () => `expected [${received}] array is unique`,
          pass: true,
        }
      } else {
        return {
          message: () => `expected [${received}] array is not unique`,
          pass: false,
        }
      }
    },
  })
  it('Duplicates removed in Bands array', () => {
    //@ts-ignore
    expect(removeDuplicates(duplicateBands)).toBeDistinct()
  })
  it('Duplicates removed in Band Festivals array', () => {
    //@ts-ignore
    expect(removeDuplicates(duplicateBandFestivals)).toBeDistinct()
  })
  it('Duplicates removed in Record Labels array', () => {
    //@ts-ignore
    expect(removeDuplicates(duplicateRecordLabels)).toBeDistinct()
  })
})
