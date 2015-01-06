var React = require('react');
var ReactBootstrap = require('react-bootstrap'),
    Col = ReactBootstrap.Col,
    Row = ReactBootstrap.Row,
    Grid = ReactBootstrap.Grid;

var DefaultWelcome = React.createClass({
  render: function () {
    return (
      <Grid>
        <Row className="show-grid">
          <Col className="intro" xs={8} xsoffset={2}>
            <img src="/client/assets/Tux-logo.png"></img>
            <h3> Tuxedo.js - React with organized style </h3>
          </Col>
        </Row>
      </Grid>
    );
  }
});

module.exports = DefaultWelcome;

