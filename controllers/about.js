'use strict';

// import all required modules
const logger = require('../utils/logger');
const developerRkStore = require('../models/developer-tango-store.js');

// create about object
const about = {
  
  // index method - responsible for creating and rendering the view
  index(request, response) {
    
    // display confirmation message in log
    logger.info('about rendering');
    
    // create view data object (contains data to be sent to the view e.g. page title)
    const viewDataRk = {
      title: 'About the Tango Playlist App',
      rk_Developers: developerRkStore.getAllRkDevelopers(),
    };
    
    // render the about view and pass through the data
    response.render('about', viewDataRk);
  },
};

// export the about module
module.exports = about;