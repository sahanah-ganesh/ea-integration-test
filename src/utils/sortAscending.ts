// ascending alphabetical sort by name
// checks if nested array of band objects exists and sorts by name
export const sortAscending = (data: any) => {
  for (const obj of data) {
    if (obj.bands) {
      obj.bands.sort((a: any, b: any) =>
        a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
      )
    }
  }
  return data.sort((a: any, b: any) =>
    a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
  )
}
