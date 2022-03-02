import * as types from '../constants/actionTypes.js';

const initialState = {
  // TODO: should this be an array or an object?
  /**
   * it would be nice to be able to break these cards up into which ones are
   * available at the time (by tier)
   * Object.keys(state.types.available)[random number between 0 and Object.keys(state.available).length ]
   *
   */
  // TODO: deal with powers
  types: {
    available: {
      0: {
        typeId: 0,
        name: 'square',
        tier: 0,
        power: 'for now just a string for the square type',
        baseHealth: 2,
        baseAttack: 3
      },
    },
    unavailable: {
      1: {
        typeId: 1,
        name: 'circle',
        tier: 1,
        power: 'for now just a string for the circle type',
        baseHealth: 2,
        baseAttack: 3
      },
      2: {
        typeId: 2,
        name: 'triangle',
        tier: 1,
        power: 'for now just a string for the traingle type',
        baseHealth: 2,
        baseAttack: 3,
      },
      3: {
        typeId: 3,
        name: 'trapezoid',
        tier: 2,
        power: 'for now just a string for the trapezoid type',
        baseHealth: 4,
        baseAttack: 5,
      },
    },
  },
};
  
  const cardsReducer = (state = initialState, action) => {
    //TODO:
    /**
     * The cards here need the following functionality:
     * - upgrade all cards
     * - switch which cards are available currently for random draw based on tier level
     * - 
     */


    let someVariable;
  
    switch (action.type) {
      case types.ACTION_TYPE1: {
        //do some stuff
        return {
          ...state,
        }
      };
      default: {
        return state;
      }
    }
  };
  
  export default cardsReducer;