import React, { Component } from 'react';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/grid';
import 'echarts/lib/chart/line';
import Chart from '../../../utils/chart';
import { options } from './options';

export class TrafficSituation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderer: 'canvas',
      option: '',
    };
  }
  async componentWillMount() {
    // 装载前 获取数据
    this.setState({
      option: options,
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
