import { Destination, Cargo } from '../classes'
import { icons } from '../constants/icons'
import { Location } from '../types'

export class TrackingMap {
    private _googleMap: google.maps.Map
    constructor(elementId: string) {
        const mapDiv = document.getElementById(elementId)
        this._googleMap = new google.maps.Map(mapDiv, {
            zoom: 2,
            center: {
                lat: 0,
                lng: 20
            }
        })
    }

    attachMarker(entity: Destination | Cargo, type: string): void {
        const marker = new google.maps.Marker({
            map: this._googleMap,
            animation: google.maps.Animation.DROP,
            position: {
                lat: entity.location.lat,
                lng: entity.location.lng
            },
            icon: icons[type].icon,
            title: type
        })
        marker.getTitle()
    }
    allLines(entities: Location[]) {
        const flightPath = new google.maps.Polyline({
            path: entities,
            geodesic: true,
            strokeColor: '#2596be',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            icons: [
                {
                    repeat: '100px',
                    icon: { path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW },
                    offset: '100%'
                }
            ]
        })

        flightPath.setMap(this._googleMap)
    }
}
