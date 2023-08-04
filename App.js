import './App.css';
import { useState, useEffect } from 'react';
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';

function App() {
  const apiKey="e732075a";

// {APIKEY DATA}
  const [movie, setMovie] = useState("")


// {STATE}
  const getMovie = async(searchTerm) => 
  {
  
  const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`)
  //go to site and search for title
  const data = await response.json()
  //turn info into json format

  setMovie(data)
//take retrieved data and set it as current movie
  
  }

  useEffect(()=>
  {
    getMovie("Clueless")
  }, []);

  return (
    <div className="App">
      <Form movieSearch={getMovie}/>

      <MovieDisplay movie={movie}/>
    </div>
  );
}

export default App;
