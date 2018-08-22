import React, {Component } from 'react';
import Button from '@material-ui/core/Button';
import MovieItem from './MovieItem';
import './MovieList.css';

function MovieList() {
    return (
        <div className="movie-list">
        <div className="movies-container">
            <MovieItem title="Deadpool 2" year="2016" description="On July 2nd, communications systems worldwide are sent into chaos by a strange atmospheric interference. It is soon learned by the military that a number of enormous objects are on a collision course with Earth. At first thought to be meteors, they are later revealed to be gigantic spacecraft, piloted by a mysterious alien species." />
        </div>
        <Button variant="contained" color="primary">
        Add New Movie
      </Button>
        </div>
    );
}

export default MovieList;