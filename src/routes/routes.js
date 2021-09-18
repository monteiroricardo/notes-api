const express = require('express');

const router = express.Router();

const route_controller = require('../controllers/route_controller');

router.get('/notes', route_controller.notes);

router.get('/note/:id', route_controller.note);

router.post('/new', route_controller.new);

router.put('/note/:id', route_controller.update);

router.delete('/note/:id', route_controller.delete);


module.exports = router;