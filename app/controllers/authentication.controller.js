import bcrypt from "bcryptjs";

export async function login(req, res){

}

export async function register(req, res){
    console.log(req.body);

    const user = req.body.user;
    const email = req.body.email;
    const password = req.body.password;
    const tel = req.body.tel;

    if(!user || !email || !password || !tel){
        res.status(400).send({status:"Error", message:"Los campos están incompletos"})
    };

    const userExists = await User.findOne({ user });
    if(userExists){
        res.status(409).send({status:"Error", message:"Este usuario ya ha sido resgistrado"})
    };
    
    const emailExists = await User.findOne({ email });
    if(emailExists){
        res.status(409).send({status:"Error", message:"Este correo ya ha sido resgistrado"})
    };
    
    const salt = await bcrypt.genSalt(5);
    const hashPassword = await bcrypt.hash(password, salt)

    const newUser = {
        user
    }
}