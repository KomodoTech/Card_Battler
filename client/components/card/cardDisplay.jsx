import React, { Component } from 'react';
import CardAttack from './cardAttack';
import CardEquipment from './cardEquipment';
import CardHP from './cardHP';
import CardModifier from './cardModifier';

/**
 *  hp: { type: Number, required: true },
  attack: { type: Number, required: true },
  species_id: { type: Number, required: true },
  equipment_id: { type: Number },
 */


class CardDisplay extends Component {

  render() {
    /**
     *  hp: { type: Number, required: true },
  attack: { type: Number, required: true },
  level: { type: Number, required: true, default: 0 },
  type_id: { type: Number, required: true },
  equipment_id: { type: Number },
     */
    // const testCard = {
    //   hp: 3,
    //   attack: 2,
    //   level: 0,
    //   type_id: 0,
    //   equipment_id: 1,
    // }
    // const testCardState = {
    //   types: {
    //     available: {
    //       0: {
    //         typeId: 0,
    //         name: 'square',
    //         tier: 0,
    //         modifier: 'for now just a string for the square type',
    //         baseHP: 2,
    //         baseAttack: 3
    //       },
    //     },
    //     unavailable: {
    //       1: {
    //         typeId: 1,
    //         name: 'circle',
    //         tier: 1,
    //         modifier: 'for now just a string for the circle type',
    //         baseHP: 2,
    //         baseAttack: 3
    //       },
    //       2: {
    //         typeId: 2,
    //         name: 'triangle',
    //         tier: 1,
    //         modifier: 'for now just a string for the traingle type',
    //         baseHP: 2,
    //         baseAttack: 3,
    //       },
    //       3: {
    //         typeId: 3,
    //         name: 'trapezoid',
    //         tier: 2,
    //         modifier: 'for now just a string for the trapezoid type',
    //         baseHP: 4,
    //         baseAttack: 5,
    //       },
    //     },
    //   },
    // };

    // const testCardSelected = testCardState.types.available[testCard.type_id];

    const { name, hp, attack, equipment_id, modifier } = this.props;
    return (
      <div className='cardDetails'>
        {/* <mesh>
          <boxBufferGeometry attach='geometry' />
          <meshLambertMaterial attach='material' color='hotpink' />
        </mesh> */}
        <h3 className='cardName'>{name}</h3>
        <ul>
          <li className='cardHP'>
            <CardHP hp={hp} />
          </li>
          <li className='cardAttack'>
            <CardAttack attack={attack} />
          </li>
          <li className='cardEquipment'>
            <CardEquipment equipment={equipment_id} />
          </li>
          <li className='cardModifier'>
            <CardModifier modifier={modifier} />
          </li>
        </ul>
      </div>
    );
  }
}

export default CardDisplay;
