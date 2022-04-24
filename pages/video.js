import Image from 'next/image'
import React, { useState , useEffect} from 'react'
import style from '../pages/components/Saver/Saver.module.css'
import Reels from '../pages/components/static/Reels.png'
import photos from '../pages/components/static/photos.png'
import videos from '../pages/components/static/videos.png'
import { useRouter } from 'next/router'
import Navbar from './components/navbar/Navbar'
import Foot from './components/Footer/Foot'
import { Head } from 'next/head'



export default function Video() {
  
  

  const router=useRouter();
  const [link, setLink] = useState();
  const [data,setData] = useState();
 
  const submit = (e) => {
    e?.preventDefault();
    
  };
 
  
  useEffect(() => {
    
  const axios = require("axios");

  const options = {
    method: 'GET',
    url: 'https://instagram-media-downloader.p.rapidapi.com/rapid/post.php',
    params: {url: `${link}`},
    headers: {
      'X-RapidAPI-Host': 'instagram-media-downloader.p.rapidapi.com',
      'X-RapidAPI-Key': '3fc81110damshf13453f3d188f84p160d46jsn3c403217c166'
    }
  };
  
axios.request(options).then(function (response) {
  const a= response.data.video;
  console.log(response.data.video);
  setData(a);
}).catch(function (error) {
	console.error(error);
});

}, [link]);

const routeChange =()=>{
  router.push(data)
}
 
  return (
    <>
    
    <Navbar/>
    <h1>Instagram <span className={style.purple}>Video</span> Downloader</h1>
    <div className={style.main}>
    <form onSubmit={(e) => submit(e)}>
    <input className={style.input} value={link}
    onChange={(e) => setLink(e.target.value)} placeholder='Paste a valid link here...' type='text'/>
  
    </form>
    
    {!data?null:<button className={style.button} onClick={routeChange}>Download</button>}
    
    </div>
    <h1>All in One <span className={style.purple}>instagram</span>  Downloader</h1>
    <p><a href='igreel.in'>Igreel</a> is an online free and fast web Tool to download Instagram Video or to Save Instagram<br/>
     in your device and computer in HD or MP4 without provding any log in details as we do not use Instagram API.<br/><br/>
     Igreel is a completely free service for lifetime and is designed to be easy to use in any device<br/>
     You can download unlimited instagram video.</p>
     <div className={style.line}/>
    
     
     <h1 className={style.h}> How to Download Instagram video Online?</h1>
     <p>In order to download instagram video you need to follow the steps down below:</p>
     <p>1- Copy the Link of your favourite instagram video.</p>
     <p>2- Open igreel.in in your browser.</p>
     <p>3- Paste URL into the Box.</p>
     <p>4- Wait for the download button to appear.</p>
     <p>5- Click on download.</p>
     <p>6- Click on 3-dots and save it.</p>
     <br/>
     <Foot/>
    </>
  )
}
