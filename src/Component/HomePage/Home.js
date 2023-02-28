import React from 'react'
import './Home.css'
function Home() {
  return (
    <div>
      <div className="homeContainer">
        <div className="home">
           <div className="homeImg">

            <span className='homeSpan'>Venus</span>
           
            <p className='homeLang'>Hindi, English, Telegu</p>
            <button className='Horrorbtn btn-dark'>Horror</button>

           </div>
        </div>
        <div className="homeNav">
            <div className="homeNavImg">
                <ul className='homeNavIngo'>
                    <li className='text-white'>Tomatometer</li>
                    <li className='text-white'>Audience Score</li>
                    <li className='text-white'>Users Rating</li>
                    <li className='text-white'>Rate It</li>
                <button className='btn btn-dark'>Book Tickets</button>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
