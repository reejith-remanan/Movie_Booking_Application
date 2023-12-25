const jwt = require('jwt');
const Admin = require('../models/Admin');
const bcrypt = require('bcrypt');

const addAdmin = async(req, res, next) => {
    const {email, password} = req.body;
    try{
    let existingAdmin = await Admin.findOne({ email })
    }
    catch (err) {
        return console.log(err);
    }
    if(existingAdmin){
        return res.status(400).json({message : "Admin already exist"})
    }
    let admin;
    const hashpassword = bcrypt.hashSync(password);
    try {
        admin = new Admin({email, pasword : hashedPassword});
        admin = await admin.save();
    }
    catch{
        return consoole.log(err);
    }
    if (!admin) {
        return res.status(400).jason({message : "Unable to create admin"});
    }
    return res.status(201).json({message : "Admin Created", admin : admin});
}   
