import jwt from 'jsonwebtoken';

const auth =(req,res,next) => {

    try{
        //Extract Authorization token
        const token = req.headers['auth-token'];
        const decoded = jwt.verify(token,'mysecretkey');
        next();
    }catch(error){
        res.status(500).json({
            error: error
        });
    }
}

export default auth;