import React from 'react';
import { render } from 'react-dom';
import ReactHotLoader from 'react-hot-loader';

// TODO: create a src file
class App extends React.Component {
  render() {
    const { text } = this.props;
    return (
      <h1>{text}</h1>
    );
  }
};

export default App;