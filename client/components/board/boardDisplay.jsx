/**
* Board Display:
* display a button via boardTempCardCreator
* that ideally draws a card for available types in state (redux store) and
* displays it in boardRoster component within this file
* it should also create this card in the backend:
*  - 
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import BoardTempCardCreator from './boardTempCardCreator';

// TODO: this should be the roster or something
import CardDisplay from '../card/cardDisplay';

// Need this when trying to use Async Await
import 'regenerator-runtime/runtime';

const mapStateToProps = ({ cards }) => {
  // console.log('mapStateToProps cards: ', cards);
  return {
    // provide pertinent state here
    cards,
  }
}

class BoardDisplay extends Component {
  constructor(props) {
    super(props);
    this.drawRandomCard = this.drawRandomCard.bind(this);
    this.generateTestBoard = this.generateTestBoard.bind(this);
    // this.addCardToBoard = this.addCardToBoard.bind(this);
    this.getStore = this.getStore.bind(this);
  }

  // componentDidMount() {

  // }

  async getAllCards() {
    try {
      return await fetch('/api/cards').then(resCards => resCards.json());
    }
    catch (err) {
      console.log('error in boardDisplay getAllCards: ', err);
    }
  }

  // Get all stores and just grab the first for testing
  async getStore() {
    try {
      const allStores = await fetch('/api/stores').then(resStore => resStore.json());
      return allStores[0]._id;
    }
    catch (err) {
      console.log('error in boardDisplay getStore: ', err);
    }
  }

  async generateTestBoard() {
    // GetAll current cards in array format
    /**
    * [{"_id":"6220294b39aaa6413c5ec560","health":3,"attack":2,"level":0,"type_id":1,"equipment_id":3,"__v":0},{"_id":"6220296148311b36535fd107","health":2,"attack":3,"level":1,"type_id":2,"equipment_id":4,"__v":0}]
    * then push new board to database
    */
    // TODO: create board route for post
    try {
      const allCards = await this.getAllCards();
      const storeId = await this.getStore();
      return await fetch('/api/boards', {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/JSON'
        },
        body: JSON.stringify({
          roundNumber: 0,
          health: 10,
          currency: 10,
          wins: 0,
          store: storeId,
          cards: allCards,
          upgrade: 0,
          maxTier: 0,
        }),
      })
        .then(resBoard => resBoard.json());
    }
    catch (err) {
      console.log('generateTestBoard: ERROR: ', err)
    }
  }

  // addCardToBoard(card, board) {
  //   // Update board via board id
  // }

  // Function for generating random card
  // TODO: should this be one of the actions in the board reducer? Probably
  async drawRandomCard() {
    // TODO: make sure available on cards state updates according to max tier
    // list of base cards currently available
    const { available } = this.props.cards.types;
    console.log('available: ', available);

    const availableKeys = Object.keys(available);
    // Remember 1 is exclusive
    const randomIndex = (Math.random() * availableKeys.length) >> 0;
    const randomCard = available[randomIndex];
    console.log('randomCard: ', randomCard);
    // Push to back end
    /**
    * Create new card by sending POST to api/cards
    * add that card to the current board's cards array (currently we don't have a board though)
    */

    const testBoard = await this.generateTestBoard();
    console.log(testBoard);

    // addCardToBoard(randomCard, testBoard);

    return randomCard;
  }

  render() {
    return (
      <>
        <BoardTempCardCreator drawRandomCardHandler={this.drawRandomCard} />
        <CardDisplay />
      </>
    );
  }
}


export default connect(mapStateToProps, null)(BoardDisplay);