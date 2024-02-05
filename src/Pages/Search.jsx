import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { NavLink, useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

const Search = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const [arrProduct, setArrProduct] = useState([])
    const tuKhoa = searchParams.get('keyword')
    const formSearch = useFormik({
        initialValues: {
            keyword: tuKhoa
        },
        onSubmit: ({ keyword }) => {
            setSearchParams({
                keyword: keyword
            })
        }
    })
    const getProductByKeyword = async () => {
        const res = await axios({
            url: `https://shop.cyberlearn.vn/api/Product?keyword=${tuKhoa}`,
            method: 'GET'
        });
        setArrProduct(res.data.content)
    }
    useEffect(() => {
        getProductByKeyword()
    }, [tuKhoa])

    return (
        <div className='container'>
            <form className='frm-search mt-3' onSubmit={formSearch.handleSubmit}>
                <div className="input-group w-50 mx-auto">
                    <button className="input-group-button btn btn-success">Search</button>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="keyword" placeholder="keyword" name="keyword" onChange={formSearch.handleChange} value={formSearch.keyword} />
                        <label htmlFor="keyword">search</label>
                    </div>
                </div>

            </form>
            <div className=''>
                <div className="products mx-auto mt-3">
                    <div className='products-content mx-auto'>
                        <div className="py-1 row w-100">
                            <div className='title col-12 col-sm-6'>
                                <span>Products Search</span>
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

        </div>
    )
}

export default Search