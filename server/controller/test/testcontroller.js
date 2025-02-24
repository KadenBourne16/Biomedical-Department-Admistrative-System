exports.testController = (req, res) => {
    res.send("Working");
    console.log(working)
}

exports.try = (req, res) => {
    console.log(req.body)
    console.log("try is working");
}