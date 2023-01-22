import TypesKeyBoard from '@Src/Types/TypesKeyBoard'

export default class KeyBoard {
    static readonly keys: { [index: string]: TypesKeyBoard.Key } = {}

    constructor() {
        this.createEvents()
    }

    private static keyExists(key: string): boolean {
        return KeyBoard.keys[key] ? true : false
    }

    private static saveKey(key: string) {
        KeyBoard.keys[key] = {
            code: key,
            clicked: false,
            isDown: false,
            enabled: true,
            type: 'press',
        }
    }

    static config(key: string) {
        if (!KeyBoard.keyExists(key)) return KeyBoard.saveKey(key)
    }

    static check(key: string) {
        if (KeyBoard.keyExists(key)) {
            return KeyBoard.keys[key].isDown
        }
    }

    private readonly createEvents = () => {
        addEventListener('keydown', (event) => {
            const { key } = event
            const currentKey = KeyBoard.keys[key]

            if (KeyBoard.keyExists(currentKey?.code) && currentKey.enabled) {
                if (currentKey.type === 'press') {
                    currentKey.isDown = true
                }
            }
        })

        addEventListener('keyup', (event) => {
            const { key } = event
            const currentKey = KeyBoard.keys[key]

            if (KeyBoard.keyExists(currentKey?.code) && currentKey.enabled) {
                if (currentKey.type === 'press') {
                    currentKey.isDown = false
                }
            }
        })
    }
}
