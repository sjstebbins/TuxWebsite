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

        // our function that decides weather the navigation bar should have "fixed" css position or not.
        var sticky_navigation = function(){
          // grab the initial top offset of the navigation
          var sticky_navigation_offset_top = 200;
          var scroll_top = $(window).scrollTop();
          // if we've scrolled more than the navigation, change its position to fixed to stick to top, otherwise change it back to relative
          if (scroll_top > sticky_navigation_offset_top) {
            $('.nav-bar').css({ height: '4em'});
            $(".logo").slideUp();
            $(".icon").show();
            $(".icon").slideDown();
            $('.docs-menu').animate('margin-top','-2em');
          } else {
            $(".logo").slideDown();
            $('.nav-bar').css({ height: '8em'});
            $(".icon").slideDown();
            $(".icon").hide();
            $('.docs-menu').animate('margin-top','0em');
          };
        }
        // run our function on load
        sticky_navigation();

        var scroller = function () {
          var scroll_top = $(window).scrollTop();
          // scroller
          if (scroll_top > 200) {
            $(".scroller").css('visibility', 'visible');
            $(".scroller").fadeIn();
          } else {
            $(".scroller").fadeOut();
          }
        }

        scroller();
        // and run it again every time you scroll
        $(window).scroll(function() {
          sticky_navigation();
          scroller();

        });
        //smooth scroll links
        // $('a[href^="#"]').on('click',function (e) {
        //     e.preventDefault();

        //     var target = this.hash;
        //     var $target = $(target);

        //     $('html, body').stop().animate({
        //         'scrollTop': $target.offset().top
        //     }, 900, 'swing', function () {
        //         window.location.hash = target;
        //     });
        // });

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
              <Link to="home">
                <img className='icon' src="/client/assets/Tux-icon.png"></img>
              </Link>
            </NavItem>
            <NavItem className="link">
              <Link to="home">Home</Link>
            </NavItem>
            <DropdownButton className="learn" title="Learn">
              <MenuItem>
                <Link to="getting-started">Getting Started</Link>
              </MenuItem>
              <MenuItem>FAQ</MenuItem>
              <MenuItem divider />
              <MenuItem>Example ChatApp</MenuItem>
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

