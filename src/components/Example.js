import React, { PureComponent, Fragment } from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';

class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      line: null,
    };
  }

  componentDidMount() {
    const line = echarts.init(document.getElementById('anyFuckId'));
    this.setState({ line });
  }

  render() {
    const option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
        },
      ],
    };

    if (this.state.line) {
      // 用setOption(obj) 来设置
      this.state.line.setOption(option);
    }

    return (
      <Fragment>
        <div class="d-flex jc-center">
      <dv-decoration-10 style="width:33.3%;height:.0625rem;" />
      <div class="d-flex jc-center">
        <dv-decoration-8
          color={['#568aea', '#000000']}
          style="width:2.5rem;height:.625rem;"
        />
        <div class="title">
          <span class="title-text">大数据可视化平台</span>
          <dv-decoration-6
            class="title-bototm"
            reverse={true}
            color={['#50e3c2', '#67a1e5']}
            style="width:3.125rem;height:.1rem;"
          />
        </div>
        <dv-decoration-8
          reverse={true}
          color={['#568aea', '#000000']}
          style="width:2.5rem;height:.625rem;"
        />
      </div>
      <dv-decoration-10
        style="width:33.3%;height:.0625rem; transform: rotateY(180deg);"
      />
    </div>
      </Fragment>
    );
  }
}

export default index;
