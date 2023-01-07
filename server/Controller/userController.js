
const User = require("../model/userSchema")

// =======================================================================================================================
// ================================================     Home page    =====================================================
// =======================================================================================================================



const HomePage=(req,res)=>{
    res.json("<h1>Welcome to Node js, This is home page of your node app</h1>")
}



// =======================================================================================================================
// ================================================     Sign Up User     =====================================================
// =======================================================================================================================


const AddUser=async (req,res)=>{

    const user=new User({ 

        email:req.body.email,
        password: req.body.password
    });

    try{
        await user.save();
        console.log("user add ho gia ha")
        return res.status(200).json(user);
    }
    catch(err){
        console.log("sorry user add nhi ho ska")
        return res.status(404).json(err);
    }

   
}

// =======================================================================================================================
// ================================================     Login Check     =====================================================
// =======================================================================================================================


const CheckUser=async (req,res)=>{

    try{
        const user=await User.findOne({$and:[{email:req.body.email},{password:req.body.password}]});
        if(user!=null){
            // res.cookie(`email`,`${req.body.email}`)

            console.log("user Login ho gia ha")
            console.log(req.cookies.email)

            return res.status(200).json(user);
        }
        else{
            console.log("sorry user login nhi ho ska")
            return res.status(404).json(err);
            
        }
    }
    catch(err){
        console.log("sorry user login nhi ho ska")
        return res.status(404).json(err);
    }

   
}


module.exports={AddUser,HomePage,CheckUser};