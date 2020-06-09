import React from 'react';

// reactstrap components
import {
  Alert,
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from 'reactstrap';
//Spinner while loading
import ClipLoader from 'react-spinners/ClipLoader';

// core components
import MainNavbar from 'components/Navbars/MainNavbar.js';
import MainFooter from 'components/Footers/MainFooter.js';

//Get the api endpoint
import api from 'env/env.js';

class Register extends React.Component {
  state = {
    firstname: '',
    lastname: '',
    phonenumber: '',
    email: '',
    username: '',
    password: '',
    successMessage: '',
    errorMessage: '',
    loading: false
  };

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  handleChange = (event) => {
    const value = event.target.value;
    this.setState({
      [event.target.name]: value
    });
    // console.log(event.target.name + ':' + value);
  };

  registerUser = () => {
    this.setState({ loading: true });
    if (
      this.state.firstname === '' ||
      this.state.lastname === '' ||
      this.state.phonenumber === '' ||
      this.state.email === '' ||
      this.state.username === '' ||
      this.state.password === ''
    ) {
      this.setState({ errorMessage: 'Fill in all the fields' });
      this.setState({ loading: false });
    } else {
      this.setState({ errorMessage: '' });
      let data = {
        firstname: this.state.firstname.trim(),
        lastname: this.state.lastname.trim(),
        phonenumber: this.state.phonenumber.trim(),
        email: this.state.email.trim(),
        username: this.state.username.trim(),
        password: this.state.password.trim()
      };
      console.log('data----', data);
      api
        .post('register', data)
        .then((res) => {
          console.log(res);
          const resMessage = res.data.message;

          console.log('resMessage-----', resMessage);

          if (res.status === 200) {
            this.setState({
              firstname: '',
              lastname: '',
              phonenumber: '',
              email: '',
              username: '',
              password: '',
              errorMessage: ''
            });
            this.setState({ loading: false });
            console.log('Success:', resMessage);
            this.setState({ successMessage: resMessage });
            // direct user to Dashboard
            setTimeout(() => {
              this.goDash();
            }, 3000);
          } else if (res.status === 400) {
            console.log('SOMETHING WENT WRONG:', resMessage);
            this.setState({ loading: false, errorMessage: resMessage });
          } else {
            this.setState({ loading: false });
            this.setState({ errorMessage: resMessage });
          }
        })
        .catch((e) => {
          console.log(e);
          this.setState({ loading: false, errorMessage: 'Server Error' });
        });
    }
  };

  goDash = () => {
    this.props.history.push('/profile-page');
  };

  render() {
    const { firstname, lastname, phonenumber, email, username, password, errorMessage, successMessage } = this.state;
    return (
      <>
        <MainNavbar />
        <main ref="main">
          <section className="section section-shaped section-lg bg-gradient-success">
            <Container className="pt-lg-3">
              <Row className="justify-content-center">
                <Col lg="5">
                  <Card className="bg-secondary shadow border-0">
                    <CardHeader className="bg-white pb-5">
                      <div className="text-muted text-center mb-3">
                        <small>Sign up with</small>
                      </div>
                      <div className="text-center">
                        <Button
                          className="btn-neutral btn-icon mr-4"
                          color="default"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <span className="btn-inner--icon mr-1">
                            <img alt="..." src={require('assets/img/icons/common/facebook.svg')} />
                          </span>
                          <span className="btn-inner--text">Facebook</span>
                        </Button>
                        <Button
                          className="btn-neutral btn-icon ml-1"
                          color="default"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <span className="btn-inner--icon mr-1">
                            <img alt="..." src={require('assets/img/icons/common/google.svg')} />
                          </span>
                          <span className="btn-inner--text">Google</span>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-5">
                      {errorMessage !== '' ? <Alert color="danger">{errorMessage}</Alert> : null}
                      {successMessage !== '' ? <Alert color="success">{successMessage}</Alert> : null}
                      <div className="text-center text-muted mb-4">
                        <small>Or sign up with credentials</small>
                      </div>
                      {/* the spinner div */}
                      <div style={{ marginLeft: 130 }}>
                        <ClipLoader size={80} color={'#123abc'} loading={this.state.loading} />
                      </div>
                      <Form role="form">
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-fat-add" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              name="firstname"
                              placeholder="First Name"
                              type="text"
                              value={firstname}
                              onChange={this.handleChange}
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-fat-delete" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              name="lastname"
                              placeholder="Last Name"
                              type="text"
                              value={lastname}
                              onChange={this.handleChange}
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-mobile-button" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              name="phonenumber"
                              placeholder="Phone Number"
                              type="text"
                              value={phonenumber}
                              onChange={this.handleChange}
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              name="email"
                              placeholder="Email"
                              type="email"
                              value={email}
                              onChange={this.handleChange}
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-circle-08" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              name="username"
                              placeholder="Username"
                              type="text"
                              value={username}
                              onChange={this.handleChange}
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-lock-circle-open" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              name="password"
                              placeholder="Password"
                              type="password"
                              autoComplete="off"
                              value={password}
                              onChange={this.handleChange}
                            />
                          </InputGroup>
                        </FormGroup>
                        {/* <div className="text-muted font-italic">
                          <small>
                            password strength: <span className="text-success font-weight-700">strong</span>
                          </small>
                        </div> */}
                        <Row className="my-4">
                          <Col xs="12">
                            <div className="custom-control custom-control-alternative custom-checkbox">
                              <input className="custom-control-input" id="customCheckRegister" type="checkbox" />
                              <label className="custom-control-label" htmlFor="customCheckRegister">
                                <span>
                                  I agree with the{' '}
                                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                    Privacy Policy
                                  </a>
                                </span>
                              </label>
                            </div>
                          </Col>
                        </Row>
                        <div className="text-center">
                          <Button className="mt-4" color="primary" type="button" onClick={this.registerUser}>
                            Create account
                          </Button>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <MainFooter />
      </>
    );
  }
}

export default Register;
