import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductCard = ({ product }) => {
  return (
    <div className=''>
      <div className='card-top'>
        <div className='m-3'>
          <img className="card-img-top position-relative" src={product.image} alt='img item' />
        </div>
        <i className="fa-regular fa-heart d-none" />
      </div>
      <div className='mx-3'>
        <h5 className="card-title">{product.name}</h5>
        <p className='card-descript my-2'>{product.shortDescription}</p>
      </div>
      <div className="card-footer d-flex p-0">
        <NavLink to={`/detail/${product.id}`} type='button' className="button-buy btn w-50"
          onClick={() => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
          }}>
          <span className='d-none d-sm-block'>Buy Now</span>
          <i className="fa-solid fa-cart-shopping d-block d-sm-none" />
        </NavLink>
        <div className='price w-50'>
          <span className="price-text mx-auto">${product.price}</span>
        </div>
      </div>
    </div>

  )
}

export default ProductCard