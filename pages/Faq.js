import { Head } from 'next/head'
import React from 'react'
import Foot from './components/Footer/Foot'
import Navbar from './components/navbar/Navbar'

export default function Faq() {
  return (
    <div>
    
      <Navbar/>
      <h1>FAQs</h1>
      <h3>What is Igreel and why everyone love it?</h3>
      <p>Igreel is a fast video, image and reel downloader developed by Artimus INC.<br/> It is the easiest and most convinient way to download your favourite instagram stuff that is why people love it. </p>
      <br/>
      <h3>Advantages of Igreel.in</h3>
      <p>By just clicking a button you download your favorite instagram content on your smartphone or pc.</p>
      <p>The content will be in full quality and without watermark.</p>
      <nr/>
      <h3>Which device can i use?</h3>
      <p>You can use whatever device you want, the only requirement is internet.</p>
      <br/>
      <h3>Where are the files that i downloaded?</h3>
      <p>Your files will be located in your gallery or in your download folder.</p>
      <br/>
      <h3>A note to respective right holders.</h3>
      <p>Dear Right holders, we do not store any links or data on our servers.<br/>Every single thing is on official instagram server is your copyright has been voilated, kindly contact instagram.com.</p>
      <Foot/>
    </div>
  )
}
