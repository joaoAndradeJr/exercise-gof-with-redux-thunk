import React, { Component } from 'react'

class CharacterDetails extends Component {
  render() {
    const { match: { params: { id } } } = this.props;
    return (
      <main>
        { `O id do personagem é: ${id}` }
      </main>
    )
  }
}

export default CharacterDetails;
