import React from 'react';
import { connect } from 'react-redux';
import { postFavorites } from '../../thunks/postFavorites';
import popcorn from '../../assets/popcorn.png';
import './Card.css'


export const Card = ({ title , id , postFavorites , poster_path , release_date , overview , user_id , vote_average, favorited }) => {
  const movie = { title , id , poster_path , release_date , overview , vote_average }
  return (
    <div className='card'>
      <div className={'movie-title ' + (favorited ? 'has-color' : '')}>
        <img
          className={'popcorn-' + (favorited ? 'show' : 'hide')} 
          src={popcorn}
          alt='Pixel popcorn. It indicates that this movie has been favorited.' />
        <h1 className='soda-pop'>{title}</h1>
        <img
          className={'popcorn-' + (favorited ? 'show' : 'hide')} 
          src={popcorn}
          alt='Pixel popcorn. It indicates that this movie has been favorited.' />
      </div>
      <div 
        className='jello'
        onClick={() => postFavorites(user_id, movie, favorited)}>
        <img 
          src={'https://image.tmdb.org/t/p/w300_and_h450_bestv2/' + poster_path} 
          alt={`This is the poster for the movie "${title}" in theaters ${release_date}.`} />
        </div>
      <p className='overview'>{overview}</p>
      <p className='release_date'>{release_date}</p>
    </div>
  )
}

export const mapStateToProps = state => {
  return { user_id: state.id }
}

export const mapDispatchToProps = dispatch => ({
  postFavorites: (id, fave, favorited) => {
    dispatch(postFavorites(id, fave, favorited))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Card);