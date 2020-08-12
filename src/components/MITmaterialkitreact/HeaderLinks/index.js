/*!

 =========================================================
 * Material Kit React v1.8.0 based on Material Kit Free - v2.0.2 (Bootstrap 4.0.0 Final Edition)
 =========================================================

 * Product Page: https://www.creative-tim.com/product/material-kit-react
 * Copyright 2019 Creative Tim (https://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/material-kit-react/blob/master/LICENSE.md)

 * Coded by Creative Tim

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import { Apps, LocalBar } from '@material-ui/icons';

import CustomDropdown from '../CustomDropdown';
import Button from '../CustomButtons';

import styles, { Logo } from './styles';

const useStyles = makeStyles(styles);

export default function HeaderLinksDefault(props) {
  const classes = useStyles();

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonProps={{
            className: classes.navLink,
            color: 'transparent',
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              Início
            </Link>,
            // eslint-disable-next-line
            <a className={classes.dropdownLink} onClick={() => {}}>
              Política
            </a>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/Drinks" className={classes.moreLinks}>
          <Button
            href="https://www.ambev.com.br/"
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <Logo>
              <LocalBar />
              Drinks
            </Logo>
          </Button>
        </Link>
      </ListItem>
    </List>
  );
}
