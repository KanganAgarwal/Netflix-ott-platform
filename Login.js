import React from 'react'
import styles from  "./Login.module.css"
import TV from '../components/TV'
import Login1 from '../components/Login1'
import data from "./Datas"
import { useSession, signIn, signOut } from "next-auth/react"
const Login = () => {
  return (
    <div className={styles.login}>
        <Login1/>
        {data.map(({text1,text2,text3,text4,source})=>(
  <div key={source}>
  <TV text1={text1} text2={text2} text3={text3} text4={text4} source={source}/>
  </div>
        ))        
        }
      
    </div>
  )
}

export default Login