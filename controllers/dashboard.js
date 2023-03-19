'use strict';

// import all required modules
const logger = require('../utils/logger');
const uuid = require('uuid');

const tangoPlaylistStore = require('../models/playlist-tango-store.js');

// create dashboard object
const dashboard = {
  
  // index method - responsible for creating and rendering the view
  index(request, response) {
    
    // display confirmation message in log
    logger.info('dashboard rendering');
    
    // create view data object (contains data to be sent to the view e.g. page title)
    const viewDataRk = {
      title: 'Tango Playlist App Dashboard',
      tangoplaylists: tangoPlaylistStore.getAllTangoPlaylists(),
    };
    
    // render the dashboard view and pass through the data
    logger.info('about to render', viewDataRk.tangoplaylists);
    response.render('dashboard', viewDataRk);
  },
  
  deleteTangoPlaylist(request, response) {
    const tangoPlaylistId = request.params.id;
    logger.debug(`Deleting Tango Playlist ${tangoPlaylistId}`);
    tangoPlaylistStore.removeTangoPlaylist(tangoPlaylistId);
    response.redirect('/dashboard');
  },
  
  addTangoPlaylist(request, response) {
    const newTangoPlayList = {
      id: uuid(),
      title: request.body.title,
      duration: request.body.duration,
      melodies: [],
    };
    tangoPlaylistStore.addTangoPlaylist(newTangoPlayList);
    response.redirect('/dashboard');
  },
};

// export the dashboard module
module.exports = dashboard;