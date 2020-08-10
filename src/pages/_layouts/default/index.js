import React from 'react';

import classNames from 'classnames';

import { makeStyles } from '@material-ui/core/styles';

import propTypes from 'prop-types';

import Header from '../../../components/Header';
import HeaderLinks from '../../../components/HeaderLinks';

import Parallax from '../../../components/Parallax';

import Footer from '../../../components/Footer';

import capa from '../../../assets/sand.jpg';

import styles from './styles';

const useStyles = makeStyles(styles);

export default function DefaultLayout({ children }) {
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="KitDrinks"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: 'white',
        }}
      />
      <Parallax image={capa} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>{children}</div>
      </div>
      <Footer />
    </div>
  );
}

DefaultLayout.propTypes = {
  children: propTypes.element.isRequired,
};
