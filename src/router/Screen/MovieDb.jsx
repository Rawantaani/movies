import React from 'react'
import "./Style.css"
import Card from '../../component/Card';

import axios from "axios";
import { useEffect, useState } from "react"
const MovieDb = () => {

  const [dat, setdat] = useState([]);
  const [movieName, setname] = useState('');
  

  const url = `https://api.themoviedb.org/3/discover/movie?api_key=25a8e8e69c5acf3aff32ca6ef896006c`;
  const getMovies = () => {

    axios.get(url).then((response) => {
      setdat(response.data.results)
      console.log(response.data)


    })
  }
  useEffect(() => {
    getMovies();

  }, [])

  return (
    <>


      <div className="container mt-5 d-flex flex-wrap px-4 ">
        {dat && dat.map((movie, key) => (
          <Card key={key} {...movie} />

        ))}



      </div>




    </>
  )
}

export default MovieDb