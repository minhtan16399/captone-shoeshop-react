import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';


const Profile = () => {
  return (
    <div className="profile mx-auto">
      <div className='profile-content mx-auto'>
        <div className="py-1 row w-100">
          <div className='title col-12 col-sm-6'>
            <span>Profile</span>
          </div>
        </div>
        <div className="container-fluid">
          <div className="profile_show mt-2 w-100 mx-auto">
            <div className="content row col-11 mx-auto">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile 