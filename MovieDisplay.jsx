import React from 'react'

function MovieDisplay(props) {

    const loaded = () => 
    {
        return(
            <div>
            <h1>{props.movie.Title}</h1>
            <h1>{props.movie.Year}</h1>
            <h1>Rated: {props.movie.Rated}</h1>
            <hr/>
            <img src={props.movie.Poster} alt=""/>
            <h3>Starring: {props.movie.Actors}</h3>
            <hr/>
            <h3>{props.movie.Plot}</h3>
            <h2>Awarded: {props.movie.Awards}</h2>
        </div>
        )
    }

const loading = () =>
{
    return <h1>No Movie to Display</h1>
}


    return props.movie ? loaded() : loading()
}

export default MovieDisplay