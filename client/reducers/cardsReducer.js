import * as types from '../constants/actionTypes.js';

const initialState = {
  // TODO: should this be an array or an object?
  /**
   * it would be nice to be able to break these cards up into which ones are
   * available at the time (by tier)
   * Object.keys(state.types.available)[random number between 0 and Object.keys(state.available).length ]
   *
   */
  // TODO: deal with modifiers they should be in board state
  // For now the modifier should probably be an id that references an object in modifier state somewhere
  types: {
    available: {
      0: {
        typeId: 0,
        name: 'square',
        tier: 0,
        modifier: 'for now just a string for the square type',
        baseHP: 2,
        baseAttack: 3
      },
      1: {
        typeId: 1,
        name: 'circle',
        tier: 0,
        modifier: 'for now just a string for the circle type',
        baseHP: 2,
        baseAttack: 3
      },
    },
    unavailable: {
      2: {
        typeId: 2,
        name: 'triangle',
        tier: 1,
        modifier: 'for now just a string for the traingle type',
        baseHP: 2,
        baseAttack: 3,
      },
      3: {
        typeId: 3,
        name: 'trapezoid',
        tier: 2,
        modifier: 'for now just a string for the trapezoid type',
        baseHP: 4,
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