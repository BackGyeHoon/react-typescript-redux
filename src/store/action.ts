import { CounterType } from "./type";

function createAction<T extends { type: CounterType }>(d: T): T {
    return d;
}

export const ActionCreators = {
    increaseCount: () => createAction({ type: CounterType.INCREASE_COUNT }),
    decreaseCount: () => createAction({ type: CounterType.DECREASE_COUNT }),
    resetCount: () => createAction({ type: CounterType.RESET_COUNT }),
    setCount: (payload: { value: number }) => 
        createAction({ type: CounterType.SET_COUNT, payload }),
};

export type Actions = ReturnType<
    typeof ActionCreators[keyof typeof ActionCreators]
>;