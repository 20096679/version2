'use strict';

// import all required modules
const logger = require('../utils/logger');
const uuid = require('uuid');

const tandaStore = require('../models/playlist-tango-store.js');

// create dashboard object
const dashboard = {
  
  // index method - responsible for creating and rendering the view
  index(request, response) {
    
    // display confirmation message in log
    logger.info('dashboard rendering');
    
    // create view data object (contains data to be sent to the view e.g. page title)
    const viewDataRk = {
      title: 'Tango Playlist App Dashboard',
      tandas: tandaStore.getAllTandas(),
    };
    
    // render the dashboard view and pass through the data
    logger.info('about to render', viewDataRk.tandas);
    response.render('dashboard', viewDataRk);
  },
  
  deleteTanda(request, response) {
    const tandaId = request.params.id;
    logger.debug(`Deleting Tango Playlist ${tandaId}`);
    tandaStore.removeTanda(tandaId);
    response.redirect('/dashboard');
  },
  
  addTanda(request, response) {
    const newTanda = {
      id: uuid(),
      title: request.body.title,
      duration: request.body.duration,
      melodies: [],
    };
    tandaStore.addTanda(newTanda);
    response.redirect('/dashboard');
  },
};

// export the dashboard module
module.exports = dashboard;