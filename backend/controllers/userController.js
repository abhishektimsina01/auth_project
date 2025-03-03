function getReq(req, res){
    console.log("get request")
    res.end("the request has been responded")
}

function loginReq(req,res){
    //token should be signed and sent to the user
    res.end("logged in")
}

function logoutReq(req,res){
    //token should be removed from the user
    res.end("logged out")
}

function signupReq(req,res, next){
    try{
        const {name, password, email} = req.body;
        if(!email || !name || !password){
            const error = new Error("Fill up all the credentials")
            next(error)
        }   
        console.log(name, password, email)
        res.end("signed up")
    }
    catch(err){
        next(err)
    }
}

export {getReq, signupReq, loginReq, logoutReq}