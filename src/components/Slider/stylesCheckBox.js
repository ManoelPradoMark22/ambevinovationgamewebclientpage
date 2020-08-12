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
import { container, title } from '../MITmaterialkitreact/material-kit-react';
import customCheckboxRadioSwitch from '../MITmaterialkitreact/customCheckboxRadioSwitch';

const stylesCheckBox = {
  sections: {
    padding: '70px 0',
  },
  container,
  title: {
    ...title,
    marginTop: '30px',
    minHeight: '32px',
    textDecoration: 'none',
  },
  space50: {
    height: '50px',
    display: 'block',
  },
  space70: {
    height: '70px',
    display: 'block',
  },
  icons: {
    width: '17px',
    height: '17px',
    color: '#FFFFFF',
  },
  ...customCheckboxRadioSwitch,
};

export default stylesCheckBox;
