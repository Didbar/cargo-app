import { Entity } from './../types/index'
import { Location } from '../types'
import { faker } from '@faker-js/faker'

export class Cargo implements Entity {
    description: string
    trackingId: string
    location: Location

    constructor() {
        this.trackingId = faker.datatype.uuid()
        this.location = {
            lat: +faker.address.latitude(),
            lng: +faker.address.longitude()
        }
        this.description = 'current'
    }

    popupText(): string {
        return `<h3>Cargo Name:${this.trackingId}</h3>`
    }
}
