import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom'


const Header = () => {
    const { userProfile } = useSelector(state => state.userReducer);
    const [formSignShown, setFormSignShown] = useState(false);
    const [userShown, setUserShown] = useState(false);
    const toggleLogOut = () => {
        localStorage.clear();
        setFormSignShown(!formSignShown);
        setUserShown(!userShown);
    };
    useEffect(
        setFormSignShown
    );
    useEffect(
        setUserShown
    );
    return (
        <header>
            <div className='header py-2 px-3'>
                <div className="container-fluid d-flex justify-content-between">
                    <img src="https://drive.google.com/thumbnail?id=1CeD95ncXOaWibxr2mgcvo2ukvknMuiZt" alt='logo' />
                    <div className="d-flex">
                        <div data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <NavLink><img className="modal-body" src="https://drive.google.com/thumbnail?id=1Yi4kwvNlLjbgndEW5ZcYtalhAQbEi_59" alt='icon cart' />
                            </NavLink>
                            <span className="quatity-count me-3">0</span>
                        </div>
                        <div className={formSignShown ? 'd-none' : 'd-block'} id='formSignShown'>
                            <NavLink className="me-3" to='login'>Login</NavLink>
                            <NavLink className="" to='register'>Register</NavLink>
                        </div>
                        <div className={userShown ? 'd-block' : 'd-none'} id='userShown'>
                            <NavLink className='me-3' to='profile'>
                                <i className="icon-profile fa-solid fa-user"></i>
                            </NavLink>
                            <NavLink type='button' to='/' onClick={toggleLogOut}>Log out</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header