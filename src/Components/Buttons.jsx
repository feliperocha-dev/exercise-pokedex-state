import React, { Component } from 'react';
import Button from './Button';

class Buttons extends Component {
  render() {
    const types = ['All', 'Bug', 'Dragon', 'Electric', 'Fire', 'Normal', 'Poison', 'Psychic'];
    return (
      <div className='button-container'>
        <div>
          {types.map((type) => <Button key={type} type={type} onClickFunction={this.props.filterPokemonFunction}/>)}
        </div>
        <button onClick={this.props.nextPokemonFunction} disabled={this.props.disabled}>Next</button>
      </div>
    )
  }
}

export default Buttons;
