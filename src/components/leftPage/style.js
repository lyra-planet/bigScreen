import styled from 'styled-components';

export const LeftPage = styled.div`
  width: 6.25rem;
  height: auto;
  padding: 0.2rem;
  .left-top-box {
    position: relative;
    height: 350px;
    width: 100%;
    .left-top-borderBox12 {
      width: inherit;
      height: inherit;
      padding: 15px;
      .left-top {
        width: 100%;
        height: 100%;
        background-color: rgba(19, 25, 47, 0.6);
        h3 {
          padding: 5px 10px;
          color: #EFEFEF;
          font-size: 16px;
          font-weight: bold;
          .iconfont {
            font-size:14px;
            margin-right: 10px;
            color: #89e5ff;
          }
        }
        .title-dis{
          margin-top: 20px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          font-size: 16px;
          color: #c0c9d2;
          &-keyword{
            padding-left:10px;
            color: #47DAE8;
          }
        }
      }
    }
  }
`;
