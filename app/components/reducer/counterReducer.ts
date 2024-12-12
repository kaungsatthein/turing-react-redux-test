export interface CounterState {
    value: number
}

export interface Action {
    type: "INC" | "DEC"
}

export default function counterReducer(state: CounterState, action: Action): CounterState {
    switch (action.type) {
        case "INC":
            return {value: state.value + 1}
        case "DEC":
            return {value: state.value - 1}
        default:
            return {value: state.value}
    }
}