import React from 'react'

import loginbanner from "../loginbanner.jpg"
import Image from "next/image"
import styles from "./Login1.module.css"
import Header from './Header'


const Login1 = () => {
  return (
    <div className={styles.login1__main} >
        <Image src={loginbanner} alt="banner" layout='fill' objectFit='cover' className={styles.banner}/>
        <Header/>
       <div className={styles.login1__text}>
         <p className={styles.text1}> Unlimited movies, TV
       <br/> shows and more.</p>
       <br/>
       <p className={styles.text2}>
Watch anywhere. Cancel anytime.</p>
<br/>
    <p className={styles.text3}>  Ready to watch? Enter your email to create or restart your membership.</p>
    <div className={styles.input__container}>
    <input type="text"/>
    <button>
  Get Started
    </button>
    </div>
    </div>
    </div>
  )
}

export default Login1