/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from 'react';
// reactstrap components
import { Button, Navbar, NavItem, NavLink, Nav, Container, Row, Col, UncontrolledTooltip } from 'reactstrap';

class MainFooter extends React.Component {
  render() {
    return (
      <>
        <footer className="bg-primary">
          <Container>
            <Row className=" text-white align-items-start justify-content-md-between">
              <Col md="4">
                <div className="navbar-dark p-4">
                  <p className="text-muted">
                    <strong>About Us</strong>
                  </p>
                  <Nav className=" flex-column navbar-nav">
                    <NavItem>
                      <NavLink href="#" target="_blank">
                        About Okoa Farmer
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#" target="_blank">
                        Our Team
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#" target="_blank">
                        Terms and Conditions
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#" target="_blank">
                        Privacy Policy
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </Col>
              <Col md="4">
                <div className="navbar-dark p-4">
                  <p className="text-muted">
                    <strong>How to</strong>
                  </p>
                  <Nav className=" flex-column navbar-nav">
                    <NavItem>
                      <NavLink href="#" target="_blank">
                        How to Sell
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#" target="_blank">
                        How to Leese
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#" target="_blank">
                        License Agreement
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </Col>
              <Col md="4">
                <div className="navbar-dark p-4">
                  <p className="text-muted">
                    <strong>Contact Us</strong>
                  </p>
                  <Nav className=" flex-column navbar-nav">
                    <NavItem>
                      <NavLink href="#" target="_blank">
                        FAQ
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#" target="_blank">
                        Contact Form
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#" target="_blank">
                        0712*****
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#" target="_blank">
                        support@okoafarmer.com
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </Col>
            </Row>
            <Row className=" text-neutral text-center">
              <Col className="justify-content-end ">
                <div>
                  © {new Date().getFullYear()} {/* <a href="#" target="_blank"> */}
                  Okoa Farmer
                  {/* </a> */}.
                </div>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default MainFooter;
