import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <div className='header__logo'>
                <a href='/'>
                    <img src={window.location.origin + '/img/amazon-logo.png'} alt="Amazon" />
                </a>
            </div>



            <div className='header__search'>
                <input className='header__searchInPut' type="text" />
                <SearchIcon className='header__searchIcon' />
            </div>

            <div className='header__nav'>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Hello, Guest</span>
                    <span className='header__optionLineTwo'>Sign in</span>
                </div>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Return</span>
                    <span className='header__optionLineTwo'>& Order </span>
                </div>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>
                </div>
            </div>

            <div className='header_basketOtion'>
                <a href='/cart' className='header_shoppingBasketIcon'>
                    <ShoppingBasketIcon />
                </a>
                <span className='header__optionLineTwo header_basketCout'>0</span>

            </div>
        </div>
    )
}

export default Header