import * as  React from 'react';

interface ICounterContext {
    value: number;
    increase(): void;
    descrese(): void;
    reset(): void;
}

const CounterContext = React.createContext<ICounterContext>(
    {} as ICounterContext
);

interface IState {
    value: number;
}

export default CounterContext;

export class Provider extends React.Component<{}, IState> {
    public readonly state = {
        value: 0,
    }
    public render() {
        return (
            <CounterContext.Provider
                value={{
                    value: this.state.value,
                    increase: this.handleIncrease,
                    descrese: this.handleDecrease,
                    reset: this.handleReset
            }}>
            {this.props.children}
            </CounterContext.Provider>
        )
    }

    private readonly handleIncrease = () => {
        this.setState({
            value: this.state.value + 1,
        })
    }

    private readonly handleDecrease = () => {
        this.setState({
            value: this.state.value - 1,
        })
    }

    private readonly handleReset = () => {
        this.setState({
            value: 0,
        })
    }
}