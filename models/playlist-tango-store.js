'use strict';

const _ = require('lodash');
const JsonTangoStore = require('./json-tango-store');

const tandaStore = {

  store: new JsonTangoStore('./models/playlist-tango-store.json', { tandaCollection: [] }),
  collection: 'tandaCollection',

  getAllTandas() {
    return this.store.findRkAll(this.collection);
  },

  getTanda(id) {
    return this.store.findOneRkBy(this.collection, { id: id });
  },

  addTanda(tanda) {
    this.store.addRk(this.collection, tanda);
  },

  removeTanda(id) {
    const tanda = this.getTanda(id);
    this.store.removeRk(this.collection, tanda);
  },

  removeAllTandas() {
    this.store.removeRkAll(this.collection);
  },

  addMelody(id, melody) {
    const tanda = this.getTanda(id);
    tanda.melodies.push(melody);
  },

  removeMelody(id, melodyId) {
    const tanda = this.getTanda(id);
    const melodies = tanda.melodies;
    _.remove(melodies, { id: melodyId});
  },
  
  editMelody(id, melodyId, updatedMelody) {
    const tanda = this.getTanda(id);
    const melodies = tanda.melodies;
    const index = melodies.findIndex(melody => melody.id === melodyId);
    melodies[index].title = updatedMelody.title;
    melodies[index].artist = updatedMelody.artist;
    melodies[index].genre = updatedMelody.genre;
    melodies[index].duration = updatedMelody.duration;
  }
};

module.exports = tandaStore;