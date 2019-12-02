import * as React from "react";
import CounterContext from "./CounterContext";

export default function CounterHook() {
    const context = React.useContext(CounterContext);
    return (
        <div>
            <p>Value: {context.value}</p>
            <button onClick={context.increase}>+</button>
            <button onClick={context.descrese}>-</button>
            <button onClick={context.reset}>reset</button>
        </div>
    )
}