import React, { useState } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { makeStyles } from '@material-ui/core/styles';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';

import EcoIcon from '@material-ui/icons/Eco';
import Close from '@material-ui/icons/Close';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

import GridContainer from '../MITmaterialkitreact/Grid/GridContainer';
import GridItem from '../MITmaterialkitreact/Grid/GridItem';

import list from '../../data';

import logoZe from '../../assets/logoze.png';
import logoec from '../../assets/logoec.jpg';

import styles, {
  Container,
  CategoryBoxFeat,
  Product,
  BoxImage,
  ButtonOpenDrinkDetails,
  InvisibleBox,
  Content,
  BoxImageDetails,
  DrinkName,
  DrinkDescription,
  SplitText,
  BoxStraw,
  StrawText,
  BoxPlacestoShop,
  TextBoxTooltip,
} from './styles';

import stylesCheckBox from './stylesCheckBox';

const useStyles = makeStyles(styles);
const useStylesCheckBox = makeStyles(stylesCheckBox);

const Transition = React.forwardRef((props, ref) => (
  <Slide direction="down" ref={ref} {...props} />
));

Transition.displayName = 'Transition';

export default function SliderBox() {
  const classes = useStyles();
  const classesCheckBox = useStylesCheckBox();

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [classicModalDetailsDrink, setClassicModalDetailsDrink] = useState(
    false
  );
  const [checked, setChecked] = useState(false);
  const [isTooltipStrawOpen, setIsTooltipStrawOpen] = useState(false);
  const [isTooltipPlacesToShopOpen, setIsTooltipPlacesToShopOpen] = useState(
    false
  );
  const [kitName, setKitName] = useState([]);
  const [kitDescription, setKitDescription] = useState([]);
  const [content, setContent] = useState([]);
  const [kitImg, setKitImg] = useState([]);

  function openModalDetailsDrink() {
    setClassicModalDetailsDrink(true);
    setChecked(false);
  }

  function closeModalDetailsDrink() {
    setClassicModalDetailsDrink(false);
    setIsTooltipStrawOpen(false);
    setIsTooltipPlacesToShopOpen(false);
  }

  return (
    <div>
      {list &&
        list.map((cat) => (
          <CategoryBoxFeat key={cat.categorie_id}>
            <h2>{cat.categorie_name}</h2>
            <Slider {...settings}>
              {cat.kits.map((kit) => (
                <div key={kit.product_id}>
                  <Product>
                    <ButtonOpenDrinkDetails
                      onClick={() => {
                        setKitName(kit.name);
                        setKitDescription(kit.description);
                        setContent(kit.content);
                        setKitImg(kit.image);
                        openModalDetailsDrink();
                      }}
                    >
                      <BoxImage>
                        <text>+ detalhes</text>
                        <img src={kit.image} alt="produto" />
                      </BoxImage>
                    </ButtonOpenDrinkDetails>
                    <h3>{kit.name}</h3>
                  </Product>
                </div>
              ))}
            </Slider>
          </CategoryBoxFeat>
        ))}

      {/* MODAL DRINK DETAILS */}
      <GridContainer>
        <GridItem xs={12} sm={12} md={6} lg={4}>
          <Dialog
            classes={{
              root: classes.center,
              paper: classes.modal,
            }}
            open={classicModalDetailsDrink}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => closeModalDetailsDrink()}
            aria-labelledby="classic-modal-slide-title"
            aria-describedby="classic-modal-slide-description"
          >
            <DialogTitle
              id="classic-modal-slide-title"
              disableTypography
              className={classes.modalHeader}
            >
              <IconButton
                className={classes.modalCloseButton}
                key="close"
                aria-label="Close"
                color="inherit"
                onClick={() => closeModalDetailsDrink()}
              >
                <Close className={classes.modalClose} />
              </IconButton>
              <h4 style={{ userSelect: 'none' }} className={classes.modalTitle}>
                Detalhes do Kit
              </h4>
            </DialogTitle>
            <DialogContent
              id="classic-modal-slide-description"
              className={classes.modalBody}
            >
              <Content>
                <BoxImageDetails>
                  <img src={kitImg} alt="produto" />
                </BoxImageDetails>

                <DrinkName>{kitName}</DrinkName>

                <DrinkDescription>{kitDescription}</DrinkDescription>
                <SplitText>Conteúdo do Kit</SplitText>
                <h3>{content}</h3>
                <BoxStraw>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked}
                        onClick={() => setChecked(!checked)}
                        checkedIcon={
                          <EcoIcon className={classesCheckBox.checkedIcon} />
                        }
                        icon={
                          <EcoIcon className={classesCheckBox.uncheckedIcon} />
                        }
                        classes={{
                          checked: classesCheckBox.checked,
                          root: classesCheckBox.checkRoot,
                        }}
                      />
                    }
                    label={
                      <StrawText checked={checked}>
                        Canudo reutilizável
                      </StrawText>
                    }
                  />
                  <Tooltip
                    onOpen={() => setIsTooltipStrawOpen(true)}
                    onClose={() => setIsTooltipStrawOpen(false)}
                    open={isTooltipStrawOpen}
                    interactive={isTooltipStrawOpen}
                    title={
                      <TextBoxTooltip>
                        <IconButton
                          className={classes.modalCloseButton}
                          key="close"
                          aria-label="Close"
                          color="inherit"
                          onClick={() => setIsTooltipStrawOpen(false)}
                        >
                          <Close className={classes.modalClose} />
                        </IconButton>
                        <span>
                          Por um mundo mais verde, não disponibilizamos canudos
                          no Kit. Marque a opção 'Canudo reutilizável' caso
                          também queira comprar o canudo.
                        </span>
                      </TextBoxTooltip>
                    }
                    placement="top-start"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <HelpOutlineIcon />
                  </Tooltip>
                </BoxStraw>

                <BoxPlacestoShop>
                  <text>Onde Comprar?</text>
                  <Tooltip
                    onOpen={() => setIsTooltipPlacesToShopOpen(true)}
                    onClose={() => setIsTooltipPlacesToShopOpen(false)}
                    open={isTooltipPlacesToShopOpen}
                    interactive={isTooltipPlacesToShopOpen}
                    title={
                      <TextBoxTooltip>
                        <IconButton
                          className={classes.modalCloseButton}
                          key="close"
                          aria-label="Close"
                          color="inherit"
                          onClick={() => setIsTooltipPlacesToShopOpen(false)}
                        >
                          <Close className={classes.modalClose} />
                        </IconButton>
                        <span>
                          Você será redirecionado para o site que escolher e
                          então poderá finalizar sua compra.
                        </span>
                      </TextBoxTooltip>
                    }
                    placement="top-start"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <HelpOutlineIcon />
                  </Tooltip>
                </BoxPlacestoShop>
                <div style={{ display: 'flex', marginBottom: '25px' }}>
                  <a
                    href="https://www.ze.delivery/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Zé Delivery"
                  >
                    <img
                      src={logoZe}
                      alt="ZeDeliveryLogo"
                      height={50}
                      width={50}
                    />
                  </a>
                  <a
                    href="https://www.emporiodacerveja.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Empório da Cerveja"
                  >
                    <img
                      src={logoec}
                      style={{ marginLeft: '25px', borderRadius: '50%' }}
                      alt="emporiologo"
                      height={50}
                      width={50}
                    />
                  </a>
                </div>
              </Content>
            </DialogContent>
          </Dialog>
        </GridItem>
      </GridContainer>
    </div>
  );
}
