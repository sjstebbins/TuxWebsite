var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;
var ReactBootstrap = require('react-bootstrap'),
    Col = ReactBootstrap.Col,
    Row = ReactBootstrap.Row,
    Grid = ReactBootstrap.Grid;

var ContributeView = React.createClass({
  render: function () {
    return (
      <div>
        <div className="header"></div>
        <Grid>
          <Row>
            <Col className="contributeView" xs={12} md={12}>
              <h3>Contribute</h3>
              <p>You can either go to the Tuxedo.js github repo here:
                <a href="https://github.com/TuxedoJS/Tuxedo" target="_blank"> <i className="fa fa-github-square"></i></a><br/>
                or submit your github url for a component or mixin you may want us to consider adding to Tux</p>
              //COMMENT TO BE REMOVED
              //ADD SUBMIT FORM HERE WITH VALIDATING FORM COMPONENT
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
});

module.exports = ContributeView;

