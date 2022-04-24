import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Foot from './components/Footer/Foot'
import Navbar from './components/navbar/Navbar'
import Saver from './components/Saver/Saver'
import Link from 'next/link';


export default function Home(){
  return (
    <div className={styles.container}>
      <Head>
        <title>Instagram Reel Downloader | Igreel.in</title>
        <meta name="description" content="Best Instagram Reel Video Downloader in 2022" />
        <meta property='og:title' content='Instagram Reel Downloader | Igreel.in'/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
       <Saver/>

       <Foot/>
      
    </div>
  )
}
