import Link from 'next/link'
import React from 'react'
import style from '../Footer/Foot.module.css'

export default function Foot() {
  return (
    <>
        
        <div className={style.main}>
        <p className={style.p}>Igreel.in is not affiliated with Instagram™ <br/>and not we host any of media on our servers all the media content is delivered through its original<br/> source and belongs to their respective owners.</p>
        <br/><footer className={style.footer}>
    
        <div className={style.logo}>
        Igreel.in
        </div>
        <div className={style.made}>
        Made with ❤️ in India</div>
        <br/>
        <div className={style.div}>
        <a href='about'>About</a> <span className={style.bold}>|</span>
        <a href='contact'>Contact</a> <span className={style.bold}>|</span>
        <a href='terms'>Terms and Conditions</a> <span className={style.bold}>|</span>
        <a href='privacypolicy'>Privacy Policy</a> </div>
      </footer>
      
        </div>
        <br/>
    </>
  )
}
