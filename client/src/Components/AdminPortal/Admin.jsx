import React from "react";
import "../AdminPortal/Admin.css"
import { Link } from "react-router-dom";
const Admin = () => {

   const[name,setName]=React.useState("");
   const[catagory,setCatagory]=React.useState("");
   const[description,setDescription]=React.useState("");
   const[starring,setStarring]=React.useState("");
   const[cardImageLink,setCardImageLink]=React.useState("");
   const[backgroundImageLink,setBackgroundImageLink]=React.useState("");
   const[logoLink,setLogoLink]=React.useState("");
   const[movieLink,setMovieLink]=React.useState("");

const handleSubmit=async(e)=>{
    console.log("submitted")

    let res=await fetch("/MovieUpload",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
         },
         body:JSON.stringify({
           name,catagory,description,starring,cardImageLink,backgroundImageLink,logoLink,movieLink
         })
         
       })
       console.log(res)
       if(res.status===200){
         alert("your Movie is successfully uploaded")
       }
       else{
         alert("sorry , movie cannot be upload")
       }
 }

    return (
        <>
            <div className="adminPortal">
                <div className="headerAdmin">
                    <Link className="netflixLink" to="/signIn">NETFLIX</Link>
                </div>
                <div className="adminTitle">
                    ADMIN PANEL
                </div>
                <div className="adminMain">
                    <h1 className="movieAdd">Add New Movie </h1>
                    <input value={name} onChange={(e)=>{ setName(e.target.value) ;console.log(name)}} className="adminInputs" type="text" placeholder="Enter Movie Name" />
                    <div>
                    <button className="selectBtn" value="Movies" onClick={(e)=>{e.preventDefault(); setCatagory(e.target.value);}}>Movies</button>
                    <button className="selectBtn" value="Released in the Past Year" onClick={(e)=>{e.preventDefault(); setCatagory(e.target.value); }}>Released in the Past Year</button>
                    <button className="selectBtn" value="TV shows" onClick={(e)=>{e.preventDefault(); setCatagory(e.target.value);}}>TV shows</button>
                    </div>
                    <input value={catagory}  className="adminInputs" type="text" placeholder="Enter Movie Catagory"   name="cata"/>
                    <input value={description} onChange={(e)=>{ setDescription(e.target.value) ;console.log(description)}} className="adminInputs" type="text" placeholder="Enter Movie Description" />
                    <input value={starring} onChange={(e)=>{ setStarring(e.target.value) ;console.log(starring)}}  className="adminInputs" type="text" placeholder="Enter Starring" />
                    <input value={cardImageLink} onChange={(e)=>{ setCardImageLink(e.target.value) ;console.log(cardImageLink)}}  className="adminInputs" type="text" placeholder="Enter Movie Card Image Link" />
                    <input value={backgroundImageLink} onChange={(e)=>{ setBackgroundImageLink(e.target.value) ;console.log(backgroundImageLink)}}  className="adminInputs" type="text" placeholder="Enter Background Image Link" />
                    <input value={logoLink} onChange={(e)=>{ setLogoLink(e.target.value) ;console.log(logoLink)}}  className="adminInputs" type="text" placeholder="Enter Movie name Logo Link" />
                    <input value={movieLink} onChange={(e)=>{ setMovieLink(e.target.value) ;console.log(movieLink)}}  className="adminInputs" type="text" placeholder="Enter Movie Link" />
<button className="adminSubmitBtn" onClick={handleSubmit}>Submit New Movie</button>

                </div>
            </div>
        </>
    )
}

export default Admin;