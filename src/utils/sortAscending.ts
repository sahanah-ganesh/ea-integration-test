export const sortAscending = (data: any) => {
  return data.sort((a: any, b: any) =>
    a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
  )
}
