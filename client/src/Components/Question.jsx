import React, {useState} from "react";

const Question=(prop)=>{
const [Style,setStyle]=useState("questionParaTwo");
const [Stylee,setStylee]=useState("icon");

    const handlePara=()=>{
       if(Style==="questionPara" && Stylee==="iconTwo"){
        setStyle("questionParaTwo")
        setStylee("icon")
       }
       else{
        setStyle("questionPara")
        setStylee("iconTwo")

       }
    }

    return(
        <div>
            <div id="questionHeading" onClick={handlePara}>

            <p >
                {prop.title}
            </p>
            <i className="fa fa-plus" id={Stylee}></i>
            </div>
            <div id={Style}>

            <p >
                {prop.detail}
            </p>
            </div>

  
        </div>
    )
    
    }
    
 export default Question;