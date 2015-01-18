'use strict';

var $ = require('jquery');
var EventEmitter = require("events").EventEmitter;
var DocumentConstants = require("../constants/DocumentConstants.js");
var AppDispatcher = require("../dispatcher/AppDispatcher.js");
var objectAssign = require("object-assign");

var CHANGE_EVENT = "CHANGE";

var DocumentStore = objectAssign({} , EventEmitter.prototype, {
  _docs: {},
  _sections: [],

  getAllDocs: function () {
    return this._sections;
  },

  getSingleDoc: function (section, doc) {
    if (doc) {
      return this._docs[section][doc];
    }
    else {
      return this._docs[section];
    }
  },

  getAll: function () {
    //Request all doc section names
    $.ajax({
      url: 'https://api.github.com/repos/TuxedoJS/TuxedoJS/contents/docs/ApiMenu.json',
      withCredentials: false,
      success: function (body) {
        this._sections = JSON.parse(window.atob(body.content)).data;
        this.emitChange();
      }.bind(this)
    });
  },

  getDoc: function (section, doc) {
    if (doc) {
      doc = '/'+doc;
    }
    else {
      doc = '';
    }
    $.ajax({
      url: 'https://api.github.com/repos/TuxedoJS/TuxedoJS/contents/docs/' + section + doc +'.md',
      withCredentials: false,
      success: function (body) {
        //Return content of the selected doc
        if (doc) {
          this._docs[section][doc] = window.atob(body.content);
        }
        else {
          this._docs[section] = window.atob(body.content);
        }
        this.emitChange();
      }.bind(this)
    });
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
    case DocumentConstants.DOCUMENT_GET_DOC:
      DocumentStore.getDoc(body.section, body.doc);
      break;
    default:
      return true;
  }
});

module.exports = DocumentStore;

