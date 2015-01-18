var React = require('react');
var Router = require('react-router');
var ReactBootstrap = require('react-bootstrap'),
    Col = ReactBootstrap.Col,
    Row = ReactBootstrap.Row,
    Grid = ReactBootstrap.Grid;
var Markdown = require('react-remarkable');
var DocumentStore = require('../stores/DocumentStore');
var DocumentActions = require('../actions/DocumentActions');

var GettingStartedView = React.createClass({
  getInitialState: function () {
    return {
      gettingStarted: DocumentStore.getSingleDoc('GettingStarted'),
      spinner: false
    };
  },
  listenerCallback: function () {
    this.setState({
      gettingStarted: DocumentStore.getSingleDoc('GettingStarted'),
      spinner: false
    });
  },
  componentDidMount: function () {
    DocumentStore.addChangeListener(this.listenerCallback);
    DocumentActions.getDoc('GettingStarted');
    this.setState({spinner: true});
  },
  componentWillUnmount: function () {
    DocumentStore.removeChangeListener(this.listenerCallback);
  },
  componentWillReceiveProps: function () {
    DocumentActions.getDoc('GettingStarted');
  },
  render: function () {
    var spinner;
    if (this.state.spinner){
      spinner = <img className="spinner3" src="/client/assets/bowtie.gif" />;
    }
    return (
      <div>
        <Markdown options={{html: true}}>
          {spinner}
          {this.state.gettingStarted}
        </Markdown>
      </div>
    )
  }
})

module.exports = GettingStartedView;
