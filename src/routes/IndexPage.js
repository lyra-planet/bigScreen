import React, { Component } from 'react';
import { connect } from 'dva';
import { IndexPageStyle } from './style';
import Top from '../components/top';

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <IndexPageStyle>
        <div className='react_view_box'>
          <div className='boder_text'>
            <Top></Top>
          </div>
        </div>
      </IndexPageStyle>
    );
  }
}

export default connect()(IndexPage);
