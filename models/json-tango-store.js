'use strict';

const low = require('lowdb');
const fileAsync = require('lowdb/lib/file-async');

class JsonTangoStore {
  constructor(file, defaults) {
    this.db = low(file, { storage: fileAsync, });
    this.db.defaults(defaults).value();
  }

  addRk(collection, obj) {
    this.db.get(collection).push(obj).last().value();
  }

  removeRk(collection, obj) {
    this.db.get(collection).remove(obj).value();
  }

  removeRkAll(collection) {
    this.db.get(collection).remove().value();
  }

  findRkAll(collection) {
    return this.db.get(collection).value();
  }

  findOneRkBy(collection, filter) {
    const results = this.db.get(collection).filter(filter).value();
    return results[0];
  }

  findByIds(collection, ids) {
    return this.db.get(collection).keyBy('id').at(ids).value();
  }

  findBy(collection, filter) {
    return this.db.get(collection).filter(filter).value();
  }
}

module.exports = JsonTangoStore;