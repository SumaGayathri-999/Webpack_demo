import React from 'react';
import webpackImg from 'images/webpack_img.png';
import './style.scss'

function Home() {
  console.log("Home Componenet is there")
  return (
    <div>
        <h1>Home Component</h1>
        <img src={webpackImg} className='web_img'></img>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  )
}

export default Home