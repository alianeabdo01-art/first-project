import React from 'react';
import logo from "./assets/logo.png";
import "./Home.css"

export default function Home() {
  return (
    <div className='container'>
        <div className='card'>
         <img src={logo} alt='logo' />
         <h1> improve your front-end skills by buillding a projects</h1>
         <h3>
            scan the QR code to visit frontend Mentor and take
            your coding skills to the next level
         </h3>
        </div>


    </div>
  );
}