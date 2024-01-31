import React from 'react'
import './Header.css'
import Logo from './logo_head.svg'
import Case from './case.svg'

const Header = () => {
    return (
        <>  <div className="header">
            <div className='header_up'>
                <div className="header_icon">
                    <img src={Case} alt="" className="header_up_icon_img" />
                </div>
                <h2 className="header_txt">Looking to hire developers?</h2>
                <h2 className="header_txt">Visit our Hiring Platform</h2>
            </div>
            <div className="header_down">
                <div className="header_down_logo">
                    <img src={Logo} alt="" className="header_down_logo_img" />
                </div>
                <ul className='header_down_menu'>
                    <li><a href="default.asp">CHALLENGES</a></li>
                    <li><a href="news.asp">SOLUTIONS</a></li>
                    <li><a href="contact.asp">ARTICLES</a></li>
                    <li><a href="about.asp">RESOURCES</a></li>
                    <li><a href="about.asp">UNLOCK PRO</a></li>
                    <div className="header_down_menu_login">
                    <img src="" alt="" className="login_logo" />
                </div>
                </ul>

            </div>
        </div>
        </>
    )
}

export default Header
