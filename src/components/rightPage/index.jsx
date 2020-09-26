import React, { PureComponent } from 'react';
import { BorderBox13 } from '@jiaminghi/data-view-react';
import BrowseCategories from './charts/BrowseCategories';
import UserIdentityCategory from './charts/UserIdentityCategory';
import OfflinePortal from './charts/OfflinePortal';
import Feedback from './charts/Feedback';
import { ModuleTitle } from '../../style/globalStyledSet';
import {
  RightPage,
  RightTopBox,
  RightCenterBox,
  RightBottomBox,
} from './style';

class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      offline: {
        feedback: [
          {
            title: '服务质量',
            number: 90,
          },
          {
            title: '交互体验',
            number: 82,
          },
          {
            title: '安全防护',
            number: 85,
          },
        ],
      },
    };
  }
  render() {
    const { offline } = this.state;
    return (
      <RightPage>
        <RightTopBox>
          <div className='right-top'>
            <ModuleTitle>
              <i className='iconfont'>&#xe7f7;</i>
              <span>关联数据类别分布</span>
            </ModuleTitle>
            <div className='right-top-content'>
              <BrowseCategories></BrowseCategories>
              <img
                alt='地球'
                className='earth-gif'
                src={require('../../assets/images/earth-rotate.gif')}
              />
            </div>
          </div>
        </RightTopBox>

        <RightCenterBox>
          <ModuleTitle>
            <i className='iconfont'>&#xe7fd;</i>
            <span>平均用户类别排布</span>
          </ModuleTitle>
          <UserIdentityCategory></UserIdentityCategory>
        </RightCenterBox>

        <RightBottomBox>
          <BorderBox13 className='right-bottom-borderBox13'>
            <div className='right-bottom'>
              <ModuleTitle>
                <i className='iconfont'>&#xe790;</i>
                <span>今日线下门户流量</span>
              </ModuleTitle>
              {/* 反馈 */}
              <div className='feedback-box'>
                {offline.feedback.map((item, index) => {
                  return (
                    <div className='feedback-box-item' key={index}>
                      <Feedback FeedbackData={item}></Feedback>
                      <span className='dis-text'>{item.title}</span>
                    </div>
                  );
                })}
              </div>
              {/* 门店 */}
              <div className='offline-portal-box'>
                <OfflinePortal></OfflinePortal>
              </div>
            </div>
          </BorderBox13>
        </RightBottomBox>
      </RightPage>
    );
  }
}

export default index;
