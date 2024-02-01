import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import axios from 'axios';

const ShoeStores = (props) => {

    const [arrProduct, setArrProduct] = useState([]);

    const getAllProductApi = async () => {
        const res = await axios({
            url: 'https://shop.cyberlearn.vn/api/Product',
            method: 'GET'
        })

        setArrProduct(res.data.content)
    };

    useEffect(() => {
        getAllProductApi()
    });

    return (
        <div className=''>
            <div className="products mx-auto mt-3">
                <div className='products-content mx-auto'>
                    <div className="py-1 row w-100">
                        <div className='title col-12 col-sm-6'>
                            <span>Products Feature</span>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="products_show py-3 mt-4 w-100 mx-auto">
                            <div className="content row col-11 mx-auto">
                                {
                                    arrProduct.map((product) => {
                                        return <div className='col-md-4 col-6' key={product.id}>
                                            <div className='item card mb-4 mb-md-5 mx-1 mx-md-4'>
                                                <ProductCard product={product} />
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoeStores