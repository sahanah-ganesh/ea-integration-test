// checks to see if input is an array. returns input if it is an array, empty array if it is not
export const arrayCheck = (input: any) => {
  return Array.isArray(input) ? input : []
}
