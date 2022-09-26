import React from 'react'
import styles from '../styles/Global'

function Button({assetUrl, link}) {
  return (
    <div onClick={()=> window.open(link,"_blank")}  className={`${styles.btnBlack}`}>
      <img src={assetUrl} alt="expoIcon"  className={styles.btnIcon} />
      <div  className={`flex flex-col justify-start ml-4`}>
        <p className={`${styles.btnText} font-normal text-xs`}>View it on</p>
        <p className={`${styles.btnText} font-bold text-sm`}>Expo Store</p>
      </div>
    </div>
  )
}

export default Button