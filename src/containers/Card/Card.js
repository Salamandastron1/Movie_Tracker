import React from 'react';


const Card = ({ movie }) => {
  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={'https://image.tmdb.org/t/p/w300_and_h450_bestv2/' + movie.poster_path} />
      <p>{movie.overview}</p>
      <p>{movie.release_date}</p>
    </div>
  )
}

export default Card