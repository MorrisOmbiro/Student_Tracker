  
// --- Post bootstrap -----
import React from 'react';
import AppFooter from './modules/AppFooter';
import AppAppBar from './modules/MainNavbar';
import ProductHero from './modules/ProductHero';
import ProductHowItWorks from './modules/ProductHowItWorks';
import ProductSmokingHero from './modules/ProductSmokingHero';
import ProductValues from './modules/ProductValues';
import withRoot from './modules/withRoot';

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <ProductValues />
      
      <ProductHowItWorks />

      <ProductSmokingHero />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);