import React from 'react'
import CartItme from '../components/CartItem'
import adImage from "../img/ad.jpg"
import productImage from "../img/product-dummy-image.jpg"
const Checkout = () => {
    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img src={adImage} />
                <div className='checkbox_basket'>
                    <h1>Your Shopping Basket</h1>
                    <div className='checkout_itmeList'>
                        <CartItme title="Samsung Galaxy S22 Smartphone, Factory Unlocked Android Cell Phone, 256GB, 8K Camera & Video, Brightest" price={849.99} rating={3} image="https://m.media-amazon.com/images/I/71c5rhsUkxL._AC_UY218_.jpg" />
                        <CartItme title='Samsung Galaxy A12 (128GB, 4GB) 6.5" HD+, 48MP Quad Camera, All Day Battery, Dual SIM GSM Unlocked Global' price={185.99} rating={3} image="https://m.media-amazon.com/images/I/618LuqyIX6L._AC_UY218_.jpg" />
                        <CartItme title="VTECH IS8121-2 Super Long Range up to 2300 Feet DECT 6.0 Bluetooth 2 Handset Cordless Phone for Home" price={60.99} rating={3} image="https://m.media-amazon.com/images/I/81bA-cowExS._AC_UY218_.jpg" />
                    </div>
                </div>
            </div>
            <div className='checkout__right'>
                <div className='checkout__subtotal'>
                    Subtotal (2 item): <strong>$250.96</strong>
                </div>
                <div>
                    <input type="checkbox" />
                    This order contain gift
                </div>
                <button>Proceed to checkout</button>
            </div>
        </div>
    )
}

export default Checkout