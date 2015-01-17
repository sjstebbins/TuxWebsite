var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;
var $ = require('jquery');
var ReactBootstrap = require('react-bootstrap'),
    Navbar = ReactBootstrap.Navbar,
    Nav = ReactBootstrap.Nav,
    NavItem = ReactBootstrap.NavItem,
    DropdownButton = ReactBootstrap.DropdownButton,
    MenuItem = ReactBootstrap.MenuItem;

var NavView = React.createClass({

  render: function () {
    $( document ).ready(function() {
      $(function() {
        // grab the initial top offset of the navigation
        var sticky_navigation_offset_top = 200;

        // our function that decides weather the navigation bar should have "fixed" css position or not.
        var sticky_navigation = function(){
          var scroll_top = $(window).scrollTop(); // our current vertical position from the top

          // if we've scrolled more than the navigation, change its position to fixed to stick to top, otherwise change it back to relative
          if (scroll_top > sticky_navigation_offset_top) {
            $('.nav-bar').css({ height: '6em'});
            $(".logo").slideUp();
            $(".logo-icon").slideDown();
          } else {
            $(".logo").slideDown();
            $('.nav-bar').css({ height: '8em'});
            $(".logo-icon").slideDown();
          };
        }
        // run our function on load
        sticky_navigation();

        // and run it again every time you scroll
        $(window).scroll(function() {
         sticky_navigation();
        });

        // NOT required:
        // for this demo disable all links that point to "#"
        $('a[href="#"]').click(function(event){
          event.preventDefault();
        });

        // scroller
        if (scroll_top > 200) {
          $(".scroller").show();
          $(".scroller").fadeIn();
        } else {
          $(".scroller").fadeOut();
          $(".scroller").hide();
        }
        //links scroll
        // $('a').click(function())
      });
    });

    return (
      <div>
         <Navbar className="nav-bar">
          <Nav>
            <NavItem className="link">
              <Link to="home">
                <img className='logo' src="/client/assets/Tux-logo.png"></img>
              </Link>
            </NavItem>
            <NavItem className="link">
              <Link to="home">Home</Link>
            </NavItem>
            <DropdownButton title="Learn">
              <MenuItem>Tutorial</MenuItem>
              <MenuItem>FAQ</MenuItem>
              <MenuItem>Examples</MenuItem>
              <MenuItem divider />
              <MenuItem>ChatApp</MenuItem>
            </DropdownButton>
            <NavItem className="link">
              <Link to="docs">Documentation</Link>
            </NavItem>
            <NavItem className="link">
              <Link to="the-team">The Team</Link>
            </NavItem>
            <NavItem className="link">
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

