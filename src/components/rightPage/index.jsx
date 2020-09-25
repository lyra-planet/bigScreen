import React, { PureComponent } from 'react';
import { BorderBox12, BorderBox13 } from '@jiaminghi/data-view-react';
import {
  RightPage,
  RightTopBox,
  RightCenterBox,
  RightBottomBox,
} from './style';

class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <RightPage>
        <RightTopBox>
          <div className='right-top'>
            <div>1</div>
            <img
              className='earth-gif'
              src={require('../../assets/images/earth-rotate.gif')}
            />
          </div>
        </RightTopBox>
        <RightCenterBox>
          <BorderBox12></BorderBox12>
        </RightCenterBox>
        <RightBottomBox>
          <BorderBox13></BorderBox13>
        </RightBottomBox>
      </RightPage>
    );
  }
}

export default index;
