const jsonwebtoken = require('jsonwebtoken');
require('dotenv').config();

const JWT = process.env.JWT;

exports.verifyToken = async (req, res, next) => {
    const token = req.headers['authorization'];
    if(!token) return res.status(403).json({message: 'No sent bearer token'});

    if(typeof token !== 'undefined'){
        const splitToken = token.split(' ').pop();
        try {
            const jwtPayload = jsonwebtoken.verify(splitToken, JWT);
            req.userId = jwtPayload.userId;
            jwtPayload ? next() : res.status(403).json({message:'Forbidden'});
        }
        catch (error){
            res.status(403).json({message:'Forbidden'});
        }
    }
    else{
        res.sendStatus(403).json({message:'Forbidden'});
    }
}
