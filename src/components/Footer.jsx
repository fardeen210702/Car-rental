import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    function handlescroll(){
        window.scrollTo(0,0)
    }
    return (
        <div className='footer'>
            <div className="firstfooter">
                <h4>Copyright © {new Date().getFullYear()}. All rights are reserved</h4>
            </div>

            <div className="secondfooter" onClick={handlescroll} >
                <Link to='/home' className='footerlinks' > Home </Link>
                <Link to='/about' className='footerlinks'> About </Link>
                <Link to='/vehiclemodels' className='footerlinks'> Vehicle Models </Link>
                <Link to='/contact' className='footerlinks'> Contact </Link>
            </div>
            <hr />
            <div className="thirdfooter">
                <div className="customer-service">
                    <h1>Customer Service</h1>
                    <p>Resolution Center</p>
                    <p>How to Book</p>
                    <p>Payment</p>
                    
                </div>
                <div className="customer-service">
                    <h1>Information</h1>
                    <p>Blog</p>
                    <p>Career</p>
                    <p>Store Loaction</p>

                </div>
                <div className="customer-service">
                    <h1>Help</h1>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                
                    <p>FAQs</p>

                </div>


                <div className="footer-link-container">


                    <a href="https://www.linkedin.com/in/fardeen-mohammed-579518271/" target='_blank'><i className="fa-brands fa-linkedin">
                    </i></a>
                    <a href="https://github.com/fardeen210702" target='_blank'>

                        <i className="fa-brands fa-github"></i>
                    </a>


                </div>
            </div>

        </div>
    )
}

export default Footer