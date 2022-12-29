import { Destination, Cargo, TrackingMap } from './classes'

const dest = new Destination()
const cargo = new Cargo()
const map = new TrackingMap('map-container')

map.attachMarker(dest)
map.attachMarker(cargo)
