import React, { PureComponent} from 'react';
import { CenterPage } from './style';

class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <CenterPage>
        <h1
          style={{
            color: '#fff',
          }}>
         中间
        </h1>
      </CenterPage>
    );
  }
}

export default index;
