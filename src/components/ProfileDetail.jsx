import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileApiAction } from '../redux/Reducers/UserReducer';
import { NavLink, Outlet } from 'react-router-dom';

const ProfileDetail = () => {
    const { userProfile } = useSelector(state => state.userReducer)
    const dispatch = useDispatch();
    const getProfileApi = async () => {
        const action = getProfileApiAction();
        dispatch(action);
    };

    useEffect(() => {
        getProfileApi()
    }, []);
    
    return (
        <div className="form_register bg-body mx-auto">
            <form className="container">
                <div className="form_content card my-3">
                    <div id="form" className="card-body d-flex flex-wrap flex-sm-nowrap">
                        <div className="form-input w-100 mx-3">
                            <div className='profile-avatar'>
                                <img src={userProfile.avatar} alt="avatar" className='w-100 rounded-circle p-4 p-lg-5' />
                            </div>
                        </div>
                        <div className="form-input w-100 mx-3">
                            <label htmlFor="email" className='mt-3'>Email</label>
                            <input id="email" type="text" placeholder="Email" className="form-control my-2" autoComplete="email" value={userProfile.email} disabled />
                            <label htmlFor="name" className='mt-3'>Name</label>
                            <input id="name" type="text" placeholder="Name" className="form-control my-2" autoComplete="name" value={userProfile.name} disabled />
                            <label htmlFor="phone" className='mt-3'>Phone</label>
                            <input id="phone" type="text" placeholder="Phone" className="form-control my-2" value={userProfile.phone} disabled />
                            <div id="gender" className="d-inline d-flex">
                                <h5>Gender</h5>
                                <div className="form-radio d-flex flex-wrap mx-4">
                                    <div className="radio">
                                        <input type="radio" name="gender" id="male" defaultValue={true} />
                                        <label htmlFor="male">Male</label>
                                    </div>
                                    <div className="radio">
                                        <input type="radio" name="gender" id="female" defaultValue={false} />
                                        <label htmlFor="female">Female</label>
                                    </div>
                                </div>
                            </div>
                            <span className="sp-thongbao" id="tbGender" ></span>
                            <div className="py-3 text-end btn-submit me-5">
                                <NavLink id="btnEdit" type="button" className="btn btn-success px-5" to='./update'>Edit</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className=" card text-center">
                        <div className="card-header">
                            <ul className="nav nav-tabs card-header-tabs">
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} aria-current="true" >
                                        <NavLink to='./'>Order history</NavLink>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <a className='nav-link' >
                                        <NavLink to='./favourite'>Favourite</NavLink>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="card-body row">
                            <Outlet></Outlet>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ProfileDetail