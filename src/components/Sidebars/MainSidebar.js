import React from 'react';

// reactstrap components
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from 'reactstrap';

class MainSidebar extends React.Component {
  state = {};
  render() {
    return (
      <>
        <Navbar>
          <Container>
            <Nav vertical>
              {/* <NavItem>
                <NavLink href="#">
                  <i className="fa fa-facebook-square" />
                  <span className="nav-link-inner--text">Land</span>
                </NavLink>
              </NavItem> */}
              <Dropdown
                className="mb-3"
                direction="right"
                isOpen={this.state.btnDropright}
                toggle={() => {
                  this.setState({ btnDropright: !this.state.btnDropright });
                }}
              >
                <DropdownToggle caret>
                  <span className="mr-1">
                    <i className="fa fa-globe" />
                  </span>
                  <span>Land</span>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <Dropdown
                direction="right"
                isOpen={this.state.btnDropright1}
                toggle={() => {
                  this.setState({ btnDropright1: !this.state.btnDropright1 });
                }}
              >
                <DropdownToggle caret>
                  <span className="mr-1">
                    <i className="fa fa-wrench" />
                  </span>
                  <span>Equipment</span>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default MainSidebar;
