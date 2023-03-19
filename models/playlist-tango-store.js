'use strict';

const _ = require('lodash');
const JsonTangoStore = require('./json-tango-store');

const tangoPlaylistStore = {

  store: new JsonTangoStore('./models/playlist-tango-store.json', { tangoPlaylistCollection: [] }),
  collection: 'tangoPlaylistCollection',

  getAllTangoPlaylists() {
    return this.store.findRkAll(this.collection);
  },

  getTangoPlaylist(id) {
    return this.store.findOneRkBy(this.collection, { id: id });
  },

  addTangoPlaylist(tangoPlaylist) {
    this.store.addRk(this.collection, tangoPlaylist);
  },

  removeTangoPlaylist(id) {
    const tangoPlaylist = this.getTangoPlaylist(id);
    this.store.removeRk(this.collection, tangoPlaylist);
  },

  removeAllTangoPlaylists() {
    this.store.removeRkAll(this.collection);
  },

  addMelody(id, melody) {
    const tangoPlaylist = this.getTangoPlaylist(id);
    tangoPlaylist.melodies.push(melody);
  },

  removeMelody(id, melodyId) {
    const tangoPlaylist = this.getTangoPlaylist(id);
    const melodies = tangoPlaylist.melodies;
    _.remove(melodies, { id: melodyId});
  },
  
  editMelody(id, melodyId, updatedMelody) {
    const tangoPlaylist = this.getTangoPlaylist(id);
    const melodies = tangoPlaylist.melodies;
    const index = melodies.findIndex(melody => melody.id === melodyId);
    melodies[index].title = updatedMelody.title;
    melodies[index].artist = updatedMelody.artist;
    melodies[index].genre = updatedMelody.genre;
    melodies[index].duration = updatedMelody.duration;
  }
};

module.exports = tangoPlaylistStore;