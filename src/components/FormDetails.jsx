import React from 'react'

function FormDetails({setCut}) {
    return (
        <div className='formdetails'>
            <hr />
            <h2>Personal Information</h2>
            <form action="" onSubmit={(e)=>e.preventDefault()}>
                <div className="firstform">

                    <div className="input">
                        <label htmlFor="fname">First Name</label>
                        <input type="text" id='fname' placeholder='Enter Your First Name' required  />
                    </div>
                    <div className="input">
                        <label htmlFor="lname">Last Name</label>
                        <input type="text" id='lname' placeholder='Enter Your Last Name' required   />
                    </div>
                </div>
                <div className="secondform">
                    <div className="secondinput">

                        <label htmlFor="num"> Phone No</label>
                        <input type="text" id='num' placeholder='Enter Your Phone No' required  />
                    </div>
                    <div className="secondinput">

                        <label htmlFor="age"> Age</label>
                        <input type="number" id='age' placeholder='Enter Your Age' required  />
                    </div>
                </div>
                <div className="thirdform">
                    <div className="thirdinput">

                        <label htmlFor="email"> Email</label>
                        <input type="email" id='email' placeholder='Enter Your Email' required  />
                    </div>
                    <div className="thirdinput">

                        <label htmlFor="add"> Address</label>
                        <input type="text" id='add' placeholder='Enter Your Address' required  />
                    </div>
                </div>
                <div className="fourthform">
                    <input type="submit" onClick={()=>setCut(false)}  value='submit'/>
                </div>

            </form>

        </div>
    )
}

export default FormDetails