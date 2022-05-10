import {React,useState,useEffect} from 'react'
import axios from './axios'

import Image from 'next/image'
import styles from './Banner.module.css'
import { useRouter } from 'next/router'
import logos from "../logos.png"
import bannerright from '../bannerright.png'
const Banner = ({fetch}) => {
  
  const url="https://image.tmdb.org/t/p/original/";
  const[movie,setMovie]= useState([])
  useEffect(() => {
async function fetchbannerData() {
const res= await axios.get(fetch);
console.log(res.data.results)
  const req=res.data.results[Math.floor(Math.random()*20)];
  
setMovie(req)
  console.log(movie);
  return res;
}

fetchbannerData();
},[])
const router=useRouter();

  return (
    <div className={styles.banner__container} style={{
      backgroundSize:"cover",
      backgroundImage:`url(${url}${movie?.backdrop_path||movie.poster_path})`,opacity:0.6
    }}>   
         <div className={styles.banner__header}>
        <Image src={logos} alt="banner" width={200} height={100} objectFit='contain' onClick={()=>router.push('/')} className={styles.logo}/>
    
      
        <Image src={bannerright} alt="logo" width={80} height={60} objectFit="contain" className={styles.logo1} />
         


    </div>
        <div className={styles.banner__description}>
          <h1 className={styles.movie_title}>{movie?.title || movie?.original_name || movie?.name}</h1>
 <div className={styles.btn_container}>
       <button className={styles.btn}>Play</button>
       <button className={styles.btn}>My List</button>
       
       </div>
       <p className={styles.overview}>{movie.overview}</p>
     

    </div>
   
    </div>
  )
  
}
export default Banner