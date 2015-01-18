'use strict';

var React = require('react');
var NavView = require('./app/components/NavView.jsx');
var Router = require('react-router');
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var DefaultWelcome = require('./app/components/DefaultWelcome.jsx');
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;
var NotFound = require('./app/components/NotFound.jsx');
var GettingStartedView = require('./app/components/GettingStartedView.jsx');
var DocsView = require('./app/components/docs/DocsView.jsx');
var SectionView = require('./app/components/docs/sections/SectionView.jsx');
var SectionHandler = require('./app/components/docs/sections/SectionHandler.jsx');
var DocumentView = require('./app/components/docs/sections/documents/DocumentView.jsx');
var TheTeamView = require('./app/components/TheTeamView.jsx');
var ContributeView = require('./app/components/ContributeView.jsx');

var routes = (
  <Route name="home" path="/" handler={NavView}>
    <DefaultRoute handler={DefaultWelcome} />
    <Route name="docs" path="/docs" handler={DocsView}>
      <Route name="docs.section" path="/docs/:section" handler={SectionHandler}>
        <DefaultRoute handler={SectionView} />
        <Route name="docs.section.document" path="/docs/:section/:document" handler={DocumentView} />
      </Route>
    </Route>
    <Route name="getting-started" path="/getting-started" handler={GettingStartedView} />
    <Route name="the-team" path="/the-team" handler={TheTeamView} />
    <Route name="contribute" path="/contribute" handler={ContributeView} />
    <NotFoundRoute handler={NotFound} />
  </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler />, document.getElementById("main"));
});
