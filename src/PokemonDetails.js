import React from 'react';

class Pokemondetails extends React.Component {
  render() {
    const {name, type, averageWeight, foundAt, moreInfo } = this.props.pokemons;
    return (
      <div>
        <p>{ name }</p>
        <p>{ type }</p>
        <p>{ averageWeight.value } { averageWeight.measumentUnit }</p>
        <p>{ moreInfo }</p>
        <p>{ foundAt.map }</p>
      </div>
    );
  }
}

export default Pokemondetails;
