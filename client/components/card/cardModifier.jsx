import React, { Component } from 'react';

class CardModifier extends Component {
  render() {
    return (
      <h3>{this.props.modifier}</h3>
    );
  }
}

export default CardModifier;