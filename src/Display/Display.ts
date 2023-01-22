export default class Display {
    readonly canvas: HTMLCanvasElement
    readonly context: CanvasRenderingContext2D

    constructor(width: number = 420, height: number = 220) {
        this.canvas = document.createElement('canvas')
        this.canvas.width = width
        this.canvas.height = height
        this.context = this.canvas.getContext('2d')
        this.appendCanvasInBody()
    }

    private appendCanvasInBody() {
        const body = document.querySelector('body')

        if (body) body.appendChild(this.canvas)
    }

    clearAllCanvas() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
}
