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


export default function Photo() {
  
  

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
  const a= response.data[0];
  console.log(response.data[0]);
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
    <h1>Instagram <span className={style.purple}>Photo</span> Downloader</h1>
    <div className={style.main}>
    <form onSubmit={(e) => submit(e)}>
    <input className={style.input} value={link}
    onChange={(e) => setLink(e.target.value)} placeholder='Paste a valid link here...' type='text'/>
    
    </form>
    
    {!data?null:<button className={style.button} onClick={routeChange}>Download</button>}
    
    </div>
    <h1>All In One <span className={style.purple}> Instagram</span>  Download</h1>
    <p><a href='igreel.in'>Igreel</a> is an online free and fast web Tool to download Instagram Reels Video or to Save Instagram Reels<br/>
     in your device and computer in HD or MP4 without provding any log in details as we do not use Instagram API.<br/><br/>
     Igreel is a completely free service for lifetime and is designed to be easy to use in any device<br/>
     You can download unlimited instagram reels video.</p>
     <div className={style.line}/>
    
     
     
    
     <br/>
     <h1 className={style.h}> What is the Aim of Instagram Photo Downloader?</h1>
     <p>Instagram has become one of the most popular social media platform. It is one of the most favourite platforms for both users,<br/>creators and marketers as it provides rich and attractive content such as Instagram Reels Video.
     People nowadays join instagram to gain popularity. It can also <br/> become a good source of income.There are a lot of awesome creators who share amazing content that is on the same time funny, <br/>educational, inspirational,etc.  
     Sometimes, we like their content and we love to show it to others and then we start thinking of<br/>  downloading it and then comes the biggest problem, there is no option on instagram to download directly to device.
     We understand<br/>  this problem and we also face this same issue So, to overcome it we created igreel.in. Here you can download unlimted number of <br/>photos, videos and reels.
     And there is no need to login. You can download anything anonymously. We always think about our users that <br/> is why service of igreel.in will always be completely free of cost and you can download anytime, anywhere and anywhere.</p>
    
     <div className={style.line}/>


     
     <h1 className={style.h}> How to Download Instagram Photos Online?</h1>
     <p>In order to download Instagram Photos you need to follow the steps down below:</p>
     <p>1- Copy the Link of your favourite instagram reel video.</p>
     <p>2- Open igreel.in in your browser.</p>
     <p>3- Paste URL into the Box.</p>
     <p>4- Wait for the download button to appear.</p>
     <p>5- Click on download.</p>
     <p>6- Click on 3-dots and save it.</p>
    
     <Foot/>
    </>
  )
}
