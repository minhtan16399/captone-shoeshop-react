import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup'

const Register = () => {
    const formRegister = useFormik({
        initialValues: {
            "email": "",
            "password": "",
            "name": "",
            "phone": "",
            "gender": true,
        },
        validationSchema: yup.object().shape({
            name: yup.string().required('Name cannot be blank!').min(3, "Must be at least 3 characters").max(20, "Must be 20 characters or less"),
            phone: yup.string().required('Phone cannot be blank!').min(6, 'phải nhiều hơn 6 bằng ký tự').max(10, 'phải bé hơn bằng 10 ký tự'),
            email: yup.string().required('Email cannot be blank!').email("Invalid email address"),
            password: yup.string().required('Password cannot be blank!').min(6, 'Must be at least 6 characters'),
            confirmPassword: yup.string().when('password', (password, field) => password ? field.required().oneOf([yup.ref('password')]) : field),
        }),

        onSubmit: (values) => {
            submitData(values)
        }
    });

    const submitData = async (users) => {
        try {
            let response = await axios({
                url: 'https://shop.cyberlearn.vn/api/Users/signup',
                method: 'POST',
                data: {
                    "email": users.email,
                    "password": users.password,
                    "name": users.name,
                    "gender": users.gender,
                    "phone": users.phone,
                },
            });
            alert(response.data.message);
        } catch (error) {
            alert(error.response.data.message);
        };
    };

    return (
        <div className="form_register bg-body mx-auto" onSubmit={formRegister.handleSubmit}>
            <form className="container">
                <div className="form_content card my-3">
                    <div className="card-header text-center py-3">
                        <h3 className="card-title">Register</h3>
                    </div>
                    <div id="form" className="card-body d-flex flex-wrap flex-sm-nowrap">
                        <div className="form-input w-100 mx-3">
                            <input id="email" type="text" placeholder="Email" className="form-control" autoComplete="email" onChange={formRegister.handleChange} onBlur={formRegister.handleBlur} autoFocus/>
                            <span className="sp-thongbao" id="tbEmail">{formRegister.errors.email && formRegister.errors.email}</span>
                            <input id="password" type="password" placeholder="Password" className="form-control" onChange={formRegister.handleChange} onBlur={formRegister.handleBlur} />
                            <span className="sp-thongbao" id="tbPassword" >{formRegister.errors.password && formRegister.errors.password}</span>
                            <input id="confirmPassword" type="password" placeholder="Password confirm" className="form-control" onChange={formRegister.handleChange} onBlur={formRegister.handleBlur}/>
                            <span className="sp-thongbao" id="tbConfirm" >{formRegister.errors.confirmPassword && formRegister.errors.confirmPassword}</span>
                        </div>
                        <div className="form-input w-100 mx-3">
                            <input id="name" type="text" placeholder="Name" className="form-control" autoComplete="name" onChange={formRegister.handleChange} onBlur={formRegister.handleBlur} />
                            <span className="sp-thongbao" id="tbName" >{formRegister.errors.name && formRegister.errors.name}</span>
                            <input id="phone" type="text" placeholder="Phone" className="form-control" onChange={formRegister.handleChange} onBlur={formRegister.handleBlur} />
                            <span className="sp-thongbao" id="tbPhone" >{formRegister.errors.phone && formRegister.errors.phone}</span>
                            <div id="gender" className="d-inline d-flex">
                                <h5>Gender</h5>
                                <div className="form-radio d-flex flex-wrap mx-4">
                                    <div className="radio">
                                        <input type="radio" name="gender" id="male" defaultValue={true} onChange={formRegister.handleChange} />
                                        <label htmlFor="male">Male</label>
                                    </div>
                                    <div className="radio">
                                        <input type="radio" name="gender" id="female" defaultValue={false} onChange={formRegister.handleChange} />
                                        <label htmlFor="female">Female</label>
                                    </div>
                                </div>
                            </div>
                            <span className="sp-thongbao" id="tbGender" ></span>
                        </div>
                    </div>
                    <div className="py-3 text-center btn-submit">
                        <button id="btnBack" type="submit" className="btn btn-success mb-3">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Register