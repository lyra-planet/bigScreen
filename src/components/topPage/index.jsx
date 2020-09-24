import React, { PureComponent, Fragment } from 'react';
import {
  Decoration10,
  Decoration8,
  Decoration6,
} from '@jiaminghi/data-view-react';

import { TopBox } from './style';

class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: '大数据可视化平台',
    };
  }

  render() {
    const { title } = this.state;
    return (
      <Fragment>
        <TopBox>
          <div className='top_box'>
            <Decoration10 className='top_decoration10' />
            <div className='title-box'>
              <Decoration8
                className='top_decoration8'
                color={['#568aea', '#000000']}
              />
              <div className='title'>
                <span className='title-text'>{title}</span>
                <Decoration6
                  className='title-bototm top_decoration6'
                  reverse={true}
                  color={['#50e3c2', '#67a1e5']}
                />
              </div>
              <Decoration8
                reverse={true}
                className='top_decoration8'
                color={['#568aea', '#000000']}
              />
            </div>
            <Decoration10 className='top_decoration10 top_decoration10_reverse' />
          </div>
        </TopBox>
      </Fragment>
    );
  }
}

export default index;
