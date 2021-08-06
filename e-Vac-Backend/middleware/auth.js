import jwt from 'jsonwebtoken';
import '../node_modules/dotenv/config.js';


const auth = (req, res, next) => {
    // console.log(req.headers);
    try {
        //Extract Authorization token
        const token = req.headers['auth-token'];
        const decoded = jwt.verify(token, 'mysecretkey');
        next();
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

export default auth;