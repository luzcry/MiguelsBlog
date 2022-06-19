import React from "react";
import Image from "next/image";
import styles from '../styles/About.module.css'

export function Footer({  }) {
  
  return (
    <>
      <hr className={styles.line} />
      <footer className={styles.container}>
        <div className={styles.icon} >
          <a className={styles.animation} key="facebook icon" rel="icon" href="https://www.facebook.com">
            <Image 
              alt="URL to Facebook" 
              src="/images/facebook.png" 
              width="54" 
              height="54" 
            />
          </a>
        </div>
        <div className={styles.icon} >
          <a className={styles.animation}  key="gmail icon" rel="icon" href="https://www.gmail.com">
            <Image 
              alt="URL to Mail" 
              src="/images/email.png" 
              width="50" 
              height="50" 
            />
          </a>
        </div>
      </footer>
    </>
  )
}

