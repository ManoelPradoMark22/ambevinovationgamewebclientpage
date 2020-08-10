import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slide from '@material-ui/core/Slide';

import drink1 from '../../assets/drink1.jpg';
import drink2 from '../../assets/drink2.jpg';
import drink3 from '../../assets/drink3.jpg';

import {
  Container,
  CategoryBoxFeat,
  Product,
  BoxImage,
  InvisibleBox,
} from './styles';

const Transition = React.forwardRef((props, ref) => (
  <Slide direction="down" ref={ref} {...props} />
));

Transition.displayName = 'Transition';

export default function SliderBox() {
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

  return (
    <Container>
      <CategoryBoxFeat>
        <h2>Verão</h2>
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
  );
}
