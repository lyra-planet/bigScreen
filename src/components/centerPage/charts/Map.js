import React, { PureComponent } from 'react';
import Chart from '../../../utils/chart';
import { mapOptions } from './options';

class Map extends PureComponent {
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
      option: mapOptions,
    });
  }

  render() {
    const renderer = this.state.renderer;
    return (
      <div
        style={{
          width: '850px',
          height: '650px',
        }}>
        <Chart renderer={renderer} option={this.state.option} />;
      </div>
    );
  }
}

export default Map;
