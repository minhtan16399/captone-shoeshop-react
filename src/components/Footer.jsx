import React from 'react'
import { NavLink } from 'react-router-dom'


const Footer = () => {
    return (
        <footer className="footer">
            <div className="top_footer">
                <div className="container">
                    <div className="row w-100" >
                        <div className="footer-content left col-6 col-md-4">
                            <h5>GET HELP</h5>
                            <ul>
                                <li><NavLink to='/'>Home</NavLink></li>
                                <li><NavLink>Nike</NavLink></li>
                                <li><NavLink>Adidas</NavLink></li>
                                <li><NavLink>Contact</NavLink></li>
                            </ul>
                        </div>
                        <div className="footer-content mid col-6 col-md-4">
                            <h5>SUPPORT</h5>
                            <ul>
                                <li><NavLink>About</NavLink></li>
                                <li><NavLink>Contact</NavLink></li>
                                <li><NavLink>Help</NavLink></li>
                                <li><NavLink>Phone</NavLink></li>
                            </ul>
                        </div>
                        <div className="footer-content right col-6 col-md-4">
                            <h5>REGISTER</h5>
                            <ul>
                                <li><NavLink to='register'>Register</NavLink></li>
                                <li><NavLink to='login'>Login</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bot_footer py-4 text-center">
                <div className="w-75 mx-auto">
                    <span>© 2022 Cybersoft All Rights Reserved | Design Theme by Trương Tấn Khải.</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer