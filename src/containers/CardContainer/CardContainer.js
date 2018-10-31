import React, { Component } from 'react';
import {connect} from 'react-redux';
import {setMostRecent} from '../../Action-creators/setMostRecent';
import * as API from '../../util/helper';
import Card from '../Card/Card';
import './CardContainer.css'

export class CardContainer extends Component {
  componentDidMount = async () => {
    try {
      const initialMovieData = await API.getMovieData();
      this.props.onload(initialMovieData)
      return initialMovieData;
    } catch (e) {
      throw Error(e.message);
    }
  }

  render() {
    const { movies , favorites , location } = this.props;
    let movieCards;
    switch (location.pathname) {
      case '/':
        movieCards = movies.map(movie => {
          return <Card key={movie.id} {...movie} />
        })
        break;
      case '/favorites':
        const filteredMovies = movies.filter(movie => {
          return movie.favorited
        })
        movieCards = filteredMovies.map(movie => {
          return <Card key={movie.id} {...movie} />
        })
      break;
      default:
        movieCards = movies.map(movie => {
          return <Card key={movie.id} {...movie} />
        })
    }
    return (
      <section className='card-container'>
        {movieCards}
      </section>
    )
  } 
}


export const mapStateToProps = state => ({
  movies: state.movies,
  favorites: state.favorites,
})

export const mapDispatchToProps = dispatch => ({
  onload: (movies) => dispatch(setMostRecent(movies))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);

