import React from 'react';


const Card = ({ title , poster_path , overview , release_date , favorited }) => {
  return (
    <div>
      <h1>{title}</h1>
      <img src={'https://image.tmdb.org/t/p/w300_and_h450_bestv2/' + poster_path} />
      <p>{overview}</p>
      <p>{release_date}</p>
    </div>
  )
}

export default Card