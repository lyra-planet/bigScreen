import styled from 'styled-components';
import pageBg from '../assets/pageBg.png';

export const IndexPageStyle = styled.div`
  .react_view_box {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    margin: 0px;
    padding: 0px;
    background: url(${pageBg}) center center no-repeat;
    background-size: cover;
  }
`;
