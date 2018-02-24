var db = require("../models");


module.exports = function(app) {

    app.get("/api/all", function(req, res){
        db.burgers.findAll().then (function(data) {
            res.json(data)
        })
    })
    app.post("/post", function (req,res){

        console.log(req.body)
        db.burgers.create(req.body)
        .then(function(data){
          res.json(data)
        })
        
       })
       app.get("/api/:topping", function(req, res){
           var topping = req.params.topping;
        db.burgers.findAll({
            where: {
                topping:topping
            }
        }
        ).then (function(data) {
            res.json(data)
        })
    })

    app.put("/update/:id", function(req, res){
        var id = req.params.id;
        db.burgers.update({
            isComplete: req.body.isComplete
        },
        {
            where: {
                id : req.body.id
            }
        }).then(function (data) {
            res.json(data)
        })

        })
    
}
