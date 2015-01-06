'use strict';

var DocumentConstants = require("../constants/DocumentConstants.js");
var AppDispatcher = require("../dispatcher/AppDispatcher.js");

var DocumentActions = {
  get: function () {
    AppDispatcher.handleViewAction({
      actionType: DocumentConstants.DOCUMENT_GET
    });
  }
};

module.exports = DocumentActions;

