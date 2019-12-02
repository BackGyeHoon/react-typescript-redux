import * as React from "react";
import { bindActionCreators } from "redux";
import { ActionCreators } from "./store/action";
import { useDispatch, useSelector } from "react-redux";

export default function CounterConsumer() {
    const value = (
        useSelector((state: { counter: { value: number } }) => state.counter.value)
    );
    const actions = bindActionCreators({
        increase: ActionCreators.increaseCount,
        descrese: ActionCreators.decreaseCount,
        reset: ActionCreators.resetCount
    }, useDispatch());
    return (
                    <div>
                        <p>Value: {value}</p>
                        <button onClick={actions.increase}>+</button>
            <button onClick={actions.descrese}>-</button>
            <button onClick={actions.reset}>reset</button>
                    </div>
    )
}