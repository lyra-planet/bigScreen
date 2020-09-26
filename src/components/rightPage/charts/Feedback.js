import React, { PureComponent } from 'react';
import Chart from '../../../utils/chart';
import { FeedbackOptions } from './options';

class Feedback extends PureComponent {
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
      option: FeedbackOptions(this.props.FeedbackData),
    });
  }

  render() {
    const renderer = this.state.renderer;
    return (
      <div
        style={{
          width: '100px',
          height: '100px',
        }}>
        <Chart renderer={renderer} option={this.state.option} />;
      </div>
    );
  }
}

export default Feedback;
