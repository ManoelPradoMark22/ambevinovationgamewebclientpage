import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import classNames from 'classnames';

import { Container } from './styles';

import Parallax from '../../components/MITmaterialkitreact/Parallax';

import capamainfechada from '../../assets/capamainfechada.png';

import styles from '../../components/MITmaterialkitreact/defaultStyle';

const useStyles = makeStyles(styles);

function Main() {
  const classes = useStyles();
  return (
    <>
      <Parallax image={capamainfechada} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <Container>
            <h1>MAIN</h1>
            <h1>MAIN</h1>
            <h1>MAIN</h1>
            <h1>MAIN</h1>
            <h1>MAIN</h1>
            <h1>MAIN</h1>
            <h1>MAIN</h1>
            <h1>MAIN</h1>
            <h1>MAIN</h1>
            <h1>MAIN</h1>
            <h1>MAIN</h1>
            <h1>MAIN</h1>
            <h1>MAIN</h1>
            <h1>MAIN</h1>
            <h1>MAIN</h1>
            <h1>MAIN</h1>
            <h1>MAIN</h1>
            <h1>MAIN</h1>
            <h1>MAIN</h1>
            <h1>MAIN</h1>
            <h1>MAIN</h1>
            <h1>MAIN</h1>
            <h1>MAIN</h1>
            <h1>MAIN</h1>
            <h1>MAIN</h1>
            <h1>MAIN</h1>
            <h1>MAIN</h1>
            <h1>MAIN</h1>
            <h1>MAIN</h1>
            <h1>MAIN</h1>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Main;
