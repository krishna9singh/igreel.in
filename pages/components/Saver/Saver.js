import Image from 'next/image'
import React, { useState , useEffect} from 'react'
import style from '../Saver/Saver.module.css'
import Reels from '../static/Reels.png'
import photos from '../static/photos.png'
import videos from '../static/videos.png'
import { useRouter } from 'next/router'

export default function Saver() {
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
    <h1>All In One <span className={style.purple}>Instagram</span> Downloader</h1>
    <div className={style.main}>
    <form onSubmit={(e) => submit(e)}>
    <input className={style.input} value={link}
    onChange={(e) => setLink(e.target.value)} placeholder='Paste a valid link here...' type='text'/>
    
    </form>
    
    {!data?null:<button className={style.button} onClick={routeChange}>Download</button>}
    
    </div>
    
    <h1>Instagram <span className={style.purple}>Reels</span> Video Download</h1>
    <p><a href='igreel.in'>Igreel</a> is an online free and fast web Tool to download Instagram Reels Video or to Save Instagram Reels<br/>
     in your device and computer in HD or MP4 without provding any log in details as we do not use Instagram API.<br/><br/>
     Igreel is a completely free service for lifetime and is designed to be easy to use in any device<br/>
     You can download unlimited instagram reels video.</p>
     <div className={style.line}/>
     <h1 className={style.h}> How to Download Instagram Reels video Online?</h1>
     <p>In order to download instagram reels video you need to follow the steps down below:</p>
     <p>1- Copy the Link of your favourite instagram reel video.</p>
     <p>2- Open igreel.in in your browser.</p>
     <p>3- Paste URL into the Box.</p>
     <p>4- Wait for the download button to appear.</p>
     <p>5- Click on download.</p>
     <p>6- Click on 3-dots and save it.</p>
     <br/>
     <div className={style.line}/>
     <h2>Features of <span className={style.blue}>Igreel.in</span></h2>
     <div className={style.box}></div>
     <div className={style.sub}>
     <div className={style.flex}>
     <Image src={Reels} alt='Instagram reels downloader' height={400} width={600} className={style.reels} />
     <ul className={style.ul}>
     <h2 className={style.divi}>Instagram Reels Downloader</h2>
     <li className={style.lii}>You can download unlimited number of Instagram Reels.</li>
     <li className={style.lii}>Download Reels without watermark.</li>
     <li className={style.lii}>You can download unlimited Reels in HD.</li>
     <li className={style.lii}>Its always free for lifetime.</li>
     <li className={style.lii}>No need to provide login and signup details.</li>
     </ul></div>
     </div><br/>
     <div className={style.line}/>
     <br/><br/>


     <div className={style.sub1}>
     <div className={style.flex}>
     
     <ul className={style.ul}>
     <h2 className={style.divi1}>Instagram Photos Downloader</h2>
     <li className={style.lii}>Instagram Photo Downloader is a great tool.</li>
     <li className={style.lii}>Download Instagram photos without watermark.</li>
     <li className={style.lii}>You can download unlimited Photos from Instagram.</li>
     <li className={style.lii}>Service is free for lifetime.</li>
     <li className={style.lii}>No credentials required.</li>
     </ul><Image src={photos} alt='Instagram photos downloader' height={400} width={600} className={style.img} /></div>
     </div><br/>
     <div className={style.line}/>
     <br/><br/>


     <div className={style.sub}>
     <div className={style.flex}>
     <Image src={videos} alt='Instagram video downloader' height={400} width={600} className={style.img} />
     <ul className={style.ul}>
     <h2 className={style.divi}>Instagram Video Downloader</h2>
     <li className={style.lii}>You can download Instagram Videos without watermark.</li>
     <li className={style.lii}>Instagram video download in full hd.</li>
     <li className={style.lii}>Instagram Downloader Service is free forever.</li>
     <li className={style.lii}>You can downloader without any limitation.</li>
     <li className={style.lii}>We do not require any personal detials.</li>
     </ul></div>
     </div><br/>
     <div className={style.line}/>
     
     
    
     <br/>
     <h1 className={style.h}> What is the Aim of Instagram Reel Video Downloader?</h1>
     <p>Instagram has become one of the most popular social media platform. It is one of the most favourite platforms for both users,<br/>creators and marketers as it provides rich and attractive content such as Instagram Reels Video.
     People nowadays join instagram to gain popularity. It can also <br/> become a good source of income.There are a lot of awesome creators who share amazing content that is on the same time funny, <br/>educational, inspirational,etc.  
     Sometimes, we like their content and we love to show it to others and then we start thinking of<br/>  downloading it and then comes the biggest problem, there is no option on instagram to download directly to device.
     We understand<br/>  this problem and we also face this same issue So, to overcome it we created igreel.in. Here you can download unlimted number of <br/>photos, videos and reels.
     And there is no need to login. You can download anything anonymously. We always think about our users that <br/> is why service of igreel.in will always be completely free of cost and you can download anytime, anywhere and anywhere.</p>
    
     <div className={style.line}/>

     <h1> What is <span className={style.purple}>Instagram</span> and why is it popular?</h1>
     <p>instagram Is one of the biggest scoail media platform which is currently owned by Facebook. It has whopping 1.3 Billion users.<br/>
     It is a platform where people can chat with thier friends and upload photos, videos connect with others make new friends.<br/>
     <br/>
     Instagram has a lot of creators which make shocking and awesome content. Nowadays, Instagram has become a<br/>  platform where talent gets attention and hence you can also make money.
     Marketers and big companies run their ads on instagram to get popularity.</p>
     <br/>
     <p>Type of content we can upload in Instagram:-</p>
     <p>1- Instagram Reels</p>
     <p>2- Instagram Photos</p>
     <p>3- Instagram Videos</p>
     <p>4- Instagram TV</p>
     <p>5- Instagram Stories</p>
     <br/>

      
    </>
    
  )
  
}
