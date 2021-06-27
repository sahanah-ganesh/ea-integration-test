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
