import React, { PureComponent } from 'react';
import Chart from '../../../utils/chart';
import { trafficOptions } from './options';

class TrafficSituation extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      renderer: 'canvas',
      option: '',
    };
  }
  async componentDidMount() {
    // 装载前获取数据
    this.setState({
      option: trafficOptions,
    });
  }

  render() {
    const renderer = this.state.renderer;
    return (
      <div
        style={{
          width: '430px',
          height: '250px',
        }}>
        <Chart renderer={renderer} option={this.state.option} />;
      </div>
    );
  }
}

export default TrafficSituation;
