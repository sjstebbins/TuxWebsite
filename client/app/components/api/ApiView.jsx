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
var Section = require('./Section.jsx')

//Main ApiView component
var ApiView = React.createClass({
  getInitialState: function () {
    return {
      apiDocs: DocumentStore.getAllDocs()
    };
  },
  listenerCallback: function () {
    this.setState({
      apiDocs: DocumentStore.getAllDocs()
    });
  },
  componentDidMount: function () {
    DocumentStore.addChangeListener(this.listenerCallback);
    DocumentActions.get();
  },
  componentWillUnmount: function () {
    DocumentStore.removeChangeListener(this.listenerCallback);
  },
  render: function () {
    //Create api menu
    var apiMenu = [];
    //Iterate through sections
    for (var section in this.state.apiDocs) {
      //Push in section link and sub doc links to api menu
      apiMenu.push(<Section section={section} />);
    }
    return (
      <Grid>
        <Row>
          <Col xs={6} md={4}>
            {apiMenu}
          </Col>
          <Col xs={12} md={8} className="api-doc">
            <RouteHandler />
          </Col>
        </Row>
      </Grid>
    );
  }//End render
});//End of ApiView Component

module.exports = ApiView;

