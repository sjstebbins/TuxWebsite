'use strict';

var request = require('request');
var EventEmitter = require("events").EventEmitter;
var DocumentConstants = require("../constants/DocumentConstants.js");
var AppDispatcher = require("../dispatcher/AppDispatcher.js");
var objectAssign = require("object-assign");
var CHANGE_EVENT = "CHANGE";

var DocumentStore = objectAssign({}, EventEmitter.prototype, {
  _docs: {},

  getAllDocs: function () {
    return this._docs;
  },

  getSingleDoc: function (section, doc) {
    return this._docs[section][doc];
  },

  getAll: function () {
    //Request all doc section names
    request('https://api.github.com/repos/TuxedoJS/TuxedoJS/contents/docs/ApiMenu', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        //Set docs to reponse data
        this._docs = response.data;
        this.emitChange();
      }
    });
  },

  getDoc: function (section, doc) {
    this.doc = request('https://api.github.com/repos/TuxedoJS/TuxedoJS/contents/docs/' + section + '/' + doc, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        //Return content of the selected doc
        this._docs[section][doc] = response.data['content'];
        this.emitChange();
      }
    }.bind(this);
  },

  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

});//End store

AppDispatcher.register(function (payload) {
  var action = payload.action;
  var body = action.body;
  switch (action.actionType) {
    case DocumentConstants.DOCUMENT_GET:
      DocumentStore.getAll();
      break;
    default:
      return true;
  }
});

module.exports = DocumentStore;

