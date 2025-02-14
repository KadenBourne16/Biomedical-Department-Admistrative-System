const db = require('../../../database/databaseconfiguration')
const bcrypt = require('bcrypt')

exports.loginStudent = async(req, res) => {
    const {email, password} = req.body
    console.log(email, password)


    //Checking for email availability
    if(email.includes("@ktu.edu.gh")){
        const query = "SELECT * FROM student WHERE institutionalEmail = ? "
        try{
            const result = await db.query(query, email);
            if(result.length > 0){
                console.log(result);
                const isValidPassword = await bcrypt.compare(email, result[0].password);
                if(isValidPassword){
                    return res.status(200).json({message: "Login Successful"}); 
                } 
            }else{
               return res.status(404).json({message: "Institutional mail does not exist"})
            }
        }catch(err){
            console.log(err)
            return res.status(500).send('Internal Server Error');
        }
    }else if(email.includes("@gmail.com") || email.includes("@yahoo.com")){
        const query = "SELECT * FROM lecturer WHERE email = ? "
        try{
            const result = await db.query(query, email);
            if(result.length > 0){
                console.log(result);
                return res.status(200).json({message: "Login Successful"}); 
            }else{
               return res.status(404).json({message: "Institutional mail does not exist"})
            }
        }catch(err){
            console.log(err)
            return res.status(500).send('Internal Server Error');
        }
    }else{
        res.status(404).json({message: "Check Email"});
    }
}
