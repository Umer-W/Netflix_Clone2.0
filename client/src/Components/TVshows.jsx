import React from "react";
import "./MainPageCss/Main.css"
import Header from "./Header";
import Slider from "infinite-react-carousel"
import Carousel from "react-elastic-carousel"
import PastyearCards from "./PastyearCards";
import MainFooter from "./MainFooter"
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import axios from "axios"
const TVshows=()=>{

    const isBigScreen=useMediaQuery({query:'(max-width: 768px)'})
    const [Data, setData] = React.useState(null)
    const settings = {
        centerPadding: 10,
        dots: false,
        overScan: 5,
        virtualList: true,


    };

    const getData = async () => {
        const result = await fetch("/GetAllData");
        const json = await result.json();
        
        if (result.ok) {
            console.log(json)
            console.log(json)

            setData(json)
        } else {

        }

    }


    React.useEffect(() => {


        getData();


    }, [])
     


    return (
        <div className="main">

            <Header />

            <div className="pageMain">
                <p className="headingMain">
                    TV Shows
                </p>
                <div className="line">


                    <p className="quotePara">
                    These days, the small screen has some very big things to offer.
                        From sitcoms to dramas to travel and talk shows, these are all the best programs on TV.
                    </p>
                </div>

{/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  khach kaam  +++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

                <div className="moviesSection">
                    <p className="sectionName" >
                        Released in the past year
                    </p>

{
    Data&&

                    <Slider {...settings} slidesPerRow={isBigScreen?2:5}>


                        {Data && Data.length>0 && Data.map((u) => (<div className="movieCards"><PastyearCards name={u.name} image={u.image} title={u.title} /></div>))}

                    </Slider>
                }

                </div>


                <div className="moviesSection">
                    <p className="sectionName" >
                        Released in the past year
                    </p>

{
    Data&&

                    <Slider {...settings}  slidesPerRow={isBigScreen?2:5}>

                  
                        {Data && Data.length>0 && Data.map((u) => (<div className="movieCards"><PastyearCards name={u.name} image={u.image} title={u.title} /></div>))}

                    </Slider>
                }

                </div>
                <div className="moviesSection">
                    <p className="sectionName" >
                        Released in the past year
                    </p>

{
    Data&&

                    <Slider {...settings}  slidesPerRow={isBigScreen?2:5}>

               
                        {Data && Data.length>0 && Data.map((u) => (<div className="movieCards"><PastyearCards name={u.name} image={u.image} title={u.title} /></div>))}

                    </Slider>
                }

                </div>
                <div className="moviesSection">
                    <p className="sectionName" >
                        Released in the past year
                    </p>

{
    Data&&

                    <Slider {...settings}  slidesPerRow={isBigScreen?2:5}>


                        {Data && Data.length>0 && Data.map((u) => (<div className="movieCards"><PastyearCards name={u.name} image={u.image} title={u.title} /></div>))}

                    </Slider>
                }

                </div>
                <div className="moviesSection">
                    <p className="sectionName" >
                        Released in the past year
                    </p>

{
    Data&&

                    <Slider {...settings} slidesPerRow={isBigScreen?2:5}>

                     

                        {Data && Data.length>0 && Data.map((u) => (<div className="movieCards"><PastyearCards name={u.name} image={u.image} title={u.title} /></div>))}

                    </Slider>
                }

                </div>
{/* +++++++++++++++++++++++++++++++++++++++++++++++++++   haan bas yahan tak hi thi ye khach   ++++++++++++++++++++++++++++++++++ */}




                <MainFooter />
            </div>



        </div>
    )

}
export default TVshows;