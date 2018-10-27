import React, { Component } from 'react';
import {connect} from 'react-redux';
import {key} from '../../util/key.js';
import {setMostRecent} from '../../Action-creators/setMostRecent';
import * as API from '../../util/helper';
import Card from '../Card/Card';

export class CardContainer extends Component{
  constructor() {
    super()
  }
  componentDidMount = async () => {
    const initialMovieData = await API.getMovieData()
    this.props.onload(initialMovieData)
  }
 render() {
  const { movies } = this.props;

  const movieCards = movies.map(movie => {
    return <Card {...movie} />
  })
  return (
    <div>
     {movieCards}
    </div>
  )
 } 
}


export const mapStateToProps = state => ({
  movies: state.movies
})

export const mapDispatchToProps = dispatch => ({
  onload: (movies) => dispatch(setMostRecent(movies))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);