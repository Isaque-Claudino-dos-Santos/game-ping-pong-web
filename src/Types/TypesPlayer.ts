namespace TypesPlayer {
    export type ControlKeys = {
        up: string
        down: string
    }
    export type ControlKeysState = {
        up: boolean
        down: boolean
    }
    export type Control = {
        keys: ControlKeys
        states: ControlKeysState
    }
}

export default TypesPlayer
