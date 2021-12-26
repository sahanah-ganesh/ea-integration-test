import { arrayCheck } from '../src/utils/arrayCheck'

describe('arrayCheck Utils', () => {
  it('Is an array', () => {
    ;[[1, 2], ['Hello'], [{ band: 'Wild Antelope' }], []].map((n) => {
      expect(arrayCheck(n)).toEqual(n)
    })
  })
  it('Is not an array', () => {
    ;[undefined, null, '', { band: ['Wild Antelope'] }].map((n) => {
      expect(arrayCheck(n)).toEqual([])
    })
  })
})
