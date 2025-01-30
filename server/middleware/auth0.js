const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET || 'the_secret_key';

const authenticateJWT = (req, res, next) => {
    const token = req.headers['authorization'] && req.headers['autorization'].split('')[1];

    if(token){
        jwt.verify(token, JWT_SECRET, (err, user) => {
            if(err){
                return res.sendStatus(403)
            }
            req.user = user
            next();
        })
    }else{
        req.sendStatus(401)
    }
}

module.exports = authenticateJWT;