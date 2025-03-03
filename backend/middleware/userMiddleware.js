const notFound = (req,res,next) => {
    const err = new Error(`${req.url} - not found for ${req.method} request`)
    err.status = 404
    console.log(err.message)
    next(err)
}

const errorHandler = (err, req, res, next) => {
    const sendStatus = err.status || 400
    res.status(sendStatus).json({
        error : err.message,
        stack : err.stack   
    })
}

export {notFound, errorHandler}