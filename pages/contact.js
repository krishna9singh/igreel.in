import React from 'react'
import Navbar from './components/navbar/Navbar'
import Foot from './components/Footer/Foot'
import { Head } from 'next/head'
export default function contact() {
  return (
    <div>
    
      <Navbar/>
      <h2>For any issue, help or request you can contact us:</h2>
      <p>contact@igreel.in</p>
      <Foot/>
    </div>
  )
}
