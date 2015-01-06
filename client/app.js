'use strict';

var React = require('react');
var NavView = require('./app/components/NavView.jsx');
var Router = require('react-router');
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;
var NotFound = require('./app/components/NotFound.jsx');
var ApiView = require('./app/components/api/ApiView.jsx');
var SectionView = require('./app/components/api/sections/SectionView.jsx');
var DocumentView = require('./app/components/api/sections/documents/DocumentView.jsx');
var ContributeView = require('./app/components/ContributeView.jsx');
var DefaultWelcome = require('./app/components/DefaultWelcome.jsx');

var routes = (

  <Route name="app" path="/" handler={NavView}>

    <DefaultRoute handler={DefaultWelcome} />

    <NotFoundRoute handler={NotFound} />

    <Route name="api" path="/api" handler={ApiView}>
      <Route name="api.section" path="/api/:section" handler={SectionView}>
        <Route name="api.section.document" path="/api/:section/:document" handler={DocumentView} />
      </Route>
    </Route>

    <Route name="contribute" path="/contribute" handler={ContributeView} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler />, document.getElementById("main"));
});

