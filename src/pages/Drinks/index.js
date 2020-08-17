import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import classNames from 'classnames';

import SliderBox from '../../components/Slider';

import Parallax from '../../components/MITmaterialkitreact/Parallax';

import expcut from '../../assets/expcut.png';

import styles from '../../components/MITmaterialkitreact/defaultStyle';

const useStyles = makeStyles(styles);

function Drinks() {
  const classes = useStyles();
  return (
    <>
      <Parallax image={expcut} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <div style={{ overflow: 'hidden' }}>
            <SliderBox />
          </div>
        </div>
      </div>
    </>
  );
}

export default Drinks;
