namespace TypesKeyBoard {
    export type Key = {
        code: string
        isDown: boolean
        clicked: boolean
        enabled: boolean
        type: 'click' | 'press'
    }
}

export default TypesKeyBoard
