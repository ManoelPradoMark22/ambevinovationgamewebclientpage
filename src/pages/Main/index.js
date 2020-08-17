import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import classNames from 'classnames';

import InstagramIcon from '@material-ui/icons/Instagram';
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
            <h1>Você tem a chance de aparecer aqui!</h1>

            <InstagramIcon />

            <h4>Siga a gente no Instagram (@foradacaixa_ambev),</h4>
            <h4>
              poste uma foto sua com um dos nossos KitsDrinks e marque a gente!
            </h4>
            <h5>Estaremos de olho e postaremos as melhores aqui!</h5>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Main;
