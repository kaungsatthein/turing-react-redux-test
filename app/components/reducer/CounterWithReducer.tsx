"use client"

import React, {useReducer} from 'react'
import counterReducer, {CounterState} from "@/app/components/reducer/counterReducer";

const initialState: CounterState = {
    value: 0,
}

const CounterWithReducer = () => {
    const [counter, dispatch] = useReducer(counterReducer, initialState)
    const incHandler = () => {
        dispatch({
            type: "INC"
        })
    }
    const decHandler = () => {
        dispatch({
            type: "DEC"
        })
    }
    return (
        <div>CounterWIthReducer
            <button onClick={decHandler}>
                -
            </button>
            <h4>
                {counter.value}
            </h4>
            <button onClick={incHandler}>
                +
            </button>
        </div>
    )
}
export default CounterWithReducer
