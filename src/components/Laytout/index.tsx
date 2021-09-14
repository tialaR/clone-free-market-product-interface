import React from 'react';
import Product from '../Product';
import Header from '../Header';
import Footer from '../Footer';

import './layout.scss';

const Layout: React.FC = () => {
  return(
    <div className="layoutContainer">
      <Header />
      <div className="wrapper">
        <Product />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
