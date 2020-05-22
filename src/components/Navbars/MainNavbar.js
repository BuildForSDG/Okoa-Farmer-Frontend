import React from 'react';
import { Link } from 'react-router-dom';
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from 'headroom.js';
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from 'reactstrap';

class MainNavbar extends React.Component {
  state = {
    collapseClasses: '',
    collapseOpen: false
  };

  componentDidMount() {}

  onExiting = () => {
    this.setState({
      collapseClasses: 'collapsing-out'
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: ''
    });
  };

  render() {
    return (
      <>
        <header className="header-global">
          <Navbar className="navbar-dark bg-primary" expand="lg">
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                {/* <img alt="..." src={require('assets/img/brand/argon-react-white.png')} /> */}
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">{/* <img alt="..." src={require('assets/img/brand/argon-react.png')} /> */}</Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Examples</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="/index-page" tag={Link}>
                        ExampleIndex
                      </DropdownItem>
                      <DropdownItem to="/landing-page" tag={Link}>
                        Landing
                      </DropdownItem>
                      <DropdownItem to="/profile-page" tag={Link}>
                        Profile
                      </DropdownItem>
                      <DropdownItem to="/login-page" tag={Link}>
                        Login
                      </DropdownItem>
                      <DropdownItem to="/register-page" tag={Link}>
                        Register
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                    <NavLink href="/login-page">
                      {/* <i className="fa fa-facebook-square" /> */}
                      <span className="nav-link-inner--text">Log In</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/register-page">
                      {/* <i className="fa fa-facebook-square" /> */}
                      <span className="nav-link-inner--text">Register</span>
                    </NavLink>
                  </NavItem>
                </Nav>
                <NavItem className="d-none d-lg-block ml-lg-4">
                  <Button className="btn-icon" color="warning" href="#">
                    <span className="btn-inner--icon">
                      <i className="fa fa-shopping-cart mr-2" />
                    </span>
                    <span className="nav-link-inner--text ml-1">Lease</span>
                  </Button>
                </NavItem>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default MainNavbar;
