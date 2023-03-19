'use strict';

// import express and initialise router
const express = require('express');
const router = express.Router();

// import controllers
const start = require('./controllers/start.js');
const dashboard = require('./controllers/dashboard.js');
const about = require('./controllers/about.js');
const tanda = require('./controllers/tango-playlist.js');

// connect routes to controllers
router.get('/', start.index);
router.get('/dashboard', dashboard.index);
router.get('/about', about.index);

router.get('/tanda/:id', tanda.index);

router.get('/tanda/:id/deletemelody/:melodyid', tanda.deleteMelody);
router.post('/tanda/:id/addtangomelody', tanda.addTangoMelody);
router.post('/tanda/:id/updatemelody/:melodyid', tanda.updateMelody);

router.get('/dashboard/deletetanda/:id', dashboard.deleteTanda);
router.post('/dashboard/addtanda', dashboard.addTanda);

// export router module
module.exports = router;

