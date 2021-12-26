import { Festivals } from './festivals'

export interface Bands {
  name: string
  recordLabel: string
}

export interface BandsFestivals {
  name: string
  festivals: Partial<Festivals>
}
