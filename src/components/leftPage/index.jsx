import React, { PureComponent } from 'react';
import { LeftPage } from './style';
import { BorderBox12, BorderBox13 } from '@jiaminghi/data-view-react';
import TrafficSituation from './charts/TrafficSituation';
import UserSituation from './charts/UserSituation';

class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      accessFrequency: 1500,
      peakFlow: 300,
    };
  }
  render() {
    const { accessFrequency, peakFlow } = this.state;
    return (
      <LeftPage>
        {/* 顶部图表 */}
        <div className='left-top-box'>
          <BorderBox12 className='left-top-borderBox12'>
            <div className='left-top'>
              <h3>
                <i className='iconfont'>&#xe790;</i>
                <span>今日流量态势</span>
              </h3>
              <div className='title-dis'>
                <span>
                  平均接纳次数(小时):
                  <span className='title-dis-keyword'>{accessFrequency}次</span>
                </span>
                <span>
                  流量峰值:
                  <span className='title-dis-keyword'>{peakFlow}M</span>
                </span>
              </div>
              <TrafficSituation></TrafficSituation>
            </div>
          </BorderBox12>
        </div>

        {/* 底部图表 */}
        <div className='left-bottom-box'>
          <BorderBox13 className='left-bottom-borderBox13'>
            <div className='left-bottom'>
              <h3>
                <i className='iconfont'>&#xe88e;</i>
                <span>用户数据状态</span>
              </h3>
              <UserSituation></UserSituation>
            </div>
          </BorderBox13>
        </div>
      </LeftPage>
    );
  }
}

export default index;
