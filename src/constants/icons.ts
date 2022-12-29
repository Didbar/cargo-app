import CurrentIcon from '../assets/icons/curr.png'
import DestIcon from '../assets/icons/dest.png'

const iconBase = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/'

export const icons: Record<string, { icon: string }> = {
    current: {
        icon: CurrentIcon
    },
    destination: {
        icon: DestIcon
    },
    info: {
        icon: iconBase + 'info-i_maps.png'
    }
}
