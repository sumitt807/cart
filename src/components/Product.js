import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import "./Product.css"

const Product = () => {
  return (
    <div className='product'>
      <div className='product__info'>
        <p className='product__title'>THis is product name</p>
        <p className='product__price'>
          <small>$</small>
          <strong>11.94</strong>
        </p>
        <div className='product__rating'>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
      </div>

      <img className='product__image' src="img/product-dummy-image.jpg" alt="Product Image" />

      <button>Add to Basket</button>

    </div>
  )
}

export default Product