const express = require('express');
const router = express.Router();
const { save, update, remove, all, user } = require('../controllers/application.controller')

/* GET home page. */

router.post('/create', save);
router.put('/update', update);
router.delete('/delete/:id', remove);
router.get('/all', all);
router.get('/user/:id', user);



module.exports = router;
