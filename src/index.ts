import { Destination, Cargo, TrackingMap } from './classes'
import './style.css'

const dest = new Destination()
const cargo = new Cargo()
const map = new TrackingMap('map-container')

map.attachMarker(dest)
map.attachMarker(cargo)
map.addDirection([cargo.location, dest.location])
