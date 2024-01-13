import { IoIosArrowDown } from "react-icons/io";

function FrequentlyAsked() {

    return (
        <div className='frequentlyasked'>
            <div className="questions">
                <h2> FAQs</h2>
                <h1> Most Frequently asked questions</h1>
                <p>Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to Common Concerns and Inquiries.</p>
            </div>
            <div className="innerasked">
                <details>
                    <summary> 1.  Why Rent Us provide vehicles at cheap costs ? <IoIosArrowDown/>  </summary>
                    <p>Providing vehicles at cheap costs could be attributed to various factors, such as promotional offers, discounts, seasonal sales, or a desire to capture a larger market share by offering competitive pricing strategies. Additionally, it might be a way for businesses to clear inventory or attract budget-conscious consumers.</p>
                </details>
                <details>
                    <summary> 2.How can I Rent a car from RentUs ? <IoIosArrowDown/>  </summary>
                    <p>There's a step by step process available on how you can rent car through Rent Us in about section. and to order your car you can simply fillout the details on the home page</p>
                </details>
                <details>
                    <summary> 3.What if we damage the car accidently ?  <IoIosArrowDown/>  </summary>
                    <p>Nothing to worry.. all you need to do is to pay the charges of rented car and damaged parts😁</p>
                </details>
               
            </div>

        </div>
    )
}

export default FrequentlyAsked