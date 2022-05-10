import React from 'react'
import styles from "./TV.module.css"

import Image from 'next/image'
const TV = ({text1,text2,text3,text4,source}) => {
  return (
    <div className={styles.tv}>
      <div className={styles.text__container}>
        <p className={styles.text1}>
          {text1}
          </p>
   <p className={styles.text2}>
     {text2}
   <br/>{text3} <br/>{text4}</p>

    </div>
    <div className='tv__image'>
    <Image src={source} alt="tv" objectFit='contain' width={600} height={600} className={styles.image} /></div>
  
    </div> 
  )
}

export default TV