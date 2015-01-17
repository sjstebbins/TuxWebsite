var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;
var DocumentActions = require("../../actions/DocumentActions");
var DocumentStore = require('../../stores/DocumentStore');
var ReactBootstrap = require('react-bootstrap'),
    Col = ReactBootstrap.Col,
    Row = ReactBootstrap.Row,
    Grid = ReactBootstrap.Grid;
var Section = require('./sections/Section.jsx')

//Main ApiView component
var DocsView = React.createClass({
  getInitialState: function () {
    return {
      docs: DocumentStore.getAllDocs(),
      spinner: false
    };
  },
  listenerCallback: function () {
    this.setState({
      docs: DocumentStore.getAllDocs(),
      spinner: false
    });
  },
  componentDidMount: function () {
    DocumentStore.addChangeListener(this.listenerCallback);
    DocumentActions.get();
    this.setState({spinner: true});
  },
  componentWillUnmount: function () {
    DocumentStore.removeChangeListener(this.listenerCallback);
  },
  render: function () {
    //Create api menu
    var docsMenu = [];
    var docs = this.state.docs;
    //Check if apiDocs exists
    if (docs) {
      var docsLength = docs.length
      //Iterate through sections
      for (var i = 0; i < docsLength; i++ ) {
        //Push in section link and sub doc links to api menu
        docsMenu.push(<Section section={docs[i]} />);
      }
    }
    var spinner;
    if (this.state.spinner){
      spinner = <img src="/client/assets/bowtie.gif" />;
    }
    return (
      <div>
      <div className="header"></div>
      <Grid>
        <Row>
          <Col className='docs-menu' xs={3} md={2}>
            {spinner}
            {docsMenu}
          </Col>
          <Col xs={12} md={8} className="docs">
            <RouteHandler />
          </Col>
        </Row>
        <div><i href="#" className="fa fa-angle-double-up scroller"></i></div>
      </Grid>
      </div>
    );
  }//End render
});//End of DocsView Component

module.exports = DocsView;

