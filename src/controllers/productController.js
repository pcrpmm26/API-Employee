exports.get = async (req,res)=>{
    res.send("get all product");
}

exports.getid = async (req,res)=>{
    res.send("get product from id = " + req.params.id);
}

exports.getname = async (req,res)=>{
    res.send("get product by name = " + req.params.name);
}

exports.getprice = async (req,res)=>{
    res.send("get product by price = " + req.params.price);
}

exports.post = async (req,res)=>{
    id = req.body.id;
    name = req.body.name;
    res.send("add a product " + "id : " + id + "," + " name : " + name);
}

exports.putid = async (req,res)=>{
    res.send("edit product by id");
}

exports.patchid = async (req,res)=>{
    res.send("edit product by id");
}

exports.deleteid = async (req,res)=>{
    res.send("delete product by id");
}