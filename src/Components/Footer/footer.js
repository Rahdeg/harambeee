import React from 'react'
import twitter from './images/twitter.png'
import gmail from './images/gmail.png'
import whatsapp from './images/whatsapp.png'
import instagram from './images/instagram.png'

const footer = () => {
  return (
    <div className='bt'>
    <div>
    </div>
    <nav className="nav">
    
    
    <ul className="navmenu" >
    <div className='sos '>
    <ul >
                <li><img className='icon' src={whatsapp} alt='f'/></li>
                <li><img className='icon' src={gmail} alt='f'/></li>
                <li><img className='icon' src={instagram} alt='f'/></li>
                <li><img className='icon' src={twitter} alt='f'/></li>
        </ul>
    </div>
			
			<li className="is-active">
				<a className="nav-link " href="/menus/">REHEATING INSTRUCTIONS</a>
			</li>
			<li>
				<a className="nav-link " href="/our-story/">CAREERS</a>
			</li>
			<li>
				<a className="nav-link " href="/happenings/">CONTACT</a>
			</li>
			
			<li>
				<a className="nav-link   " href="/online-ordering/">Order Online</a>
			</li>
		</ul>
  </nav>
   
    </div>
  )
}

export default footer