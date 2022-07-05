const userController = require('../controllers/userController.js')
const {Router} = require('express');
const router = Router();


router.get('/check-user',userController.checkUser);

router.post('/add-user',userController.addUser)

router.delete('/remove-user',userController.removeUser)

router.put('/add-coin',userController.addCoin);

router.put('/remove-coin',userController.removeCoin);

router.get('/get-coins',userController.getCoins);


module.exports = router;
