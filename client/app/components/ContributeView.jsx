var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;
var DocumentActions = require('../actions/DocumentActions');
var DocumentStore = require('../stores/DocumentStore');
var ReactBootstrap = require('react-bootstrap'),
    Col = ReactBootstrap.Col,
    Row = ReactBootstrap.Row,
    Grid = ReactBootstrap.Grid;

var ContributeView = React.createClass({
  getInitialState: function () {
    return {
      contributing: DocumentStore.getAllDocs(),
      spinner: false
    };
  },
  listenerCallback: function () {
    this.setState({
      contributing: DocumentStore.getSingleDoc('Contributing'),
      spinner: false
    });
  },
  componentDidMount: function () {
    DocumentStore.addChangeListener(this.listenerCallback);
    DocumentActions.getDoc('Contributing');
    this.setState({spinner: true});
  },
  componentWillUnmount: function () {
    DocumentStore.removeChangeListener(this.listenerCallback);
  },
  componentWillReceiveProps: function () {
    DocumentActions.getDoc('Contributing');
  },
  render: function () {
    var spinner;
    if (this.state.spinner) {
      spinner = <img className="spinner3" src="/client/assets/bowtie.gif" />;
    }
    return (
      <div>
        <div className="header"></div>
        <Grid>
          <Row>
            <Col className="contributeView" xs={12} md={12}>
              <h3>Contribute</h3>
              <p>You can either go to the Tuxedo.js github repo here:
                <a href="https://github.com/TuxedoJS/Tuxedo" target="_blank"> <i className="fa fa-github-square"></i></a>
              </p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
});

module.exports = ContributeView;

