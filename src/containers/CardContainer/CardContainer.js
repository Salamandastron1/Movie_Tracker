import React, { Component } from 'react';
import {connect} from 'react-redux';
import {setMostRecent} from '../../Action-creators/setMostRecent';
import * as API from '../../util/helper';
import Card from '../Card/Card';

export class CardContainer extends Component {
  componentDidMount = async () => {
    console.log('I fetched')
    try {
      const initialMovieData = await API.getMovieData();
      this.props.onload(initialMovieData)
      return initialMovieData;
    } catch (e) {
      throw Error(e.message);
    }
  }

  render() {
    const { movies } = this.props;
    if(movies){
      const movieCards = movies.map(movie => {
        return <Card key={movie.id} {...movie} />
      })
      return (
        <div>
          {movieCards}
        </div>
      ) 
    } else {
      return null;
    }

  } 
}


export const mapStateToProps = state => ({
  movies: state.movies
})

export const mapDispatchToProps = dispatch => ({
  onload: (movies) => dispatch(setMostRecent(movies))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);

