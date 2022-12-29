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
}
