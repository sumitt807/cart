import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import "./Product.css"

const Product = ({ id, title, price, rating, image }) => {
  return (
    <div className='product'>
      <div className='product__info'>
        <p className='product__title'>{title}</p>
        <p className='product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          {[...Array(rating)].map((x, i) =>
            <StarIcon />
          )}
        </div>
      </div>

      <img className='product__image' src={image} alt="Product Image" />

      <button className='product__button'>Add to Basket</button>

    </div>
  )
}

export default Product