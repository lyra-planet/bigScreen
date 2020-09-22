import styled from 'styled-components';
export const TopBox = styled.div`
  .top_box {
    display: flex;
    justify-content: center;
    padding-top: 0.25rem;
    .title-box {
      display: flex;
      justify-content: center;

      .title {
        position: relative;
        width: 6.25rem;
        text-align: center;
        background-size: cover;
        background-repeat: no-repeat;

        .title-text {
          font-size: 0.3rem;
          position: absolute;
          bottom: 0;
          left: 50%;
          color: #fff;
          transform: translate(-50%);
        }

        .title-bototm {
          position: absolute;
          bottom: -0.375rem;
          left: 50%;
          transform: translate(-50%);
        }
      } // end title
    } // end title-box
  } // end top_box
`;
