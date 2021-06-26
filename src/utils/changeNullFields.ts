export const changeNullFields: any = (data: any[]) => {
  for (const obj of data) {
    if (obj.name === undefined || obj.name === null) {
      obj.name = ''
    }
    for (const nestedObj of obj.bands) {
      if (nestedObj.recordLabel === undefined || obj.recordLabel === null) {
        nestedObj.recordLabel = ''
      }
    }
  }
  const result = data.sort((a: { name: string }, b: { name: string }) =>
    a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
  )
  return result
}
