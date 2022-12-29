import { Entity } from './../types/index'
import { faker } from '@faker-js/faker'
import { Location } from '../types'

export class Destination implements Entity {
    description: string
    receiver: string
    location: Location

    constructor() {
        this.receiver = faker.name.firstName()
        this.location = {
            lat: +faker.address.latitude(),
            lng: +faker.address.longitude()
        }
        this.description = 'destination'
    }

    popupText(): string {
        return `<h3>Receiver name:${this.receiver}</h3>`
    }
}
