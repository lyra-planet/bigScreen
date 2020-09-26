import React, { PureComponent } from 'react';
import Chart from '../../../utils/chart';
import { browseCategoriesOptions } from './options';

class BrowseCategories extends PureComponent {
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
      option: browseCategoriesOptions,
    });
  }

  render() {
    const renderer = this.state.renderer;
    return (
      <div
        style={{
          width: '430px',
          height: '200px',
        }}>
        <Chart renderer={renderer} option={this.state.option} />;
      </div>
    );
  }
}

export default BrowseCategories;
