import React from 'react';

const boardTempCardCreator = (handleDrawRandomCard) => {
  return <button onClick={handleDrawRandomCard}>Draw Random Card: {handleDrawRandomCard}</button>
}

export default boardTempCardCreator;
