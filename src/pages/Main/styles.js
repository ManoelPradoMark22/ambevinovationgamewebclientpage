import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px 0;

  h1 {
    margin-bottom: 25px;
    font-family: 'ribes', 'syne bold,' Gadget, sans-serif;
  }

  svg {
    font-size: 50px;
    margin-bottom: 25px;
  }
`;

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px 0;

  h1 {
    margin-bottom: 25px;
  }

  svg {
    font-size: 50px;
    margin-bottom: 25px;
  }
`;

export const CategoryBoxFeat = styled.div`
  display: block;
  margin-bottom: 100px;
  border-radius: 16px;
  > h2 {
    padding-top: 20px;
    padding-bottom: 10px;
    padding-right: 40px;
    padding-left: 40px;
    font-weight: bold;
    font-size: 30px;
    text-align: center;
    word-wrap: break-word;
  }
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > h3 {
    padding-bottom: 5px;
    max-width: 225px;
    text-align: center;
  }
  > h3 {
    max-width: 225px;
    text-align: center;
  }
`;

export const BoxImage = styled.div`
  img {
    border-radius: 16px;
    max-width: 100%;
    max-height: 400px;
  }

  text {
    position: absolute;
    font-weight: bold;
    font-size: 16px;
    left: 50%;
    top: 50%;
    display: none;
    transform: translate(-50%, -50%);
  }
`;

export const ImgAndIcons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const TextIconBox = styled.div`
  position: absolute;
  top: -40px;
  left: 0;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 30px;
    margin: 0 0;
  }

  text {
    font-weight: bold;
  }
`;

export const MessageText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  max-width: 80%;
`;

export const SocialText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  max-width: 80%;

  h3 {
    margin-top: 5px;
    margin-bottom: 5px;
  }
`;
