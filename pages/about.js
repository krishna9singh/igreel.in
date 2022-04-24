import React from 'react'
import Navbar from './components/navbar/Navbar'
import Foot from './components/Footer/Foot'
import  Link from 'next/link'
export default function about() {
  
  return (
    <div>
    
    <Navbar/>
    <h2>About Us</h2>
    <p>Igreel.in is Developed and powered by  <Link href="https://artimus.co.in/" passHref={true}>Artimus INC</Link><br/>
     We created this site to help users in easy and safe downloading of instagram stuff.<br/>
     We Do not require any login credentials.<br/></p> <h3>Thank you</h3>
    <h3>Stay Connected with us.</h3>
    <h3>contact@igreel.in</h3>
    <Foot/>
    </div>
  )
}
