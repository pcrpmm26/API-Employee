exports.login = async (req,res)=>{
    res.send("Page Login");
}

exports.getProduct = async (req,res)=>{
    //res.send("Page Product Search " + req.params.id);
    res.send("Product id " + req.params.id + " Type is " + req.params.type);
}

exports.register = async (req,res)=>{
    //console.log(req.body);
    //res.send("Page Register");
    email = req.body.email;
    name = req.body.name;
    tel = req.body.tel;
    res.send("Email : " + email + "\n" + " Name : " + name + "\n" + " Tel : " + tel);
}