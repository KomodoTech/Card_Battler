import React from 'react';
// import ReactDOM from 'react-dom';
import ReactHotLoader from 'react-hot-loader';

class App extends React.Component {
  render() {
    const { text } = this.props;
    return (
      <h1>{text}</h1>
    );
  }
};

export default App;