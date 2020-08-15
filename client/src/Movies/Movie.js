import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouteMatch, useParams } from 'react-router-dom';

const Movie = (props) => {

  console.log('Movie props: ', props)

  const params = useParams()
  console.log('Movie PARAMS: ', params)

  const routeMatch = useRouteMatch()
  console.log('ROUTE: ', routeMatch)
  
  const movie = props.movies.find(movie => movie.id === Number(params.id))


  if (!movie) {
    return <div>Loading movie information...</div>;
  }




  const { title, director, metascore } = movie;





  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
      </div>
    </div>
  );
}

export default Movie;
