import React from 'react'

function MovieCards({movie}) {
  return (
    <div className="movie">
           <div>
            <p>{movie.Year}</p>
           </div>

           <div>
            <img src={movie.Poster !== 'N/A' ? movie.Poster : 'httpq://via.placeholder.com/404'} alt={movie.Title}/>
           </div>

           <div>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
           </div>
      </div>
  )
}

export default MovieCards