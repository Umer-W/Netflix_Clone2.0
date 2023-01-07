import React from "react";
import Header from "./Header";
import MainFooter from "./MainFooter";
import { useMediaQuery } from 'react-responsive'
import { useLocation } from "react-router-dom";
// import video from './Videos/laalSinghVedeo.mp4'
import "./MainPageCss/movieDetailMain.css"
const MovieDetail = () => {

    const isbigScreen=useMediaQuery({query:'(max-width:430px)'})
    console.log("han g gangu")

    const location=useLocation();
    const [bg,setbg]=React.useState(location.state&&location.state.backgroundImage)
    const [nameLogo,setNameLogo]=React.useState(location.state&&location.state.nameLogo)
    const [name,setName]=React.useState(location.state&&location.state.name)
    const [para,setPara]=React.useState(location.state&&location.state.para)
    const [starring,setStarring]=React.useState(location.state&&location.state.starring)
    const [videoLink,setVideoLink]=React.useState(location.state&&location.state.videoLink)

    return (
        <div className="movieDetail" >
            <Header />
            {isbigScreen?
                <>

           <div className="movieDetailMain" style={{backgroundImage:`linear-gradient(to bottom,transparent,rgba(0, 0, 0, 0),rgb(30, 30, 30,0),rgb(30, 30, 30,0),rgb(30, 30, 30,0),rgb(30, 30, 30,0),rgb(30, 30, 30,1),rgba(20, 20, 20, 1)),url(${bg})`}}>
                 
                 </div>
                 <div className="detailOfMovie" style={{width:"90%"}}>
                         <img className="nameLogo" src={nameLogo} alt="Logo" />
     
                         <p className="nameOfMovie" >
                             {name}
                         </p>
                         <p className="lightColor"> 
                             2022 | 16+ | 2h 37m | pastMovies
                         </p>
                         <p className="description">
                             {para}
                         </p>
                         <p className="description">
                             <span className="lightColor" >Starring:</span>{starring}
                         </p>
                     </div>
            </>:
             <>
            
                  <div className="movieDetailMain" style={{backgroundImage:`linear-gradient(to left,transparent,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.808),rgba(0, 0, 0, 0.966)),url(${bg})`}}>
                <div className="detailOfMovie">
                    <img className="nameLogo" src={nameLogo} alt="Logo" />

                    <p className="nameOfMovie">
                        {name}
                    </p>
                    <p className="lightColor"> 
                        2022 | 16+ | 2h 37m | pastMovies
                    </p>
                    <p className="description">
                        {para}
                    </p>
                    <p className="description">
                        <span className="lightColor" >Starring:</span>{starring}
                    </p>
                </div>
            </div>
              </>

            }
           
            <hr className="hr" />
            <p className="vedeo">
                Videos | {name}
            </p>
            <video className="trailer"  controls >
      <source src={videoLink} type="video/mp4"/>
     </video>
     <div style={{color:"white",margin:"40px 0px",textAlign:"center"}}>
        <h1 style={{textAlign:"start",padding:"0px 0px 0px 80px"}}>More Detail</h1>
     </div>
            <div className="moreDetail">
                <div className="moreDetailChild" >
                    <p className="head">Watch offline</p>
                    <p>Available to download</p>

                </div>
                <div className="moreDetailChild">
                    <p className="head">Genres</p>
                    <p>Romantic Comedies, Indian, </p>
                    <p>Hindi-Language Movies, Bollywood Movies, </p>
                    <p>Comedies, Dramas, Romantic Movies</p>

                </div>
                <div className="moreDetailChild">
                    <p className="head">This movie is...</p>
                    <p>Heartfelt, Emotional, Romantic</p>

                </div>
                <div className="moreDetailChild">
                    <p className="head">Audio</p>
                    <p>Hindi [Original], Tamil, Telugu</p>
                </div>
                <div className="moreDetailChild">
                    <p className="head">Subtitles</p>
                    <p>English</p>
                    <p>German</p>
                    <p>Urdu</p>
                    <p>Punjabi</p>

                </div>
                <div className="moreDetailChild">
                    <p className="head">Cast</p>
                    <p>Aamir Khan</p>
                    <p>Manav Vij</p>
                    <p>Rohaan Singh</p>
                    <p>Kareena Kapoor</p>

                </div>
            </div>
            <div className="footerDetail">
           
<MainFooter/>
</div>
        </div>
    )
}
export default MovieDetail;