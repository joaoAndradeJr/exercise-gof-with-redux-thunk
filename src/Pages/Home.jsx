import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import allCharacters from '../data';

export default class Home extends Component {
  render() {
    return (
      <div>
        {
          allCharacters.map((chacarter, index) => (
            <div key={ index + 1}>
              <Link to={ `/character/${chacarter.id}` }>
                {chacarter.fullName}
              </Link>
            </div>
          ))
        }
      </div>
    )
  }
}
