import React from "react";
import {useLocation,useParams} from 'react-router-dom';
import Navbar from "./Navbar";
import SignUpForm from "./SignUpForm";
import Footer from "./Footer";

const SignUp=(props )=>{
  
   const location=useLocation();
   const [name,setName]=React.useState(location.state);
   
    return (
        <div >
            <Navbar/>
            <SignUpForm email={name}/>
            <Footer/>
       


        </div>
    )
} 
export default SignUp;