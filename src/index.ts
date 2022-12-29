import { Destination, Cargo, TrackingMap } from './classes'

const dest = new Destination()
const cargo = new Cargo()
const map = new TrackingMap('map-container')

map.attachMarker(dest, 'destination')
map.attachMarker(cargo, 'current')
map.allLines([cargo.location, dest.location])
