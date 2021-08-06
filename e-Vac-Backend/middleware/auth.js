import jwt from 'jsonwebtoken';

<<<<<<< HEAD
const auth =(req,res,next) => {
    // console.log(req.headers);
    try{
        //Extract Authorization token
        const token = req.headers['auth-token'];
        const decoded = jwt.verify(token,'mysecretkey');
        next();
    }catch(error){
=======

const auth = (req, res, next) => {
    // console.log(req.headers);
    try {
        //Extract Authorization token
        const token = req.headers['auth-token'];
        const decoded = jwt.verify(token, 'mysecretkey');
        next();
    } catch (error) {
>>>>>>> main
        res.status(500).json({
            message: error.message,
        });
    }
}

export default auth;