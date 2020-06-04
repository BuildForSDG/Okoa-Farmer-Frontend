import React from 'react';

// reactstrap components
import {
  Card,
  CardImg,
  CardBody, //CardTitle,
  CardSubtitle,
  CardText,
  Container,
  Row,
  Col
} from 'reactstrap';
//get the main sidebar in the products listing
import MainSidebar from 'components/Sidebars/MainSidebar.js';

class ProductsList extends React.Component {
  render() {
    return (
      <>
        <section className="section">
          <Container>
            <Row>
              <Col lg="3" md="3">
                <MainSidebar />
              </Col>
              <Col lg="9" md="9" sm="12">
                <Row className="justify-content-center text-center">
                  <h5 className="text-muted text">Trending Ads</h5>
                </Row>
                <Row>
                  <Col className="mb-3" lg="4" md="6" sm="6">
                    <div>
                      <Card>
                        <CardImg
                          top
                          width="100%"
                          src={require('assets/img/theme/team-1-800x800.jpg')}
                          alt="Card image cap"
                        />
                        <CardBody>
                          {/* <CardTitle>Tractor</CardTitle> */}
                          <CardSubtitle>Tractor</CardSubtitle>
                          <CardText className="text-success">Ksh 10,000/day</CardText>
                        </CardBody>
                      </Card>
                    </div>
                  </Col>
                  <Col className="mb-3" lg="4" md="6" sm="6">
                    <div>
                      <Card>
                        <CardImg
                          top
                          width="100%"
                          src={require('assets/img/theme/team-2-800x800.jpg')}
                          alt="Card image cap"
                        />
                        <CardBody>
                          {/* <CardTitle>Tractor</CardTitle> */}
                          <CardSubtitle>Combine</CardSubtitle>
                          <CardText className="text-success">Ksh 10,000/day</CardText>
                        </CardBody>
                      </Card>
                    </div>
                  </Col>
                  <Col className="mb-3" lg="4" md="6" sm="6">
                    <div>
                      <Card>
                        <CardImg
                          top
                          width="100%"
                          src={require('assets/img/theme/team-3-800x800.jpg')}
                          alt="Card image cap"
                        />
                        <CardBody>
                          {/* <CardTitle>Tractor</CardTitle> */}
                          <CardSubtitle>Tractor</CardSubtitle>
                          <CardText className="text-success">Ksh 10,000/day</CardText>
                        </CardBody>
                      </Card>
                    </div>
                  </Col>
                  <Col className="mb-3" lg="4" md="6" sm="6">
                    <div>
                      <Card>
                        <CardImg
                          top
                          width="100%"
                          src={require('assets/img/theme/team-4-800x800.jpg')}
                          alt="Card image cap"
                        />
                        <CardBody>
                          {/* <CardTitle>Tractor</CardTitle> */}
                          <CardSubtitle>1 Acre</CardSubtitle>
                          <CardText className="text-success">Ksh 10,000/day</CardText>
                        </CardBody>
                      </Card>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default ProductsList;
