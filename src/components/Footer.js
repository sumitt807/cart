import React from 'react'
import './Footer.css'

const backToTop = () => {
    window.scrollTo(0, 0)
}

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__row footer__backToTop' onClick={backToTop}>
                Back to top
            </div>
            <div className='footer__row footer__two'>
                <div className=''>
                    <div class="navFooterColHead">Get to Know Us</div>
                    <ul>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Press Releases</li>
                        <li>Amazon Cares</li>
                        <li>Gift a Smile</li>
                        <li>Amazon Science</li>
                    </ul>
                </div>
                <div className='footer_col_3'>
                    <div class="navFooterColHead">Connect with Us</div>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                    </ul>
                </div>
                <div className='footer_col_3'>
                    <div class="navFooterColHead">Make Money with Us</div>
                    <ul>
                        <li>Sell on Amazon</li>
                        <li>Sell under Amazon Accelerator</li>
                        <li> Amazon Global Selling</li>
                        <li>Fulfilment by Amazon</li>
                        <li>Become an Affiliate</li>
                        <li>Advertise Your Products</li>
                        <li>Amazon Pay on Merchants</li>
                    </ul>
                </div>
                <div className='footer_col_3'>
                    <div class="navFooterColHead">Make Money with Us</div>
                    <ul>
                        <li>Sell on Amazon</li>
                        <li>Sell under Amazon Accelerator</li>
                        <li> Amazon Global Selling</li>
                        <li>Fulfilment by Amazon</li>
                        <li>Become an Affiliate</li>
                        <li>Advertise Your Products</li>
                        <li>Amazon Pay on Merchants</li>
                    </ul>
                </div>
            </div>

            <div class="footer__row footer__last">
                <ul>
                    <li>Conditions of Use &amp; Sale</li>
                    <li>Privacy Notice</li>
                    <li>Interest-Based Ads</li>
                    <li>© 1996-2022, Amazon.com, Inc. or its affiliates</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer