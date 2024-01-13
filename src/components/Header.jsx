import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../Images/logo.png'
import { AiOutlineMenuFold } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
function Header() {
    const [toggle, setToggle] = useState(false)
  return (

    <div className='header'>
        <nav>
            {/* <div className="">  */}
            <Link className='firstnav' to='/home'>

                <img src={logo} alt="" width='70px' />
                <p> <span>Rent</span> Us</p>
            </Link>
            {/* </div> */}
            <div className={toggle ? 'secondnav second-responsive-nav ' : 'secondnav'}>

            <div className="secondinnernav" onClick={()=>setToggle(false)}>
                <Link to='/home' className='links'>Home</Link>
                <Link to='/about' className='links'>About</Link>
                <Link to='/vehiclemodels' className='links'>Vehicle Models</Link>
                <Link to='/contact' className='links'>Contact</Link>
                


            </div>
            <div className="thirdinnernav" >
                <button>Sign In</button>
            </div>
            </div>
                <li onClick={()=>setToggle(!toggle)}>
                    { toggle ? <RxCross2/> : <AiOutlineMenuFold/>}</li>
        </nav>
        

    </div>
  )
}

export default Header