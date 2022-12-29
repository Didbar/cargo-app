import { icons } from '../constants/icons'
import { Location, Entity } from '../types'

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

    attachMarker(entity: Entity): void {
        const marker = new google.maps.Marker({
            map: this._googleMap,
            animation: google.maps.Animation.DROP,
            position: {
                lat: entity.location.lat,
                lng: entity.location.lng
            },
            icon: icons[entity.description].icon,
            title: entity.description
        })
        marker.getTitle()
        marker.addListener('click', () => {
            console.log(entity.description)
            const popup = new google.maps.InfoWindow({
                content: entity.popupText()
            })
            popup.open(this._googleMap, marker)
        })
    }
    addDirection(entities: Location[]) {
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
