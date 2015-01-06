var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var SectionView = React.createClass({

  render: function (){
    return (
      <RouteHandler />
    )
  }
})

module.exports = SectionView;

