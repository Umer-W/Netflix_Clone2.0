import React from "react";
import { Link } from "react-router-dom";
import "./CSS/SignUpFOrm.css"
import "./CSS/Note.css"
const SignUpForm = (props) => {
    const ema = props.email;
    console.log(ema)



    const [eemail, setEmail] = React.useState(props.email)
    return (
        <div className="signUpPage signUpTwo">

            <div className="signUpForm">
                <p className="para pyara">
                    step 2 of 3
                </p>

                <p className="paraTwo pyaraTwo">
                    Choose your plan
                </p>

                <div className="paras">
                    <div className="threeParas">

                        <p className="parathree">
                       <span style={{color:"red"}}> &#10004;</span>  No commitments, cancel anytime.
                        </p>
                        <p className="parathree">
                        <span style={{color:"red"}}> &#10004;</span>  Everything on Netflix for one low price.
                        </p>
                        <p className="parathree">
                        <span style={{color:"red"}}> &#10004;</span>   No ads and no extra fees. Ever.
                        </p>
                    </div>
                </div>

                <button id="nextBtn" type="submit" className="formInput" placeholder="Enter Password" value="Next" ><Link id="nextLink" to="/SignUpTwo">Next</Link></button>





            </div>
        </div>
    )
}
export default SignUpForm;