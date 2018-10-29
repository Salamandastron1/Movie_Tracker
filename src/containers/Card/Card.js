import React from 'react';
import { connect } from 'react-redux';
import { toggleFavorite } from '../../Action-creators/toggleFavorite';



export const Card = ({ title , poster_path , overview , release_date , favorited }) => {
  return (
    <div>
      <h1>{title}</h1>
      <input
       onClick={''}
       type='button'
       value='Favorite'/>
      <img src={'https://image.tmdb.org/t/p/w300_and_h450_bestv2/' + poster_path} alt={`This is the poster for the movie "${title}" in theaters ${release_date}.`} />
      <p>{overview}</p>
      <p>{release_date}</p>
    </div>
  )
}

export const mapDispatchToProps = dispatch => ({
  toggleFavorite: (id) => dispatch(toggleFavorite(id))
})

export default connect(null, mapDispatchToProps)(Card);