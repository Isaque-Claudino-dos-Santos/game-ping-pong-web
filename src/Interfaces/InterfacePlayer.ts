import TypesPlayer from '@Src/Types/TypesPlayer'

export default interface InterfacePlayer {
    x: number
    y: number
    width: number
    height: number
    color: string

    control: TypesPlayer.Control

    speed: number

    update: () => void

    render: (context: CanvasRenderingContext2D) => void
}
