import styled from 'styled-components';
import { container, title } from '../material-kit-react';
import modalStyle from '../modalStyle';
import tooltipsStyle from '../tooltipsStyle';
import popoverStyles from '../popoverStyles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CategoryBoxFeat = styled.div`
  margin-top: 40px;
  margin-bottom: 50px;
  background: rgba(214, 102, 91, 0.2);
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
  padding-bottom: 40px;

  > h3 {
    padding-top: 10px;
    padding-bottom: 10px;
    max-width: 225px;
    text-align: center;
  }
`;

export const BoxImage = styled.div`
  background: rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  height: 225px;
  width: 225px;
  margin-bottom: 5px;
  border-radius: 16px;
  position: relative;

  img {
    border-radius: 16px;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    transition: opacity 0.2s;
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

  &:hover {
    img {
      opacity: 0.4;
    }

    text {
      display: flex;
    }
  }
`;

export const InvisibleBox = styled.div`
  margin: 40px 0;
  height: 30px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BoxImageDetails = styled.div`
  background: rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  height: 225px;
  width: 225px;
  margin-bottom: 5px;
  border-radius: 16px;

  img {
    border-radius: 16px;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

export const DrinkName = styled.text`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  font-weight: bold;
`;

export const DrinkDescription = styled.text`
  margin-top: 25px;
  max-width: 70%;
  text-align: center;
`;

export const StrawText = styled.text`
  color: ${(props) => (props.checked ? '#4caf50' : '#999999')};
`;

export const ButtonOpenDrinkDetails = styled.button`
  border: 0;
  background: none;
`;

const styles = {
  section: {
    padding: '70px 0 0',
  },
  container,
  title: {
    ...title,
    marginTop: '30px',
    minHeight: '32px',
    textDecoration: 'none',
  },
  icon: {
    width: '17px',
    height: '17px',
    marginRight: '4px',
  },
  ...modalStyle,
  label: {
    color: 'rgba(0, 0, 0, 0.26)',
    cursor: 'pointer',
    display: 'inline-flex',
    fontSize: '14px',
    transition: '0.3s ease all',
    lineHeight: '1.428571429',
    fontWeight: '400',
    paddingLeft: '0',
    letterSpacing: 'normal',
  },
  ...tooltipsStyle,
  ...popoverStyles,
};

export default styles;
