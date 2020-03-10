let router = require('express').Router();

router.get('/', function(req, res){
   res.json(
       {
           status:'App...',
           message:'Bonjour à tous...'
       }
   );
});

var userController = require('./userController');

router.route('/users')
.get(userController.index)
.post(userController.new);

router.route('/users/:user_id')
.get(userController.view)
.put(userController.update)
.delete(userController.delete);



module.exports = router;