import React from 'react';

import propTypes from 'prop-types';

import Header from '../../../components/MITmaterialkitreact/Header';
import HeaderLinks from '../../../components/MITmaterialkitreact/HeaderLinks';

import Footer from '../../../components/MITmaterialkitreact/Footer';

export default function DefaultLayout({ children }) {
  return (
    <div>
      <Header
        brand="Fora da Caixa"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: 'white',
        }}
      />
      {children}
      <Footer />
    </div>
  );
}

DefaultLayout.propTypes = {
  children: propTypes.element.isRequired,
};
