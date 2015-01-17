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
          <Row className="show-grid section1">
            <Col className="intro" xs={12} xsoffset={2}>
              <img className="tuxedo" src="/client/assets/tuxedojs.png" />
              <h3>It is like React, but with more bowties</h3>
              <div className="item-container"><img className="bowtie" src="/client/assets/Tux-icon.png" /></div>
              <div className="item-container"><img className="dot1 dots" src="/client/assets/dot.png" /></div>
              <div className="item-container"><img className="dot2 dots" src="/client/assets/dot.png" /></div>
              <Button bsSize="large" href="https://github.com/TuxedoJS/TuxedoJS">
                <i className="fa fa-github-square"> View on Github</i>
              </Button>
              <Button bsSize="large">
                <i className="fa fa-cloud-download"> Download</i>
              </Button>
            </Col>
            <Row className="show-grid section2">
              <Col className="react-flux" md={3} xsoffset={2}>
                <h1>React and Flux</h1>
                <p>Drawbacks</p>
              </Col>
              <Col className="why-tux" md={3} xsoffset={2}>
                <h1>Why Tuxedo.js</h1>
                <p>Because Tuxedo.js is awesome. Features</p>
              </Col>
              <Col className="degradation" md={3} xsoffset={2}>
                <h1>Require what you need</h1>
                <p>Graceful Degradation</p>
              </Col>
            </Row>
            <Row className="show-grid section3">
              <Col xs={12} xsoffset={2}>
              </Col>
            </Row>
          </Row>
        </Grid>
      </div>
    );
  }
});

module.exports = DefaultWelcome;

