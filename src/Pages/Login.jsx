import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import ReactFacebookLogin from 'react-facebook-login';
import { NavLink } from 'react-router-dom';
import { loginApiAction, loginFacebookApiAction } from '../redux/Reducers/UserReducer';
import { useDispatch } from 'react-redux';
import { history } from '../App';
import { USER_LOGIN } from '../utils/config';

const Login = () => {
  const loginSuccessful = () => {
    document.querySelector('#formSignShown').className = 'd-none';
    document.querySelector('#userShown').className = 'd-block';
    history.push('/')
  };

  const dispatch = useDispatch();

  const formLogin = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: async (userLogin) => {
      submitData(userLogin)
    }
  });

  const submitData = async (userLogin) => {
    try {
      const action = loginApiAction(userLogin);
      dispatch(action);
      if (localStorage.getItem(USER_LOGIN)) {
        const success = loginSuccessful();
      } else {
        console.log('fail');
      }
    } catch (error) {
      console.log(error);
    };
  };

  const responseFacebook = (response) => {
    loginFacebook(response.accessToken)
  };

  const loginFacebook = async (token) => {
    try {
      const action = loginFacebookApiAction(token);
      dispatch(action);
      if (localStorage.getItem(USER_LOGIN)) {
        const success = loginSuccessful();
      } else {
        console.log('fail');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [passwordShown, setPasswordShown] = useState(false);
  const [togglePassword, setTogglePassword] = useState(false);
  // Password toggle handler
  const showPassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setTogglePassword(!togglePassword);
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="form_login bg-body mx-auto col-10 col-md-6" onSubmit={formLogin.handleSubmit} >
      <form className="container">
        <div className="form_content card my-3">
          <div className="card-header text-center py-3">
            <h3 className="card-title">Login</h3>
          </div>
          <div id="form" className="card-body ">
            <div className="form-input col-11 mx-auto">
              <input id="email" type="text" placeholder="Email" className="form-control" autoComplete="email" onChange={formLogin.handleChange} onBlur={formLogin.handleBlur} autoFocus />
              <span className="sp-thongbao" id="tbEmail">{formLogin.errors.email && formLogin.errors.email}</span>
              <div className='position-relative'>
                <input id="password" type={passwordShown ? "text" : "password"} placeholder="Password" className="form-control" onChange={formLogin.handleChange} onBlur={formLogin.handleBlur} />
                <i className={togglePassword ? 'fas fa-eye' : "fas fa-eye-slash"} style={{ position: 'absolute', top: 10, right: 15 }} id="togglePassword" type='button' onClick={showPassword}></i>
              </div>
              <span className="sp-thongbao" id="tbPassword" >{formLogin.errors.password && formLogin.errors.password}</span>
            </div>
          </div>
          <div className="text-center btn-submit col-10 mx-auto row justify-content-between">
            <NavLink to='../register' className='col-5'>Register now?</NavLink>
            <button id="btnBack" type="submit" className="btn btn-success col-5">Sign in</button>
          </div>
          <div className="py-3 text-center btn-submit">
            <ReactFacebookLogin
              appId="692400749716246"
              fields="name,email,picture"
              onClick={loginFacebook}
              callback={responseFacebook} />
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login