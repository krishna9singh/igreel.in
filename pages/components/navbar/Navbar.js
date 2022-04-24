import Link from 'next/link';
import React from 'react';
import style from'../navbar/Navbar.module.css';

export default function Navbar() {
  return (
    <div className={style.nav}>
        <div className={style.logo}>
        Igreel.in
        </div>
        <div className={style.list}>
        <ul className={style.ul}>
        <li className={style.lr}><Link href='/'>Home</Link></li>
        <li className={style.lr}><Link href='/Faq'>FAQ</Link></li>
        <li className={style.ll}>
        <div className={style.dropdown}>
        <button className={style.dropbtn}>Downloaders</button>
        <div className={style.dropdowncontent}>
        <Link href='/'>Reels Downloader</Link>
        <Link href='/photo'>Photo Downloader</Link>
        <Link href='/video'><a>Video Downloader</a></Link>
        </div>
      </div></li>
        </ul>
        </div>
        
    </div>
  )
}
