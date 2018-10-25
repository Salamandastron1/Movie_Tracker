import React, { Component } from 'react';
import {connect} from 'react-redux';
import {key} from '../../util/key.js';
import {setMostRecent} from '../../Action-creators/SetMostRecent';
import * as API from '../../util/Helper'

export class CardContainer extends Component{
  constructor() {
    super()
  }
  componentDidMount = async () => {
    debugger
    const initialMovieData = await API.getMovieData()
    this.props.onload(initialMovieData)
  }
 render() {
  return (
    <div>
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