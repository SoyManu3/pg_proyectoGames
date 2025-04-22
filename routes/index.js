const { Router } = require('express');

const controllers = require('../controllers');

const router = Router();

router.get('/',  (req, res) => res.send('Welcome'));

router.post('/games', controllers.createGame);
router.get('/games', controllers.getAllGames);
router.delete('/games/:id', controllers.deleteGame);
router.put('/games/:id', controllers.updateGame);
router.get('/games/:id', controllers.getByIdGame);



module.exports = router;
