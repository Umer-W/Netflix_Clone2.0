import React from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import "./CSS/SignUpFOrm.css"
const SignUpForm = (props) => {
    
    

    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    const [eemail, setEmail] = React.useState(props.email);
    const [password, setPassword] = React.useState(null)

    
    var res;
    const handleInvalid=()=>{
        alert("Invalid inputs, Please Enter Valid one. ")
    }


    const handleSubmit = async(e) => {
   
        e.preventDefault();
       const email=eemail;
      
          res=await fetch("/signup",{
           method:"POST",
           headers:{
             "Content-Type":"application/json"
            },
            body:JSON.stringify({
              email,password
            })
            
          })
          console.log(res)
          if(res.status===200){
            alert("your account is successfully created")
          }
          else{
            alert("sorry , account is not created")
          }
    }
        
    











    return (
        <div className="signUpPage">

            <div className="signUpForm">
                <p className="para">
                    step 1 of 3
                </p>

                <p className="paraTwo">
                    Create a password to start your membership
                </p>
                <p className="para">
                    Just a few more steps and you're done!
                </p>
                <p className="para">
                    We hate paperwork, too.
                </p>

                <input required type="email" className="formInput" placeholder="Enter Email" onChange={(e) => { setEmail(e.target.value) }} value={eemail} />
                <input required type="password" className="formInput" placeholder="Enter Password" onChange={(e) => { setPassword(e.target.value) }} value={password} />
                <div className="awen">


                    <input type="checkbox" className="formInput" id="sendEmail" name="sendEmail" />
                    <label className="sendEmailLine" htmlFor="sendEmail">Please do not email me Netflix special offers.</label>
                </div>
                {
                   re.test(eemail)&& password ?
                        <button id="nextBtn" type="submit" className="formInput" placeholder="Enter Password" value="Next" onClick={handleSubmit} >
                            <Link id="nextLink"  to="/SignUpTwo">Next</Link>
                        </button> :
                         <button id="nextBtn" type="submit" className="formInput" placeholder="Enter Password" value="Next" onClick={handleInvalid} >
                         <Link id="nextLink" to="/SignUp">Next</Link>
                     </button> 


            }







            </div>
        </div>
    )
}
export default SignUpForm;