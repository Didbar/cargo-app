import { Location } from '../types/Location'
import { faker } from '@faker-js/faker'

export class Cargo {
    trackingId: string
    location: Location

    constructor() {
        this.trackingId = faker.datatype.uuid()
        this.location = {
            lat: +faker.address.latitude(),
            lon: +faker.address.longitude()
        }
    }
}
