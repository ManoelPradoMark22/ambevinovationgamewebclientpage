import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import classNames from 'classnames';

import InstagramIcon from '@material-ui/icons/Instagram';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import postList from '../../dataPost';

import {
  Container,
  Post,
  MessageText,
  SocialText,
  TextIconBox,
  CategoryBoxFeat,
  Product,
  ImgAndIcons,
  BoxImage,
} from './styles';

import Parallax from '../../components/MITmaterialkitreact/Parallax';

import capamainfechada from '../../assets/capamainfechada.png';
import cel from '../../assets/cel.png';

import styles from '../../components/MITmaterialkitreact/defaultStyle';

const useStyles = makeStyles(styles);

function Main() {
  const classes = useStyles();
  return (
    <>
      <Parallax image={capamainfechada} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <Container style={{ overflow: 'hidden' }}>
            <h1>Você tem a chance de aparecer aqui!</h1>

            <InstagramIcon />

            <MessageText>
              <h4>
                Siga a gente no Instagram (@foradacaixa_ambev), poste uma foto
                sua com um dos nossos KitDrinks!
              </h4>
              <h5>Coloque a localização e marque a gente!</h5>
              <h5>Estaremos de olho e postaremos as melhores aqui!</h5>
            </MessageText>

            <img
              src={cel}
              alt="avatar"
              width={190}
              height={235}
              style={{ marginBottom: '100px' }}
            />

            {postList &&
              postList.map((post) => (
                <CategoryBoxFeat key={post.post_id}>
                  <Product>
                    <ImgAndIcons>
                      <TextIconBox>
                        <LocationOnIcon />
                        <text>{post.local}</text>
                      </TextIconBox>
                      <BoxImage>
                        <img src={post.image} alt="produto" />
                      </BoxImage>
                    </ImgAndIcons>
                    <SocialText>
                      <h3>{post.insta}</h3>
                      <h4>{post.description}</h4>
                    </SocialText>
                  </Product>
                </CategoryBoxFeat>
              ))}
          </Container>
        </div>
      </div>
    </>
  );
}

export default Main;
