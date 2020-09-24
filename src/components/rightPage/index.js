import React, { PureComponent } from 'react';
import { RightPage } from './style';

class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <RightPage>
        <h1
          style={{
            color: '#fff',
          }}>
          右边
        </h1>
      </RightPage>
    );
  }
}

export default index;
