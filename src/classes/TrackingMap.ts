import { Destination, Cargo } from '../classes'

export class TrackingMap {
    private _googleMap: google.maps.Map

    constructor(elementId: string) {
        const mapDiv = document.getElementById(elementId)
        this._googleMap = new google.maps.Map(mapDiv, {
            zoom: 1.6,
            center: {
                lat: 0,
                lng: 20
            }
        })
    }

    attachMarker(entity: Destination | Cargo): void {
        new google.maps.Marker({
            map: this._googleMap,
            position: {
                lat: entity.location.lat,
                lng: entity.location.lon
            }
        })
    }
}
