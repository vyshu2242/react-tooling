import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

const Warning = React.lazy(() => import('./Warning'));

class App extends Component {
  state = {
    count: 0,
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Hello from react!!</h1>
        <h2>Counter: {this.state.count}</h2>
        <button
          onClick={() => {
            this.setState(state => ({ count: state.count + 1 }));
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.setState(state => ({ count: state.count - 1 }));
          }}
        >
          -
        </button>
        {count > 10 ? (
          <React.Suspense fallback={null}>
            <Warning />
          </React.Suspense>
        ) : null}
      </div>
    );
  }
}

export default hot(module)(App);
