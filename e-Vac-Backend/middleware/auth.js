import jwt from 'jsonwebtoken';
import '../node_modules/dotenv/config.js';

const secret = process.env.secret;

const auth = async(req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500;

        let decodedData;

        if (token && isCustomAuth) {
            decodedData = jwt.verify(token, secret);

            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token);

            req.userId = decodeDate?.sub;
        }
        next();
    } catch (error) {
        res.send({message: err.message});
    }
};

export default auth;