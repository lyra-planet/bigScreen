import React, { PureComponent } from 'react';
import { userIdentityCategoryOptions } from './options';
import { CapsuleChart } from '@jiaminghi/data-view-react';

class UserSituation extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      config: {
        // 单位
        unit: '（人）',
        showValue: false,
        data: [],
      },
    };
  }

  async componentDidMount() {
    // 装载前获取数据
    this.setState({
      config: { ...this.state.config, ...userIdentityCategoryOptions },
    });
  }

  render() {
    const { config } = this.state;
    return (
      <div>
        <CapsuleChart
          config={config}
          style={{
            width: '468px',
            height: '210px',
          }}></CapsuleChart>
      </div>
    );
  }
}

export default UserSituation;
