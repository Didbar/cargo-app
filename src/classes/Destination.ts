import { faker } from '@faker-js/faker'
import { Location } from '../types/Location'

export class Destination {
    receiver: string
    location: Location

    constructor() {
        this.receiver = faker.name.firstName()
        this.location = {
            lat: +faker.address.latitude(),
            lon: +faker.address.longitude()
        }
    }
}
