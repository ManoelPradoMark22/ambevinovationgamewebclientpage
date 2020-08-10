import styled from 'styled-components';

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
  cursor: pointer;

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
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }

  img {
    border-radius: 16px;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

export const InvisibleBox = styled.div`
  margin: 40px 0;
  height: 30px;
`;
