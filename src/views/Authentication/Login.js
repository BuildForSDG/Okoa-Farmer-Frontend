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
//Get sweetalert to pop up on success
import swal from 'sweetalert';
//Spinner while loading
import ClipLoader from 'react-spinners/ClipLoader';

// core components
import MainNavbar from 'components/Navbars/MainNavbar.js';
import MainFooter from 'components/Footers/MainFooter.js';

//Get the api endpoint
import api from 'env/env.js';

class Login extends React.Component {
  state = {
    username: '',
    password: '',
    errorMessage: '',
    loading: false
  };

  componentDidMount() {
    if (localStorage.getItem('loggedin') === 'true') {
      this.goDash();
    }
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

  loginUser = () => {
    this.setState({ loading: true });
    if (this.state.username === '' || this.state.password === '') {
      this.setState({ errorMessage: 'Fill in all the fields' });
      this.setState({ loading: false });
    } else {
      this.setState({ errorMessage: '' });
      let data = {
        username: this.state.username.trim(),
        password: this.state.password.trim()
      };
      console.log('data----', data);
      api
        .post('login', data)
        .then((res) => {
          console.log(res);
          const [resMessage, resCode] = res.data;

          console.log('resMessage-----', resMessage);
          console.log('resCode-----', resCode);

          if (resCode === 200) {
            this.setState({
              username: '',
              password: '',
              errorMessage: ''
            });
            this.setState({ loading: false });
            console.log('Success:', resMessage);
            // save user data to localstorage (stringify the data)
            localStorage.setItem('loggedin', 'true');
            localStorage.setItem('userDetails', JSON.stringify(resMessage));
            // direct user to Dashboard
            this.showAlert();
          } else if (resCode === 404) {
            console.log('Not Found:', resMessage);
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

  showAlert = () => {
    swal({
      title: 'Congratulations',
      text: 'You have successfully logged in',
      icon: 'success',
      button: 'Ok'
    }).then((willDelete) => {
      if (willDelete) {
        this.goDash();
      } else {
      }
    });
  };

  render() {
    const { username, errorMessage } = this.state;
    return (
      <>
        <MainNavbar />
        <main ref="main">
          <section className="section section-shaped section-lg bg-gradient-success ">
            <Container className="pt-lg-3">
              <Row className="justify-content-center">
                <Col lg="5">
                  <Card className="bg-secondary shadow border-0">
                    <CardHeader className="bg-white pb-5">
                      <div className="text-muted text-center mb-3">
                        <small>Sign in with</small>
                      </div>
                      <div className="btn-wrapper text-center">
                        <Button
                          className="btn-neutral btn-icon"
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
                      <div className="text-center text-muted mb-4">
                        <small>Or sign in with credentials</small>
                      </div>
                      {/* the spinner div */}
                      <div style={{ marginLeft: 130 }}>
                        <ClipLoader size={80} color={'#123abc'} loading={this.state.loading} />
                      </div>
                      <Form role="form">
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              name="username"
                              placeholder="Username"
                              type="email"
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
                              onChange={this.handleChange}
                            />
                          </InputGroup>
                        </FormGroup>
                        <div className="custom-control custom-control-alternative custom-checkbox">
                          <input className="custom-control-input" id=" customCheckLogin" type="checkbox" />
                          <label className="custom-control-label" htmlFor=" customCheckLogin">
                            <span>Remember me</span>
                          </label>
                        </div>
                        <div className="text-center">
                          <Button className="my-4" color="primary" type="button" onClick={this.loginUser}>
                            Sign in
                          </Button>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                  <Row className="mt-3">
                    <Col xs="6">
                      <a className="text-light" href="#pablo" onClick={(e) => e.preventDefault()}>
                        <small>Forgot password?</small>
                      </a>
                    </Col>
                    <Col className="text-right" xs="6">
                      <a className="text-light" href="/register">
                        <small>Create new account</small>
                      </a>
                    </Col>
                  </Row>
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

export default Login;
