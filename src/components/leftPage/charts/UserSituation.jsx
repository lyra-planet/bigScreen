import React, { PureComponent } from 'react';
import { userOptions } from './options';
import { ScrollBoard } from '@jiaminghi/data-view-react';

class UserSituation extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      config: {
        // 表头背景色
        headerBGC: '#443dc5',
        // 奇数行背景色
        oddRowBGC: '#09184F',
        // 偶数行背景色
        evenRowBGC: '#070C34',
        // 行号
        index: true,
        // 行号表头
        indexHeader: '序号',
        // 宽度
        columnWidth: [50, 100, 200],
        // 对其方式
        align: ['center'],
        // 表行数
        rowNum: 10,
      },
    };
  }

  // 使用 DidMount 会导致列表严重卡顿，还没研究原因
  async componentWillMount() {
    // 装载前获取数据
    this.setState({
      config: { ...this.state.config, ...userOptions },
    });
  }

  render() {
    const { config } = this.state;
    return (
      <div>
        <ScrollBoard
          config={config}
          style={{
            width: '438px',
            height: '550px',
          }}></ScrollBoard>
      </div>
    );
  }
}

export default UserSituation;