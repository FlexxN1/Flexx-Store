import React from 'react';
import { Helmet } from 'react-helmet';
import Products from '../components/Products';
import initialState from '../initialState';

function Home() {
  return (
    <>
      <Helmet>
        <title>Flexx Store - Products</title>
      </Helmet>
      <Products products={initialState.products} />
    </>
  );
}

export default Home;
