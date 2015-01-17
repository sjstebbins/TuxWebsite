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
            <Col xs={12} md={12}>
              <h3>The Team</h3>





            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
});

module.exports = ContributeView;
