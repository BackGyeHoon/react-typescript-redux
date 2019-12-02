import { CounterType } from "./type";
import { Actions } from "./action";

interface ICounterState {
    value: number;
}

export const INITIAL_COUNTER_STATE: ICounterState = {
    value: 0,
}

export default function reducer(
    state: ICounterState = INITIAL_COUNTER_STATE,
    action: Actions
): ICounterState {
    switch (action.type) {
        case CounterType.INCREASE_COUNT: {
            return {
                ...state,
                value: state.value + 1,
            }
        }
        case CounterType.DECREASE_COUNT: {
            return {
                ...state,
                value: state.value - 1,
            }
        }
        case CounterType.RESET_COUNT: {
            return {
                ...state,
                value: 0,
            }
        }
        case CounterType.SET_COUNT: {
            return {
                ...state,
                value: action.payload.value,
            }
        }
    }
    return state
}