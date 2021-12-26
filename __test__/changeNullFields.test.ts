import { changeNullFields } from '../src/utils/changeNullFields'
import { nullFestivalName, nullBandsName } from './mocks'

describe('changeNullFields Utils', () => {
  it('Null fields changed in top-level festival name field', () => {
    //@ts-ignore
    expect(changeNullFields(nullFestivalName)[0].name).toEqual('')
  })
  it('Null fields changed when nested band name field', () => {
    //@ts-ignore
    expect(changeNullFields(nullBandsName)[0].bands[0].name).toEqual('')
  })
})
