import React from 'react'
import './style/Footer.css';

function Footer() {
  return (
    <div className='futur'>
        <div className="company-tag">
        <img src="https://picsum.photos/100/100" className='pfp' alt="1" />
        <h2 className='hed'>Vonty</h2>
        </div>
        <ul className='futul'>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>FAQ</li>
            <li>&copy; 2023 Vonty. All rights reserved.</li>
        </ul>
        <div className="social-handles">
        <img src="https://picsum.photos/100/100" className='pfp' alt="1" />
        <img src="https://picsum.photos/100/100" className='pfp' alt="1" />
        <img src="https://picsum.photos/100/100" className='pfp' alt="1" />
        <img src="https://picsum.photos/100/100" className='pfp' alt="1" />
        </div>
    </div>
  )
}

export default Footer