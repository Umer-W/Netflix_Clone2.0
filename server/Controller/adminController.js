const Movie=require("../model/movieSchema")
const MovieCard=require("../model/movieCardSchema")



const MovieUpload=async(req,res)=>{
    const name=req.body.name;
    const catagory=req.body.catagory;
    const description=req.body.description;
    const starring=req.body.starring;
    const cardImageLink=req.body.cardImageLink;
    const backgroundImageLink=req.body.backgroundImageLink;
    const logoLink=req.body.logoLink;
    const movieLink=req.body.movieLink;
    
    const movieCard=new MovieCard({
       name:name,
       image:cardImageLink,
       title:catagory
    })
    const movieDetail=new Movie({
        name:name,
        para:description,
        starring:starring,
        nameLogo:logoLink,
        backgroundImage:backgroundImageLink,
        videoLink:movieLink
    })
    try{
 const result1=await movieCard.save();
 const result2=await movieDetail.save();
 

return res.json({result1,result2}).status(200)
    }catch(err){

    }


}


module.exports={MovieUpload}