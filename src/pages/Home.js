import React from 'react'
import "./Home.css"
import Product from '../components/Product'

const Home = () => {
    return (
        <div className='home'>
            <div className='home__container'>
                <img className='home__image' src="./img/banner-image-01.jpg" alt="amazon banner image" />
            </div>

            <div className='home__row'>
                <Product />
                <Product />
            </div>

            <div className='home__row'>
                <Product />
                <Product />
                <Product />
            </div>

            <div className='home__row'>
                <Product />
            </div>

        </div>
    )
}

export default Home