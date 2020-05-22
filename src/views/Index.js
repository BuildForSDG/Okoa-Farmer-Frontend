import React from 'react';

// reactstrap components
import { Container, Row } from 'reactstrap';

// core components
import MainNavbar from 'components/Navbars/MainNavbar.js';
import MainFooter from 'components/Footers/MainFooter.js';

// index page sections
import Hero from 'components/Body/Hero.js';
import ProductsList from 'components/Body/ProductsList.js';

class Index extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <MainNavbar />
        <main ref="main">
          <Hero />
          <ProductsList />
        </main>
        <MainFooter />
      </>
    );
  }
}

export default Index;
