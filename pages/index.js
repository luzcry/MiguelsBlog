import Image from 'next/image'
import { MetadataBlog } from "../components/metadata/meta-data-blog";
import  { Footer }  from "../components/footer";
import  { Header }  from "../components/header";
import PropTypes from 'prop-types';
import styles from '../styles/About.module.css'

export default function Home() {
  return (
    <div>
      <Header/>
      <MetadataBlog/>
      <main>
        <h1 className={styles.textFooter}>
          holi
        </h1>
       
      </main>
      <Footer/>
    </div>
  )
}
