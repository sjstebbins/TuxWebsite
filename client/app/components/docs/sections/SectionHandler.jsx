var React = require('react');
var RouteHandler = require('react-router').RouteHandler;

var SectionHandler = React.createClass({
  render: function () {
    return (
      <div>
        <RouteHandler />
      </div>
    )
  }
});

module.exports = SectionHandler;
