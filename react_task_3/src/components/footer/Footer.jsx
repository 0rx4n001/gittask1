import React from 'react'
import './Footer.css'
import Discord from './discord.svg'
import FB from './fb.svg'
import Linkedin from './linkedin.svg'
import Twitter from './twitter.svg'
import Logo from './logo_head.svg'

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className="footer_up">
                    <div className="footer_up_logo">
                        <img src={Logo} alt="" className="footer_logo_img" />
                    </div>
                    <div className="footer_up_social_logos">
                        <img src={Discord} alt="" className="discord_logo" />
                        <img src={Twitter} alt="" className="twitter_logo" />
                        <img src={Linkedin} alt="" className="linkedin_logo" />
                        <img src={FB} alt="" className="facebook_logo" />
                    </div>
                </div>
                <div className="footer_main">
                    <div className="footer_main_ASide">
                        <h2 className="footer_main_title">Stay up to date</h2>
                        <p className="footer_main_txt">Lorem ipsum dolor sit amet <br />consectetur adipisicing elit.</p>
                        <div className="footer_main_ASide_Subscr">
                            <form action="">
                                <input type="mail" placeholder='example@gmail.com' />
                                <button className='footer_subscribe_btn'>Subscribe</button>
                            </form>
                        </div>
                    </div>
                    <div className="footer_main_BSide">
                        <ul>
                            <p>Lorem, ipsum.</p>
                            <li>Unlock Pro</li>
                            <li>Unlock Pro</li>
                            <li>Unlock Pro</li>
                        </ul>
                        <ul>
                            <p>Lorem, ipsum.</p>
                            <li>Unlock Pro</li>
                            <li>Unlock Pro</li>
                            <li>Unlock Pro</li>
                            <li>Unlock Pro</li>
                        </ul>
                        <ul>
                            <p>Lorem, ipsum.</p>
                            <li>Unlock Pro</li>
                            <li>Unlock Pro</li>
                            <li>Unlock Pro</li>
                        </ul>
                        <ul>
                            <p className='footer_BSide_ulTitle'>Lorem, ipsum.</p>
                            <li>Unlock Pro</li>

                        </ul>
                    </div>
                </div>
                <div className="footer_bottom">
                    <div className='footer_bottom_helper'>
                    <p>© Frontend Mentor 2019 - 2024</p>
                    <ul>
                        <li>Terms</li>
                        <li>Cookie Policy</li>
                        <li>Privacy Policy</li>
                        <li>License</li>
                    </ul>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Footer
