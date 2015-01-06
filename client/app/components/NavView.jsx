var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var ReactBootstrap = require('react-bootstrap'),
    Navbar = ReactBootstrap.Navbar,
    Nav = ReactBootstrap.Nav,
    NavItem = ReactBootstrap.NavItem,
    DropdownButton = ReactBootstrap.DropdownButton,
    MenuItem = ReactBootstrap.MenuItem;

var NavView = React.createClass({

  render: function () {
    return (
      <div>
         <Navbar>
          <Nav>
            <NavItem href="#"><img className='logo' src="/client/assets/Tux-logo.png"></img></NavItem>
            <NavItem href="#">Home</NavItem>
            <DropdownButton title="Learn">
              <MenuItem>Tutorial</MenuItem>
              <MenuItem>FAQ</MenuItem>
              <MenuItem>Examples</MenuItem>
              <MenuItem divider />
              <MenuItem>ChatApp</MenuItem>
            </DropdownButton>
            <DropdownButton title="Develop">
              <MenuItem>
                <Link to="api">API Documentation</Link>
              </MenuItem>
            </DropdownButton>
            <NavItem href="#" className="contribute">
              <Link to="contribute">Contribute</Link>
            </NavItem>
            <NavItem className="icons" href="https://github.com/TuxedoJS" target="_blank">
              <i className="fa fa-github-square"></i>
            </NavItem>
          </Nav>
        </Navbar>
        <RouteHandler />
      </div>
    );
  }
});

module.exports = NavView;

