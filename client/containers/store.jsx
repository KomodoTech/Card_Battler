import React, { Component } from 'react';


class Store extends Component {
  // TODO: button on click:
  /**
   * randomly choose a card from redux store based on tier of board in backend
   * add card to database somehow
   * display card
   */
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <button>Draw A Card With Random attributes And Save To Database</button>
    );
  }
}

export default Store;
