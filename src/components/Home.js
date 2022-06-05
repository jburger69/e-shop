import React from 'react'
import "../components/Home.css"
import logo from "../images/pexels-karolina-grabowska-5632397.jpg";

function Home() {
  return (
    <div>
        <div className="home">
            <div className="home__container">
                <img src={logo} alt="#" className='home__image'>

                </img>
            </div>
        </div>
    </div>
  )
}

export default Home