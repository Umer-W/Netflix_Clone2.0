import React from "react";
import Slider from "infinite-react-carousel"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "./MainPageCss/Main.css"
const PastyearCards = (props) => {

  const isBigScreen = useMediaQuery({ query: '(max-width:768px)' })
  const [MovieName, setMovieName] = React.useState(props.name);
  const navigate = useNavigate();


  // const sendName = async (e) => {
  //   e.preventDefault();
  //   var res = await fetch("/SelectMovie", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       MovieName
  //     })
  //   })

  //   if (res.status === 200) {
  //     console.log(res)
  //     console.log("Your Movie Object is Successfully retrieved")
  //   }
  //   else {
  //     console.log("sorry , we can not retrieve your movie object")
  //   }


  // }
  const sendName = async (e) => {
    e.preventDefault()

    const result = await fetch(`/SelectMovie/${MovieName}`);
    const json = await result.json();

    if (result.ok) {
      console.log(json)
      console.log(json[0].name)
      navigate("/MovieDetail", {
        state: {
          backgroundImage: json[0].backgroundImage,
          nameLogo: json[0].nameLogo,
          para: json[0].para,
          starring: json[0].starring,
          videoLink: json[0].videoLink,
          name: json[0].name


        }
      })


    } else {

    }





  }

  return (


    <>


      <Link to="/MovieDetail"> <img src={props.image} alt="" onClick={sendName} /></Link>
      {
        isBigScreen ?
          <p style={{ fontSize: "14px" }}>
            {props.name}
          </p> :
          <p >
            {props.name}
          </p>
      }


    </>


  )
}


export default PastyearCards;