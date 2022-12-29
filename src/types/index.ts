export interface Entity {
    description: string
    location: Location
    popupText(): string
}

export interface Location {
    lat: number
    lng: number
}
