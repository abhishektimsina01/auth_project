function getReq(req, res){
    console.log("get request")
    res.end("the request has been responded")
}

function loginReq(req,res){
    res.end("logged in")
}
function logoutReq(req,res){
    res.end("logged out")
}
function signupReq(req,res){
    res.end("signed up")
}

export {getReq, signupReq, loginReq, logoutReq}