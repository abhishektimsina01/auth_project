const notFound = (req,res,next) => {
    const err = new Error(`${req.url} - not found for ${req.method} request`)
    err.status = 404
    console.log(err.message)
    next(err)
}

const errorHandler = (err, req, res, next) => {
    res.status(err.status).json({
        error : err.message,
        stack : err.stack   
    })
}

export {notFound, errorHandler}