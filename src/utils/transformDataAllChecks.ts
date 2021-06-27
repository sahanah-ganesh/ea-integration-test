import { changeNullFields } from './changeNullFields'
import { removeDuplicates } from './removeDuplicates'
import { sortAscending } from './sortAscending'
import { arrayCheck } from './arrayCheck'
import { Festivals } from '../interfaces/festivals'

export const transformDataAllChecks = (collection: [Festivals]) => {
  const nullRemoved = changeNullFields(collection)
  const duplicatesRemoved = removeDuplicates(nullRemoved)
  const dataSorted = sortAscending(duplicatesRemoved)
  const isArray = arrayCheck(dataSorted)
  return isArray
}
