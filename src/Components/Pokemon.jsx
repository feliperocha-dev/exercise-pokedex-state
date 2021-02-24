import React, { Component } from 'react';

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokeData;
    const pokemon = (
      <div className='poke-container'>
        <div className='poke-description'>
          <p>{name}</p>
          <p>Type: {type}</p>
          <p>Average Weight: {averageWeight.value}{averageWeight.measurementUnit}</p>
        </div>
        <div className='poke-img'>
          <img src={image} alt={`${name}-img`}/>
        </div>
      </div>
    );
    return pokemon;
  }
}

export default Pokemon;