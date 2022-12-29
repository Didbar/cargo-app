import { Location } from '../types'
import { faker } from '@faker-js/faker'

export class Cargo {
    trackingId: string
    location: Location

    constructor() {
        this.trackingId = faker.datatype.uuid()
        this.location = {
            lat: +faker.address.latitude(),
            lng: +faker.address.longitude()
        }
    }
}
