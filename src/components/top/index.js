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
            <Decoration10 style={{ width: '33.3%', height: '.0625rem' }} />
            <div className='title-box'>
              <Decoration8
                color={['#568aea', '#000000']}
                style={{ width: '2.5rem', height: '.625rem' }}
              />
              <div className='title'>
                <span className='title-text'>{title}</span>
                <Decoration6
                  className='title-bototm'
                  reverse={true}
                  color={['#50e3c2', '#67a1e5']}
                  style={{ width: '3.125rem', height: '.1rem' }}
                />
              </div>
              <Decoration8
                reverse={true}
                color={['#568aea', '#000000']}
                style={{ width: '2.5rem', height: '.625rem' }}
              />
            </div>
            <Decoration10
              style={{
                width: '33.3%',
                height: '.0625rem',
                transform: 'rotateY(180deg)',
              }}
            />
          </div>
        </TopBox>
      </Fragment>
    );
  }
}

export default index;
