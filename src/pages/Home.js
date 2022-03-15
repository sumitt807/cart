import React from 'react'
import "./Home.css"
import Product from '../components/Product'
import bannerImage from "../img/banner-image-01.jpg"

const Home = () => {
    return (
        <div className='home'>
            <div className='home__container'>
                <img className='home__image' src={bannerImage} alt="amazon banner image" />
            </div>

            <div className='home__row'>
                <Product title="Total wireless BLU View 3, 32GB, Black - Prepaid Smartphone (Locked)" price={58.96} rating={2} image="https://m.media-amazon.com/images/I/71qLkqV8EuL._AC_UY218_.jpg" />
                <Product title="Tracfone Nokia G300 5G, 64GB,Black - Prepaid Smartphone (Locked)" price={149.99} rating={4} image="https://m.media-amazon.com/images/I/81HKqFAxVHL._AC_UY218_.jpg" />
            </div>

            <div className='home__row'>
                <Product title="Samsung Galaxy S22 Smartphone, Factory Unlocked Android Cell Phone, 256GB, 8K Camera & Video, Brightest" price={849.99} rating={3} image="https://m.media-amazon.com/images/I/71c5rhsUkxL._AC_UY218_.jpg" />
                <Product title='Samsung Galaxy A12 (128GB, 4GB) 6.5" HD+, 48MP Quad Camera, All Day Battery, Dual SIM GSM Unlocked Global' price={185.99} rating={3} image="https://m.media-amazon.com/images/I/618LuqyIX6L._AC_UY218_.jpg" />
                <Product title="VTECH IS8121-2 Super Long Range up to 2300 Feet DECT 6.0 Bluetooth 2 Handset Cordless Phone for Home" price={60.99} rating={3} image="https://m.media-amazon.com/images/I/81bA-cowExS._AC_UY218_.jpg" />
            </div>

            <div className='home__row'>
                <Product title="SAMSUNG CH890 Series 34-Inch Ultrawide QHD (3440x1440) Computer Monitor, 100Hz, Curved, HDMI, USB-C, Height Adjustable Stand, 3 Yr WRNTY (LC34H890WGNXGO)" price={1100.99} rating={4} image="https://m.media-amazon.com/images/I/71qkzkC7bHL._AC_SX450_.jpg" />
            </div>

        </div>
    )
}

export default Home