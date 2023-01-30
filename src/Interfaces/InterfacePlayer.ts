import RectMeasure from '@Src/Game/RectMeasure'
import TypesPlayer from '@Src/Types/TypesPlayer'
import InterfaceEntity from './InterfaceEntity'

export default interface InterfacePlayer extends InterfaceEntity, RectMeasure {
    control: TypesPlayer.Control
    speed: number
}
