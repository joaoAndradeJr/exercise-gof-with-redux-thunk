import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCharacterDetails } from '../Redux/actions';

class CharacterDetails extends Component {
  componentDidMount() {
    const { getCharDetails, match: { params: { id } } } = this.props;
    getCharDetails(id);
  }

  render() {
    const { char } = this.props;
    return (
      <main>
        { 
          !char
          ? <h1>Loading...</h1>
          : (
            <section className="details-section">
              <h1>Character Info</h1>
              <h2>{ `Title: ${char.title} ` }</h2>
              <h3>{ `Family: ${char.family} ` }</h3>
              <h4>{ `First Name: ${char.firstName} ` }</h4>
              <h4>{ `Last Name: ${char.lastName} ` }</h4>
              <img src={char.imageUrl} alt="character" />
            </section>
          ) 
        }
      </main>
    )
  }
}

const mapStateToProps = (state) => ({
  char: state.charactersReducer.characterDetails,
});

const mapDispatchToProps = (dispatch) => ({
  getCharDetails: (id) => dispatch(getCharacterDetails(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetails);
