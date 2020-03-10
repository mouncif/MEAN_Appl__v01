User = require('./userModel');

exports.index = function(req, res)
{
   User.get(function(err, users){
       if(err){
           res.json(
            {
                status: "error",
                message: err,
            }
           );
       }
       res.json({
        status: "success",
        message: "Contacts retrieved successfully",
        data: users
    })
   });
}

exports.new = function(req, res)
{
    var user = new User();
    user.firstName = req.body.firstName ? req.body.firstName: user.firstName;
    user.lastName = req.body.lastName;
    user.userame = req.body.userame;
    user.password = req.body.password;
    user.age = req.body.age;

    user.save(function(err){
        if(err)res.json(err);

        res.json({
            message: 'nouveau user crée',
            data: user
        })
    })
}

exports.view = function(req, res){
   User.findById(req.params.user_id, function(err, user){
       if(err)res.send(err);
       res.json({
           message:'user detlais...',
           data:user
       });
   });
}

exports.update = function(req, res)
{
    User.findById(req.params.user_id, function(err, user){
    if(err)res.send(err);    
    user.firstName = req.body.firstName ? req.body.firstName: user.firstName;
    user.lastName = req.body.lastName;
    user.userame = req.body.userame;
    user.password = req.body.password;
    user.age = req.body.age;

    user.save(function(err){
        if(err)res.json(err);

        res.json({
            message: 'user modifié',
            data: user
        });
    })

    });
}

exports.delete = function(req, res){
    User.remove({
        _id: req.params.user_id
    }, function(err, user){
            if(err)res.send(err);
            res.json({
                status:"succès",
                message:'user supprimé'
            });
        }
    );

}



