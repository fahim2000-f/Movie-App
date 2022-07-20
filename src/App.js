import React, { useEffect, useState } from "react";
import './App.css'
import MovieCards from "./MovieCards";
import searchicon from './search.svg'


const api_url = "https://www.omdbapi.com?apikey=6cfb7c5";



function App() {

    const [movies,setmovies]=useState([])
    const [searchterm,setsearchterm]=useState()

  const searshmovie = async(title)=>{
    const response = await fetch(`${api_url}&s=${title}`)
    const data = await response.json()
    setmovies(data.Search)
  }

  useEffect(()=>{
    searshmovie('spiderman')
  },[]);


  return (
  <div className="app">
    <h1>MovieLand</h1>

    <div className="search">
      
      <input 
      placeholder="search for movie"
      value={searchterm}
      onChange={(e)=>{setsearchterm(e.target.value)}}
      />
      
      <img 
      src={searchicon}
      alt="search"
      onClick ={()=>{searshmovie(searchterm)}}
      />
    </div>

{
      movies?.length >0 ? (
        <div className="container">
        {movies.map((movie)=>(
          <MovieCards movie={movie}/>
        ))}
        
      </div>
      )
      :(
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )
}
   
  </div>
  )
}

export default App;
