import React, { PureComponent } from 'react';
import { CenterPage, CenterBottom } from './style';
import Map from './charts/Map';

class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      detailsList: [
        {
          title: '图像转化流量',
          number: 260,
          unit: '点击/张',
        },
        {
          title: '视频转化流量',
          number: 330,
          unit: '点击/个',
        },
        {
          title: '金融流量',
          number: 4.65,
          unit: ' 万/小时 ',
        },
        {
          title: '安全服务流量',
          number: 5453,
          unit: '攻击/小时',
        },
        {
          title: '公众号流量',
          number: 62356,
          unit: '点击/篇',
        },
        {
          title: '通信流量',
          number: 1250,
          unit: 'M /分',
        },
      ],
    };
  }

  render() {
    const { detailsList } = this.state;
    return (
      <CenterPage>
        <Map></Map>
        <CenterBottom>
          <div className='detail-list'>
            {detailsList.map((item, index) => {
              return (
                <div className='detail-list-item' key={index}>
                  <img
                    src={require(`../../assets/images/center-details-data${
                      index + 1
                    }.png`)}
                    alt={item.title}
                  />
                  <div className='detail-item-text'>
                    <h3>{item.title}</h3>
                    <span>{item.number}</span>
                    <span className='unit'>{item.unit}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </CenterBottom>
      </CenterPage>
    );
  }
}

export default index;
