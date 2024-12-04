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
    }

    const userExists = await User.findOne({ user });
    const emailExists = await User.findOne({ email });

    if(userExists){
        res.status(409).send({status:"Error", message:"Este usuario ya ha sido resgistrado"})
    }

    if(emailExists){
        res.status(409).send({status:"Error", message:"Este correo ya ha sido resgistrado"})
    }
}