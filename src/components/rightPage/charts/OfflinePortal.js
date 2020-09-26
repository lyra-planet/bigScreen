import React, { PureComponent } from 'react';
import Chart from '../../../utils/chart';
import { OfflinePortalOptions } from './options';

class OfflinePortal extends PureComponent {
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
      option: OfflinePortalOptions,
    });
  }

  render() {
    const renderer = this.state.renderer;
    return (
      <div
        style={{
          width: '430px',
          height: '230px',
        }}>
        <Chart renderer={renderer} option={this.state.option} />;
      </div>
    );
  }
}

export default OfflinePortal;
