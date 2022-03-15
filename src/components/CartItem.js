import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import "./CartItme.css"

const CartItme = ({ id, title, price, rating, image }) => {
    return (
        <div className='cartItme'>
            <img className='cartItme__image' src={image} alt="CartItme Image" />

            <div className='cartItme__info'>
                <p className='cartItme__title'>{title}</p>
                <p className='cartItme__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='cartItme__rating'>
                    {[...Array(rating)].map((x, i) =>
                        <StarIcon />
                    )}
                    {[...Array(5 - rating)].map((x, i) =>
                        <StarOutlineIcon />
                    )}
                </div>

                <button className='cartItme__button'>Remove from basket</button>
            </div>
        </div>
    )
}

export default CartItme