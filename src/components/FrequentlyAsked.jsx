import { IoIosArrowDown } from "react-icons/io";
import AllDate from '../AllData'

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
                    <summary>{AllDate.q1} <IoIosArrowDown/>  </summary>
                    <p>{AllDate.answer1}</p>
                </details>
                <details>
                    <summary> {AllDate.q2} <IoIosArrowDown/>  </summary>
                    <p>{AllDate.answer2}</p>
                </details>
                <details>
                    <summary> {AllDate.q3} <IoIosArrowDown/>  </summary>
                    <p>{AllDate.answer3}</p>
                </details>
               
            </div>

        </div>
    )
}

export default FrequentlyAsked