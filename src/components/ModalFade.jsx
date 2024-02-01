import React from 'react'
import { NavLink } from 'react-router-dom'

const ModalFade = () => {
    return (
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">My Cart</h1>
                    </div>
                    <div className="modal-body">
                        <ul className="modal-contents">
                        </ul>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button id="btnDeleteAllCart" type="button" className="btn btn-danger">Clear
                            all</button>
                        <NavLink className="btn btn-success" type="button" to='/cart' >View all</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalFade