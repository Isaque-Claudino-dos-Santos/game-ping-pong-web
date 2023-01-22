import TypesPlayer from '@Src/Types/TypesPlayer'
import InterfaceEntity from './InterfaceEntity'

export default interface InterfacePlayer extends InterfaceEntity {
    control: TypesPlayer.Control

    speed: number


}
