// goes through array of objects to remove duplicate values
export const removeDuplicates = (collection: any[]) => {
  return collection.reduce(
    (filtered: any[], item: any) =>
      filtered.some(
        (filteredItem: any) =>
          JSON.stringify(filteredItem) === JSON.stringify(item),
      )
        ? filtered
        : [...filtered, item],
    [],
  )
}
