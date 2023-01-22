export default interface InterfaceEntity {
    x: number
    y: number
    width: number
    height: number
    color: string

    update: () => void

    render: (context: CanvasRenderingContext2D) => void
}
