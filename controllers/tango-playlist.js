'use strict';

const logger= require('../utils/logger');
const uuid = require('uuid');
const tandaStore = require('../models/playlist-tango-store');

const tanda = {
  index(request, response) {
    const tandaId = request.params.id;
    logger.debug('Tango Playlist id = ' + tandaId);
    const viewDataRk = {
      title: 'Tango Playlist',
      tanda: tandaStore.getTanda(tandaId),
    };
    logger.info('about to render', viewDataRk.tanda);
    response.render('tanda', viewDataRk);
  },
    deleteMelody(request, response) {
    const tandaId = request.params.id;
    const melodyId = request.params.melodyid;
    logger.debug(`Deleting Tango ${melodyId} from Tango Playlist ${tandaId}`);
    tandaStore.removeMelody(tandaId, melodyId);
    response.redirect('/tanda/' + tandaId);
  },
    addTangoMelody(request, response) {
    const tandaId = request.params.id;
    const tanda = tandaStore.getTanda(tandaId);
    const newMelody = {
      id: uuid(),
      title: request.body.title,
      artist: request.body.artist,
      genre: request.body.genre,
      duration: request.body.duration
    };
    tandaStore.addTangoMelody(tandaId, newMelody);
    response.redirect('/tanda/' + tandaId);
    },
  updateMelody(request, response) {
    const tandaId = request.params.id;
    const melodyId = request.params.melodyid;
    logger.debug("updating melody " + melodyId);
    const updatedMelody = {
      title: request.body.title,
      artist: request.body.artist,
      genre: request.body.genre,
      duration: request.body.duration
    };
    tandaStore.editMelody(tandaId, melodyId, updatedMelody);
    response.redirect('/tanda/' + tandaId);
  }
};

module.exports = tanda;