import styled from 'styled-components';

export const CenterPage = styled.div`
  margin-top: 0.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CenterBottom = styled.div`
  display: flex;
  margin-bottom: 0.25rem;
  width: 100%;
  height: 3.25rem;
  .detail-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: space-between;
    justify-content: space-around;
    width: 100%;
    &-item {
      display: flex;
      align-items: center;
      position: relative;
      height: 125px;
      padding: 0 10px;
      width: 32%;
      border-radius: 3px;
      background-color: rgba(19, 25, 47, 0.8);
      img {
        width: 1.25rem;
        height: 1.25rem;
      }
      .detail-item-text {
        margin-left: 10px;
        h3 {
          color: #bcdcff;
          font-size: 16px;
          margin-bottom: 20px;
        }
        span {
          font-weight: 500px;
          font-size: 20px;
          font-weight: bolder;
          background: linear-gradient(to bottom, #fff, #4db6e5);
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
        }
        .unit {
          font-size: 16px;
          margin-left: 10px;
        }
      }
    }
  }
`;
