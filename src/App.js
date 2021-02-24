import './App.css';
import React, { Component } from 'react';
import Header from './Components/Header';
import Pokemon from './Components/Pokemon';
import pokemons from './Data';
import Buttons from './Components/Buttons'

let newPokemonsArr = pokemons;

class App extends Component {
  constructor() {
    super();
    this.nextPokemon = this.nextPokemon.bind(this);
    this.filterPokemon = this.filterPokemon.bind(this);
    this.state = {
      pokemon: pokemons[0],
      button: '',
    }
  }

  nextPokemon() {
    if(newPokemonsArr.indexOf(this.state.pokemon) === (newPokemonsArr.length - 1)) {
      this.setState({
        pokemon: newPokemonsArr[0],
      })
    } else {
      this.setState((previousState) => ({
        pokemon: newPokemonsArr[newPokemonsArr.indexOf(previousState.pokemon) + 1],
      }))
    }
  }

  filterPokemon(event) {
    if (event.target.innerText !== 'All') {
      newPokemonsArr = pokemons
        .filter((pokemon) => pokemon.type === event.target.innerText)
      this.setState({
        pokemon: newPokemonsArr[0],
      })
      if(newPokemonsArr.length === 1) {
        this.setState({
          button: true,
        })
      } else {
        this.setState({
          button: false,
        })
      }
    } else {
      newPokemonsArr = pokemons;
      this.setState({
        pokemon: newPokemonsArr[0],
        button: false,
      })
    }
  }

  render() {
    return (
      <div>
        <Header  />
        <main>
          <div className='App'>
            <Pokemon key = {this.state.pokemon.id} pokeData = {this.state.pokemon} />
          </div>
        </main>
        <Buttons nextPokemonFunction={this.nextPokemon} filterPokemonFunction={this.filterPokemon} disabled={this.state.button}/>
      </div>
    );
  }
}

export default App;
