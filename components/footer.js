import React from "react";
import Image from "next/image";
import styles from '../styles/About.module.css'

export function Footer({  }) {
  
  return (
    <>
      <hr className={styles.line} />
      <footer className={styles.container}>
          <a className={styles.icon} key="facebook icon" rel="icon" href="https://www.facebook.com">
            <Image 
              alt="URL to Facebook" 
              src="/images/facebook.png" 
              width="54" 
              height="54" 
            />
          </a>
          <a className={styles.icon} key="gmail icon" rel="icon" href="https://www.gmail.com">
            <Image 
              alt="URL to Mail" 
              src="/images/email.png" 
              width="50" 
              height="50" 
            />
          </a>  
      </footer>
      <p className={styles.textFooter}>© 2022 Miguel Rodríguez. Todos los derechos reservados.</p>
    </>
  )
}

