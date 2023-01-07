import React from 'react';
import { useCookies } from "react-cookie"
import "../App.css";
import { Link } from "react-router-dom";
import Question from './Question';
import QuestionsData from "./QuestionsData"
const Home = (prop) => {

    const [cookies, setCookie, removeCookie] = useCookies();
    console.log("this is cookies" + cookies.email)
    const [val, setVal] = React.useState(null)

    var QuestionArray = QuestionsData.map((u) => (<Question key={u.id} title={u.title} detail={u.detail} />));

    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    // ================   handleInvalid   Function   ================

    const handleInvalid = () => {
        alert("You are not entering email , Please enter a EMAIL.")
    }

    return (
        <div>

            <div className='bgImg'>
                <div className='nav'>

                    <div className='NavOne'>
                        NETFLIX
                    </div>
                    <div className='NavOne'>
                        {
                            cookies.email ? <button id='signInBtn'><Link to="/Main" className='btnLink'> Your Account</Link></button> :
                                <button id='signInBtn'><Link to="/SignIn" className='btnLink'> Sign In</Link></button>

                        }
                    </div>
                </div>
                <div className='mainPage'>
                    <div className='smallMain'>

                        {
                            cookies.email ? <>
                                <p className='mainHeading'>

                                    Welcome Back
                                </p>

                                <p className='lineTwo'>

                                    Unlimited movies, TV shows, and more.
                                </p>
                                <p className='lineTwo'>
                                    Watch anywhere. Cancel anytime.
                                </p>
                                <p className="mainHeading">
                                    You are Already Logged In.
                                </p>

                            </>

                                :
                                <>
                                    <p className='mainHeading'>

                                        Unlimited movies, TV shows, and more.
                                    </p>
                                    <p className='lineTwo'>
                                        Watch anywhere. Cancel anytime.
                                    </p>
                                    <p>
                                        Ready to watch? Enter your email to create or restart your membership.
                                    </p>

                                    <div className='getStarted'>
                                        <input className='mainPageInput' placeholder='Enter Email' onChange={(e) => { setVal(e.target.value) }} value={val} />
                                        {re.test(val) ? <button className='mainPageBtn' >
                                            <Link className='btnLink' to="/SignUp" state={val}>Get Started &#x21E8;
                                            </Link>
                                        </button> : <button className='mainPageBtn' onClick={handleInvalid}>
                                            <Link className='btnLink' to="/" state={val}>Get Started &#x21E8;
                                            </Link>
                                        </button>}
                                    </div>
                                </>
                        }

                    </div>
                </div>

            </div>
            <hr className='hrLine'></hr>
            <div className='khasDiv'>


                <div className='boxOne'>

                    <div className='childOneOne'>
                        <h1>
                            Enjoy on your TV.
                        </h1>
                        <p>
                            Watch on Smart TVs, Playstation, Xbox, Chromecast,
                        </p>

                    </div>
                    <div className='childOneTwo'>
                        <img id='imgOne' src='/netflixImage3.jpg'></img>

                    </div>
                </div>
            </div>
            <hr className='hrLine'></hr>


            <div className='khasDiv'>


                <div className='boxOne'>

                    <div className='childOneTwo'>
                        <img id='imgTwo' src='/netflixImage1.jpg'></img>

                    </div>


                    <div className='childOneOne'>
                        <h1>
                            Download your shows to watch offline.
                        </h1>
                        <p>
                            Save your favorites easily and always have something to watch.
                        </p>

                    </div>

                </div>
            </div>
            <hr className='hrLine'></hr>


            <div className='khasDiv'>


                <div className='boxOne'>



                    <div className='childOneOne'>
                        <h1>
                            Watch Everywhere.
                        </h1>
                        <p>
                            Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
                        </p>

                    </div>

                    <div className='childOneTwo'>

                    </div>

                </div>
            </div>
            <hr className='hrLine'></hr>



            <div className='khasDiv'>


                <div className='boxOne'>

                    <div className='childOneTwo'>
                        <img id='imgTwo' src='/netflixImage2.png'></img>

                    </div>


                    <div className='childOneOne'>
                        <h1>
                            Create profiles for kid.
                        </h1>
                        <p>
                            Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
                        </p>

                    </div>

                </div>
            </div>
            <hr className='hrLine'></hr>

            <div className='bgdiv'>


                <div className='faqs'>
                    <h1 className='faqsH'>
                        Frequently Asked Questions
                    </h1>

                    {QuestionArray}



                </div>

            </div>
            <div className='startedDiv'>
                <p style={{ marginTop: "35px", textAlign: "center" }}>
                    Ready to watch? Enter your email to create or restart your membership.
                </p>
                <div className='getStartedTwo'>
                    <input className='mainPageInputTwo' placeholder='Enter Email' />
                    <button className='mainPageBtnTwo'>Get Started &#x21E8;</button>
                </div>
            </div>

            <hr className='hrLine'></hr>
            <div className='footer'>
                <div className='footerInside'>


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
                            Account
                        </li>
                        <li className='link'>
                            Media Center
                        </li>
                        <li className='link'>
                            Invester Relations
                        </li>
                        <li className='link'>
                            Jobs
                        </li>
                        <li className='link'>
                            Ways to Watch
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


                        <li className='link'>
                            Contact Us
                        </li>
                        <li className='link'>
                            Speed Test
                        </li>
                        <li className='link'>
                            Legal Notice
                        </li>
                        <li className='link'>
                            Only on Netflix
                        </li>
                    </ul>
                    <div className='footerCountry'>
                        Netflix, Pakistan


                    </div>
                </div>
            </div>







        </div>
    )
}

export default Home;