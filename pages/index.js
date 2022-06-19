import Image from 'next/image'
import { MetadataBlog } from "../components/metadata/meta-data-blog";
import  {Footer}  from "../components/footer";
import PropTypes from 'prop-types';

export default function Home() {
  return (
    <div>
      <MetadataBlog/>
      <main>
        <h1 >
          holi
        </h1>
       
      </main>
    <Footer/>
    </div>
  )
}
