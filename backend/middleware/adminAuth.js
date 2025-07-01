const jwt = require("jsonwebtoken")


const adminAuth = async(req, res, next)=> { 
    try {
        
        // const {token} = req.headers
        // console.log(token);
        // console.log(req);

        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        console.log(token);
        if(!token){
            return res.json({success: false, message: "not authorised"})
        }
        const token_decode = jwt.verify(token, process.env.JWT_SECRET)
        if(token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
            return res.json({success: false, message: "not authorised"})
        }

        next()
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

module.exports = {adminAuth}