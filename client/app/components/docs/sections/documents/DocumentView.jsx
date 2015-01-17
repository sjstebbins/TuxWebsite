var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;
var Markdown = require('react-remarkable');

var DocumentView = React.createClass({
  mixins: [ Router.State ],

  getInitialState: function () {
    return {
      documentToRender: null
    };
  },

  getDocumentsFromStore: function () {
    var section = this.getParams().section;
    var document = this.getParams().document;
    //fetchDocument FUNCTION:
      //@param data OBJECT:
      //@param callback FUNCTION:
    var fetchDocument = function (data, callback) {
      if (data.section === "components"){
        if (data.document === "form"){
          callback("Hello World -FORM");
        }
        else if (data.document === "router"){
          callback("Hello World -router");
        };
      };
    }
    fetchDocument({
      section: section,
      document: document
    },function (documentToRender) {
      this.setState({documentToRender: documentToRender});
    }.bind(this));
  },

  componentWillReceiveProps: function() {
    this.getDocumentsFromStore();
  },

  componentDidMount: function() {
    this.getDocumentsFromStore();
  },

  render: function () {
    if (this.state.documentToRender) {
      var doc = (
        <Markdown>
          <div>{this.state.documentToRender}</div>
        </Markdown>
      );
    }
    return (
      <div>
        {doc}
      </div>
    );
  }
});

module.exports = DocumentView;

