import React from 'react';
// nodejs library that concatenates classes
import classnames from 'classnames';
// reactstrap components
import { Button, Container, Row, Col, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';

class Hero extends React.Component {
  state = {};
  render() {
    return (
      <>
        <div className="position-relative">
          {/* Hero for FREE version */}
          <section className="section section-hero section-shaped bg-gradient-success">
            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" lg="6">
                    <p className="lead text-white">Search for what you'd like to lease.</p>
                    <div className="btn-wrapper mt-3">
                      <FormGroup
                        className={classnames({
                          focused: this.state.searchFocused
                        })}
                      >
                        <InputGroup className="mb-4">
                          <Input
                            placeholder="Search here..."
                            type="text"
                            onFocus={(e) => this.setState({ searchFocused: true })}
                            onBlur={(e) => this.setState({ searchFocused: false })}
                          />
                          <InputGroupAddon addonType="append">
                            <Button className="btn-icon" color="warning" href="#">
                              <span className="btn-inner--icon">
                                <i className="fa fa-search" />
                              </span>
                            </Button>
                          </InputGroupAddon>
                        </InputGroup>
                      </FormGroup>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </section>
        </div>
      </>
    );
  }
}

export default Hero;
