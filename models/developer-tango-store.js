'use strict';

const developerRkStore = {

  rk_Developers: require('./developer-tango-store.json').rk_Developers,

  getAllRkDevelopers() {
    return this.rk_Developers;
  },

};

module.exports = developerRkStore;