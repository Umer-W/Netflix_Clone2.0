const Movie=require("../model/movieSchema")
const MovieCard=require("../model/movieCardSchema")
const MovieSchema=require("../model/movieSchema")
const DB=process.env.DATABASE;


// =======================================================================================================================
// ================================================     Add Movie     =====================================================
// =======================================================================================================================


const AddMovieDetail=async (req,res)=>{

    const movieDetail=new Movie({ 

        backgroundImage:req.body.backgroundImage,
        nameLogo:req.body.nameLogo,
        name:req.body.name,
       para:req.body.para,
       starring:req.body.starring,
       videoLink:req.body.videoLink
    });

    try{
        await movieDetail.save();
        console.log("Movie add ho gae ha")
        return res.status(200).json(movie);
    }
    catch(err){
        console.log("sorry Movie add nhi ho ski")
        return res.status(404).json(err);
    }

   
}

// =======================================================================================================================
// ================================================     Add Movie Card     =====================================================
// =======================================================================================================================


const AddMovieCard=async (req,res)=>{

    const movieCard=new MovieCard({ 

        image:req.body.image,
        name:req.body.name,
        title:req.body.title
       
    });

    try{
        await movieCard.save();
        console.log("Movie card add ho gya ha")
        return res.status(200).json(movieCard);
    }
    catch(err){
        console.log("sorry Movie card add nhi ho ska")
        return res.status(404).json(err);
    }

   
}

// =======================================================================================================================
// ================================================     Get all Movie Card     =====================================================
// =======================================================================================================================

const GetMovieCard=async(req,res)=>{

    try{
        const result=await MovieCard.find()

return res.status(200).json(result);

    }
    catch(err){
        console.log("sorry we can not get movie cards")
        return res.status(404).json(err);

    }

}


// =======================================================================================================================
// ================================================     Select Movie Object     =====================================================
// =======================================================================================================================

const GetMovieObject=async(req,res)=>{
    console.log(req.params.name)
    try{
        const result=await MovieSchema.find({name:req.params.name})
console.log(result)
return res.status(200).json(result);

    }
    catch(err){
        console.log("sorry we can not get movie Object")
        return res.status(404).json(err);

    }

}
// =======================================================================================================================
// ================================================     Delete Cookie     =====================================================
// =======================================================================================================================

const DeleteCookie=async(req,res)=>{
    try{
        const result=res.clearCookie(`email`)
    return res.status(200).json({message:"yes email cookie deleted successfully"});
    
}catch(err){
    return res.status(403).json(err)
}
}





module.exports={AddMovieDetail,AddMovieCard,GetMovieCard,GetMovieObject,DeleteCookie};