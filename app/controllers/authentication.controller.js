import bcrypt from "bcryptjs";
import User from "../models/user.model.js";

export async function login(req, res){
    console.log(req.body);

};

export async function register(req, res){

    const username = req.body.user;
    const email = req.body.email;
    const password = req.body.password;
    const phone = req.body.phone;

    if(!username || !email || !password || !phone){
        res.status(400).send({status:"Error", message:"Los campos están incompletos"});
    };

    const userExists = await User.findOne({ username });
    if(userExists){
        console.log(`usuario ${username} ya exite en la base de datos`);
        return res.status(409).send({status:"Error", message:"Este usuario ya ha sido resgistrado"});
};
    
    const emailExists = await User.findOne({ email });
    if(emailExists){
        console.log(`correo ${email} ya exite en la base de datos`);
        return res.status(409).send({status:"Error", message:"Este correo ya ha sido resgistrado"});
    };
    
    const salt = await bcrypt.genSalt(5);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
        username,
        email,
        password: hashPassword,
        phone,
    })
    console.log(newUser);
    const userSaved = await newUser.save();

    res.status(201).send({status:"ok",message:`usuario ${userSaved.username} registrado correctamente`, redirect:"/"});
    console.log(`usuario agregado ${userSaved.username}`);
};