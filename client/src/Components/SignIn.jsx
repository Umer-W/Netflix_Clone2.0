import React from "react";
import { Link } from "react-router-dom";
import "./CSS/SignIn.css"
import { useCookies } from 'react-cookie';

import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const [cookies, setCookie] = useCookies()




    const [email, setEmail] = React.useState(null)
    const [password, setPassword] = React.useState(null)

    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    const handleInvalid = () => {
        alert("Your Email or password is incorrect , please enter a valid email or password ")
    }


    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email == "admin@gmail.com" && password == "admin123") {
            navigate("/Admin")

        }
        else {


            const res = await fetch("/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                   
                },
                body: JSON.stringify({
                    email, password
                })

            })
            console.log(res)
            if (res.status === 200) {
                alert("you are logged in Successfully")
                setCookie("email",email)

                navigate("/Main")

            }
            else {
                alert("bhai pehle SIGN UP kro phr ana login krne")
            }
        }

    }




    return (
        <div className="SignInPage">
            <div className="logo">
                <Link className="logo" to="/"> NETFLIX</Link>
            </div>
            <div className="mainSignIn">
                <div className="formSignIn">
                    <form className="signInForm">
                        <p className="labelSignIn">
                            Sign In
                        </p>
                        <input required type="email" placeholder="Enter your Email" onChange={(e) => { setEmail(e.target.value); console.log(e.target.value) }} value={email} />
                        <input required type="password" placeholder="Enter Password" onChange={(e) => { setPassword(e.target.value) }} value={password} />
                        {
                            re.test(email) ? <button className="btnSignIn" onClick={handleSubmit}><Link className="btnLink" >Login</Link></button> :
                                <button className="btnSignIn" onClick={handleInvalid}><Link className="btnLink" >Login</Link></button>


                        }


                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <p className="backToSignUp">
                            New to Netflix? <span><Link to="/">Sign Up Now</Link></span>
                        </p>

                        <p className="captcha">This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                    </form>

                </div>
            </div>
            <div className="footerSignIn">

                <div className='footerInside signInInside'>


                    <div>
                        <p className='footerTop'>
                            Questions? Contact us.

                        </p>
                    </div>

                    <ul className='links'>
                        <li className='link'>
                            FAQ
                        </li>
                        <li className='link'>
                            Help Center
                        </li>


                        <li className='link'>
                            Privacy
                        </li>
                        <li className='link'>
                            Terms of Use
                        </li>
                        <li className='link'>
                            Cookies Performances
                        </li>
                        <li className='link'>
                            Corporate Information
                        </li>



                    </ul>


                </div>

            </div>
        </div>

    )
}
export default SignIn;