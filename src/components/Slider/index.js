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
import Close from '@material-ui/icons/Close';

import GridContainer from '../Grid/GridContainer';
import GridItem from '../Grid/GridItem';

import drink1 from '../../assets/drink1.jpg';
import drink2 from '../../assets/drink2.jpg';
import drink3 from '../../assets/drink3.jpg';
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
} from './styles';

const useStyles = makeStyles(styles);

const Transition = React.forwardRef((props, ref) => (
  <Slide direction="down" ref={ref} {...props} />
));

Transition.displayName = 'Transition';

export default function SliderBox() {
  const classes = useStyles();

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

  function stopVideo() {
    const frame = document.getElementById('player');
    frame.contentWindow.postMessage(
      '{"event":"command","func":"stopVideo","args":""}',
      '*'
    );
  }

  function openModalDetailsDrink() {
    setClassicModalDetailsDrink(true);
  }

  function closeModalDetailsDrink() {
    setClassicModalDetailsDrink(false);
    stopVideo();
  }

  return (
    <div>
      <Container>
        <CategoryBoxFeat>
          <h2>Verão</h2>
          <Slider {...settings}>
            <div>
              <Product>
                <ButtonOpenDrinkDetails onClick={() => openModalDetailsDrink()}>
                  <BoxImage>
                    <text>+ detalhes</text>
                    <img src={drink1} alt="produto" />
                  </BoxImage>
                </ButtonOpenDrinkDetails>
                <h3>Cranberry Tropical</h3>
              </Product>
            </div>
            <div>
              <Product>
                <BoxImage>
                  <img src={drink2} alt="produto" />
                </BoxImage>
                <h3>Bahama Mama</h3>
              </Product>
            </div>
            <div>
              <Product>
                <BoxImage>
                  <img src={drink3} alt="produto" />
                </BoxImage>
                <h3>Beachcomber</h3>
              </Product>
            </div>
            <div>
              <Product>
                <BoxImage>
                  <img src={drink2} alt="produto" />
                </BoxImage>
                <h3>Bahama Mama</h3>
              </Product>
            </div>
            <div>
              <Product>
                <BoxImage>
                  <img src={drink3} alt="produto" />
                </BoxImage>
                <h3>Beachcomber</h3>
              </Product>
            </div>
            <div>
              <Product>
                <BoxImage>
                  <img src={drink1} alt="produto" />
                </BoxImage>
                <h3>Cranberry Tropical</h3>
              </Product>
            </div>
          </Slider>
          <InvisibleBox />
        </CategoryBoxFeat>

        <CategoryBoxFeat>
          <h2>Inverno</h2>
          <Slider {...settings}>
            <div>
              <Product>
                <ButtonOpenDrinkDetails onClick={() => openModalDetailsDrink()}>
                  <BoxImage>
                    <img src={drink1} alt="produto" />
                  </BoxImage>
                </ButtonOpenDrinkDetails>
                <h3>Cranberry Tropical</h3>
              </Product>
            </div>
            <div>
              <Product>
                <BoxImage>
                  <img src={drink2} alt="produto" />
                </BoxImage>
                <h3>Bahama Mama</h3>
              </Product>
            </div>
            <div>
              <Product>
                <BoxImage>
                  <img src={drink3} alt="produto" />
                </BoxImage>
                <h3>Beachcomber</h3>
              </Product>
            </div>
            <div>
              <Product>
                <BoxImage>
                  <img src={drink2} alt="produto" />
                </BoxImage>
                <h3>Bahama Mama</h3>
              </Product>
            </div>
            <div>
              <Product>
                <BoxImage>
                  <img src={drink3} alt="produto" />
                </BoxImage>
                <h3>Beachcomber</h3>
              </Product>
            </div>
            <div>
              <Product>
                <BoxImage>
                  <img src={drink1} alt="produto" />
                </BoxImage>
                <h3>Cranberry Tropical</h3>
              </Product>
            </div>
          </Slider>
          <InvisibleBox />
        </CategoryBoxFeat>

        <CategoryBoxFeat>
          <h2>Party</h2>
          <Slider {...settings}>
            <div>
              <Product>
                <BoxImage>
                  <img src={drink1} alt="produto" />
                </BoxImage>
                <h3>Cranberry Tropical</h3>
              </Product>
            </div>
            <div>
              <Product>
                <BoxImage>
                  <img src={drink2} alt="produto" />
                </BoxImage>
                <h3>Bahama Mama</h3>
              </Product>
            </div>
            <div>
              <Product>
                <BoxImage>
                  <img src={drink3} alt="produto" />
                </BoxImage>
                <h3>Beachcomber</h3>
              </Product>
            </div>
          </Slider>
          <InvisibleBox />
        </CategoryBoxFeat>
      </Container>

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
                  <img src={drink1} alt="produto" />
                </BoxImageDetails>

                <DrinkName>Cranberry Tropical</DrinkName>

                <DrinkDescription>
                  Drink elaborado com Suco de Melância DO BEM, leite condensado,
                  limão...
                </DrinkDescription>
                <h3 style={{ marginBottom: '5px', marginTop: '15px' }}>
                  Conteúdo do Kit
                </h3>
                <ul>
                  <li>- 1L de Suco 'Do Bem' - Melancia</li>
                  <li>- Sachê de açúcar mascavo (50g)</li>
                  <li>- Etc etc etc</li>
                </ul>
                <h3 style={{ marginBottom: '5px', marginTop: '35px' }}>
                  Onde Comprar?
                </h3>
                <div style={{ display: 'flex' }}>
                  <img
                    src={logoZe}
                    alt="ZeDeliveryLogo"
                    height={50}
                    width={50}
                  />
                  <img
                    src={logoec}
                    style={{ marginLeft: '25px', borderRadius: '50%' }}
                    alt="EmCasaLogo"
                    height={50}
                    width={50}
                  />
                </div>
                {/* o que vai vir da api vai ser o link:
                https://www.youtube.com/embed/ID_DO_VÍDEO
                concatenado com esse sufixo:
                ?enablejsapi=1
                para permitir que meu código JavaScript consiga acessar esse iframe
                e PARAR O VÍDEO quando eu fechar este modal de detalhes do Drink!
                */}
                <h3 style={{ marginBottom: '5px', marginTop: '35px' }}>
                  Modo de preparo (assista ao vídeo):
                </h3>
                <iframe
                  id="player"
                  width="100%"
                  maxWidth="100%"
                  height="415"
                  src="https://www.youtube.com/embed/4KXsOm-qQRk?enablejsapi=1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </Content>
            </DialogContent>
          </Dialog>
        </GridItem>
      </GridContainer>
    </div>
  );
}
