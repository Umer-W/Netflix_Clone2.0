import React from "react";
import "./MainPageCss/header.css"
import { CgBell, CgHeart } from "react-icons/cg"
import { ImSearch } from "react-icons/im"
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { GoPerson } from "react-icons/go"

import { Link } from "react-router-dom"
const Header = () => {


  const navigate = useNavigate();
  const [drop, setDrop] = React.useState("dropdown")
  const [dropLink, setDropLink] = React.useState("dropLink")

const handleLogout=async(e)=>{

  const result=await fetch("/Logout",{
    method:"GET"
  })
  if(result.status==200){
    navigate("/SignIn")

  }
  else{
    navigate("/Main")
  }
}
  const handleProfile = () => {
    if (drop !== "dropdownTwo") {
      setDrop("dropdownTwo")
      setDropLink("dropLinkTwo")
    }
    else {
      setDrop("dropdown")
      setDropLink("dropLink")

    }

  }
  return (
    <div className="header">
      <div className="oneHeader">
        <div className="logoMain">

        <p >
          <Link className="logoLink" to="/">NETFLIX</Link>
        </p>
        </div>
        <div className="navLinks">

        
        <p>
          <Link className="headerLink" to="/Main" >Home</Link>
        </p>
        <p>
          <Link className="headerLink" to="/TVshows">TV shows</Link>

        </p>
        <p>
          <Link className="headerLink" to="/Movies">Movies</Link>

        </p>
        <p>
          <Link className="headerLink" to="/Latest">Latest</Link>

        </p>
        <p>
          <Link className="headerLink" to="/MyList">My List</Link>

        </p>
        </div>
      </div>
      <div className="twoHeader">
        <p>
          <Link className="twoLink iconLink"> {<ImSearch />} </Link>
        </p>
        <p>
          <Link className="twoLink">  DVD </Link>
        </p>
        <p>
          <Link className="twoLink"><CgHeart /></Link>
        </p>
        <p>
          <Link className="twoLink  iconLink">  {<CgBell />} </Link>
        </p>
        <p>
          <Link className="twoLink lastLink dropbtn" onClick={handleProfile}  >
            <GoPerson />

          </Link>

        </p>
        <div className={drop}>
          <br />
          <p>
            <Link className={dropLink} >.Profile</Link>
          </p>
          <br />
          <p>
            <Link className={dropLink}>.Settings</Link>
          </p>
          <br />
          <p>
            <Link className={dropLink} onClick={handleLogout} style={{ backgroundColor: "red", borderRadius: "5px", padding: "2px", marginLeft: "13px" }}>.Logout</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Header;