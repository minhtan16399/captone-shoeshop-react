import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup'
import { useFormik } from 'formik';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { http } from '../utils/config';

const UpdateUser = () => {
    const { userProfile } = useSelector(state => state.userReducer);
    const formUserUpdate = useFormik({
        initialValues: {
            "password": "",
            "name": "",
            "phone": "",
            "gender": true,
        },
        validationSchema: yup.object().shape({
            name: yup.string().min(3, "Must be at least 3 characters").max(20, "Must be 20 characters or less"),
            phone: yup.string().min(6, 'phải nhiều hơn 6 bằng ký tự').max(10, 'phải bé hơn bằng 10 ký tự'),
            email: yup.string().email("Invalid email address"),
        }),

        onSubmit: (values) => {
            console.log(values);
            submitData(values)
        }
    });

    const submitData = async (users) => {
        try {
            const data = {
                "email":userProfile.email,
                "passord":users.passord,
                "name":users.name,
                "phone":users.phone,
                "gender":users.gneder
            };
            const res = await http.post('/Users/updateProfile', data, {headers:{"Content-Type" : "application/json"}})
            // alert(res.data.message);
        } catch (error) {
            // alert(error.res.data.message);
            console.log(error);
        };
    };

    return (
        <div className="form_register bg-body mx-auto " onSubmit={formUserUpdate.handleSubmit}>
            <form className="container">
                <div className="form_content card my-3">
                    <div id="form" className="card-body d-flex flex-wrap flex-sm-nowrap" >
                        <div className="form-input w-100 mx-3">
                            <label htmlFor="email" className='mt-3'>Email</label>
                            <input id="email" type="text" placeholder="Email" className="form-control my-2" autoComplete="email" onChange={formUserUpdate.handleChange} value={userProfile.email} onBlur={formUserUpdate.handleBlur} disabled/>
                            <span className="sp-thongbao" id="tbEmail">{formUserUpdate.errors.email && formUserUpdate.errors.email}</span>
                            <label htmlFor="password" className='mt-3'>Password</label>
                            <input id="password" type="password" placeholder="Password" className="form-control my-2" onChange={formUserUpdate.handleChange} onBlur={formUserUpdate.handleBlur} />
                            <span className="sp-thongbao" id="tbPassword" >{formUserUpdate.errors.password && formUserUpdate.errors.password}</span>
                            <label htmlFor="name" className='mt-3'>Name</label>
                            <input id="name" type="text" placeholder="Name" className="form-control my-2" autoComplete="name" onChange={formUserUpdate.handleChange} onBlur={formUserUpdate.handleBlur} defaultValue={userProfile.name} />
                            <span className="sp-thongbao" id="tbName" >{formUserUpdate.errors.name && formUserUpdate.errors.name}</span>
                            <label htmlFor="phone" className='mt-3'>Phone</label>
                            <input id="phone" type="text" placeholder="Phone" className="form-control my-2" onChange={formUserUpdate.handleChange} onBlur={formUserUpdate.handleBlur} defaultValue={userProfile.phone} />
                            <span className="sp-thongbao" id="tbPhone" >{formUserUpdate.errors.phone && formUserUpdate.errors.phone}</span>
                            <div id="gender" className="d-inline d-flex">
                                <h5>Gender</h5>
                                <div className="form-radio d-flex flex-wrap mx-4">
                                    <div className="radio">
                                        <input type="radio" name="gender" id="male" defaultValue={true} onChange={formUserUpdate.handleChange} />
                                        <label htmlFor="male">Male</label>
                                    </div>
                                    <div className="radio">
                                        <input type="radio" name="gender" id="female" defaultValue={false} onChange={formUserUpdate.handleChange} />
                                        <label htmlFor="female">Female</label>
                                    </div>
                                </div>
                            </div>
                            <span className="sp-thongbao" id="tbGender" ></span>
                            <div className="py-3 text-end btn-submit me-5">
                                <NavLink id="btnBack" type="button" className="btn btn-danger px-4 me-3" to='/profile'>Back</NavLink>
                                <button id="btnUpdate" type="submit" className="btn btn-success">Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default UpdateUser