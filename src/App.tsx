import React from 'react';
import './App.css';
import { Provider } from "./CounterContext";
import CounterConsumer from "./CounterConsumer";
import CounterHook from "./CounterHook";
import { Provider as ReduxProvider } from "react-redux";
import store from "./store";

const App: React.FC = () => {
  return (
    <div className="App">
        <ReduxProvider store={store}>
            <Provider>
                <CounterConsumer />
                <CounterHook />
            </Provider>
        </ReduxProvider>
    </div>
  );
}

export default App;
