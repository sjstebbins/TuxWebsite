var React = require('react');
var ReactBootstrap = require('react-bootstrap'),
    Col = ReactBootstrap.Col,
    Row = ReactBootstrap.Row,
    Grid = ReactBootstrap.Grid;
    Button = ReactBootstrap.Button;

var DefaultWelcome = React.createClass({
  render: function () {
    return (
      <div className="welcome">
        <div className="header"></div>
        <Grid>
          <Row className="show-grid">
            <Col className="intro" xs={8} xsoffset={2}>
              <img className="tuxedo" src="/client/assets/tuxedojs.png" />
              <h3> React with more bowties </h3>
              <Button bsSize="large">
                <i href="https://github.com/TuxedoJS" className="fa fa-github-square"> View on Github</i>
              </Button>
              <Button bsSize="large">
                <i className="fa fa-cloud-download"> Download</i>
              </Button>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
});

module.exports = DefaultWelcome;

