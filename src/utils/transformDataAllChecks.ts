import { changeNullFields } from './changeNullFields'
import { removeDuplicates } from './removeDuplicates'
import { sortAscending } from './sortAscending'
import { arrayCheck } from './arrayCheck'

export const transformDataAllChecks = (collection: any[]) => {
  const nullRemoved = changeNullFields(collection)
  const duplicatesRemoved = removeDuplicates(nullRemoved)
  const dataSorted = sortAscending(duplicatesRemoved)
  const isArray = arrayCheck(dataSorted)
  return isArray
}
