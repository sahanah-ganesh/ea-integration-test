// ascending alphabetical sort by name or label
// checks if nested array of band objects exists and sorts by name
export const sortAscending = (data: any) => {
  for (const obj of data) {
    if (obj.bands) {
      obj.bands.sort((a: any, b: any) =>
        a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
      )
    }
    if (obj.label) {
      data.sort((a: any, b: any) =>
        a.label.toLowerCase().localeCompare(b.label.toLowerCase()),
      )
    }
    if (obj.name) {
      data.sort((a: any, b: any) =>
        a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
      )
    }
  }
  return data
}
