import React from 'react'
import { NavLink} from 'react-router-dom'
import { useFormik } from 'formik'
import { history } from '../App'

const Navbar = () => {

    const frm = useFormik({
        initialValues: {
            keyword: ''
        },
        onSubmit: ({ keyword }) => {
            history.push(`/search?keyword=${keyword}`)
        }
    })

    return (
        <nav className="navbar navbar-expand-lg bg-tertiary px-2">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link me-2" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link me-2" to="/">Men</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link me-2" to="/">Women</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link me-2" to="/">Kid</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link me-2" to="/">Sport</NavLink>
                        </li>
                    </ul>
                    <form className="d-flex" onSubmit={frm.handleSubmit}>
                        <input className="form-control" type="text" placeholder="Search" name="keyword" onChange={frm.handleChange} />
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar