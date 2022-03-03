import React, { Component } from 'react';

class CardHP extends Component {
  render() {
    return (
      <h3>{this.props.hp}</h3>
    );
  }
}

export default CardHP;