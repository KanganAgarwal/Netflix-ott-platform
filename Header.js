import React,{useState} from 'react'
import Image from "next/image"
import logos from "../logos.png"
import styles from "./Header.module.css"

import bannerright from '../bannerright.png'
import { useRouter } from 'next/router';
const Header = () => {
    const [loggedin,setLoggedin]= useState(false)
  const router=useRouter();
  return (
   <div>
        <div className={styles.banner__header}>
        <Image src={logos} alt="banner" width={200} height={100} objectFit='contain' onClick={()=>router.push('/')} className={styles.logo}/>
    
       
        <button className={styles.btn1}>English</button>
        <button className={styles.btn2}  onClick={() => {router.push('/afterlogin') }}>Sign In</button>
        </div>
        


   
    </div>
  )
}

export default Header