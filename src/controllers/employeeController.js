exports.get = async (req,res)=>{
    res.send("get all employee");
}

exports.getid = async (req,res)=>{
    res.send("get emp by id");
}

exports.getsal = async (req,res)=>{
    res.send(req.params.sal + "==>" + req.params.sal*10/100);
}

exports.getage = async (req,res)=>{
    res.send(req.params.age + "==>" + (60-req.params.age));
}

exports.post = async (req,res)=>{
    id = req.body.id;
    name = req.body.name;
    age = req.body.age;
    salary = req.body.salary;
    res.send(
        "add an employee " + "id : " + id + "\n"
        + " name : " + name + "\n"
        + " age : " + age + "\n"
        + " salary : " + salary
        );
}