//TODO: normalize names (cards versus roster)

import React, { Component } from "react";
import { connect } from "react-redux";
// import actions from action creators file
import * as actions from "../actions/actions";
// import child components...
// import MarketsDisplay from "../components/MarketsDisplay.jsx";

// //TODO: revisit to understand mapStatetoProps and mapDispatchToProps
// const mapStateToProps = state => ({
//   // provide pertinent state here
//   marketsList: state.markets.marketsList,
//   totalCards: state.markets.totalCards
// });

// // TODO: see if it's worthwhile passing event instead of marketId
// const mapDispatchToProps = dispatch => ({
//   // create functions that will dispatch action creators
//   addMarket: () => dispatch(actions.addMarketActionCreator()),
//   deleteMarket: (marketId) => dispatch(actions.deleteMarketActionCreator),
//   addCard: (marketId) => dispatch(actions.addCardActionCreator(marketId)),
//   deleteCard: (marketId) => dispatch(actions.deleteCardActionCreator(marketId))
// });
// class MarketsContainer extends Component {
//   constructor(props) {
//     super(props);
//   }


//   render() {
//     // Render all markets and buttons here
//     const markets = [];
//     this.props.marketsList.forEach(market => {
//       const newLocation = market.newLocation;
//       const marketId = market.marketId;
//       const cards = market.cards;
//       const percentageOfTotal = ((cards / this.props.totalCards) * 100).toFixed(2);

//       markets.push()
//     });

//     return <div className="innerbox">{/* add components here... */}</div>;
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(MarketsContainer);