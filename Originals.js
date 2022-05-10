import React,{useState,useEffect} from 'react'
import axios from './axios'
import styles from "./Originals.module.css"
import Image from "next/image"
import YouTube from 'react-youtube';

const Originals = ({title,fetch,data}) => {
  const opts = {
    height: '390',
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    }}
  const url="https://image.tmdb.org/t/p/original/"
  const[movies,setMovies]= useState([])
  useEffect(() => {
async function fetchData() {
 const res= await axios.get(fetch);
   setMovies(res.data.results);
console.log(movies);
   return res;
setMovies(movies);
 }

fetchData();
  }
  ,[fetch]
  )
  return (
    <div className={styles.container}>
       <p className={styles.title}>{title}
</p>

<div className={styles.posters}>
 {movies.map((movie)=>(
  <img src={`${url}${movie?.backdrop_path || movie?.poster_path}`} alt="movie" key={movie.id} className={styles.poster}/>
  ))
 
 }
</div>
 <YouTube videoId="2g811Eo7K8U" opts={opts} />

</div>
  )
  
  }
export default Originals
