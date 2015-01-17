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
          <h3>The Team</h3>
          <Row className="the-team">
            <Col md={3} xsoffset={2}>
              <a href="https://github.com/sjstebbins"><img className="team-profiles" src="https://avatars2.githubusercontent.com/u/455819?v=3&s=460" /></a>
            </Col>
            <Col md={3} xsoffset={2}>
              <a href="https://github.com/drabinowitz"><img className="team-profiles" src="https://avatars0.githubusercontent.com/u/7275304?v=3&s=400" /></a>
            </Col>
            <Col md={3} xsoffset={2}>
              <a href="https://github.com/plauer"><img className="team-profiles" src="https://avatars0.githubusercontent.com/u/4451274?v=3&s=400" /></a>
            </Col>
            <Col md={3} xsoffset={2}>
              <a href="https://github.com/Cheerazar"><img className="team-profiles" src="https://avatars2.githubusercontent.com/u/5581107?v=3&s=400" /></a>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
});

module.exports = ContributeView;
