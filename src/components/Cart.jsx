import React from 'react'

const Cart = () => {
    return (
        <div>
            <div className="products mx-auto mt-3">
                <div className='products-content mx-auto'>
                    <div className="py-1 row w-100">
                        <div className='title col-12 col-sm-6'>
                            <span>My Cart</span>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="products_show py-3 mt-4 w-100 mx-auto">
                            <div className='container-fluid'>
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th>Mã SP</th>
                                            <th>Tên sản phẩm</th>
                                            <th>Hình ảnh</th>
                                            <th>Giá bán</th>
                                            <th>Số lượng</th>
                                            <th>Thành tiền</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart