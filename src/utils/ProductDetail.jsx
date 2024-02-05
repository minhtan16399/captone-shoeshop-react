import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { addCartAction } from '../redux/Reducers/CartReducer';
import { useDispatch } from 'react-redux';

const ProductDetail = (props) => {

    const dispatch = useDispatch();
    const [count, setCount] = useState(1);
    const [productDetail, setProductDetail] = useState();
    const param = useParams();
    const getProductDetailApi = async () => {
        const res = await axios({
            url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${param.id}`
        });
        setProductDetail(res.data.content);
    };

    const addToCart = (prod) => {
        const action = addCartAction(prod);
        dispatch(action);
        console.log(action);
    };

    useEffect(() => {
        getProductDetailApi();
    }, [param.id]);

    return (
        <div onLoad={() => { setCount(1) }}>
            <div id='modal' className="product_detail">
                <div className="container">
                    <div className="row justify-content-around w-100 mx-auto">
                        <div className="detail_left col-md-6">
                            <div className="card m-4">
                                <img className="card-img-top mx-auto" src={productDetail?.image} />
                            </div>
                        </div>
                        <div className="detail_right mt-2 col-md-6">
                            <div className='container m-2'>
                                <h3 className="detail_right_title">{productDetail?.name}</h3>
                                <p className="descript">{productDetail?.description}</p>
                                <div>
                                    <h5 className='title-size'>Available size</h5>
                                    <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                        {productDetail?.size.map((size) => {
                                            return <div className='mx-2' key={size}>
                                                <input type="radio" className="btn-check" name="btnradio" id={`btnradio${size}`} autoComplete="off" />
                                                <label className="btn btn-light" htmlFor={`btnradio${size}`}>{size}</label>
                                            </div>
                                        })}
                                    </div>
                                </div>
                                <div className="my-4">
                                    <span className="total-price alert alert-light">${count * productDetail?.price}</span>
                                </div>
                                <div className="quantity d-inline d-flex my-4">
                                    <button id="btnMinus" className="btn btn-primary"
                                        onClick={() => {
                                            setCount(() => {
                                                if (count == 1) {
                                                    return count
                                                } else {
                                                    return count - 1
                                                }
                                            })
                                        }}><i className="fa-solid fa-minus" /></button>
                                    <span className="number-quantity alert alert-light text-black py-0">{count}</span>
                                    <button id="btnPlus" className="btn btn-primary"
                                        onClick={() => {
                                            setCount(count + 1)
                                        }}><i className="fa-solid fa-plus" /></button>
                                </div>
                                <button id="addCart" className="btn btn-success px-4 py-2" onClick={() => {
                                    const  prod  = {
                                        key: productDetail.id,
                                        id: productDetail.id,
                                        image: productDetail.image,
                                        name: productDetail.name,
                                        quantity: count,
                                        price:productDetail.price
                                    };
                                    addToCart(prod);
                                }}>Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail