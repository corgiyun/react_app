import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

// @inject('homeStore')
@inject('oneStore')

@observer
class One extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1>页面一</h1>
                {/* <span>首页数据：{this.props.homeStore.homeNum};</span> */}
                <span>one数据： {this.props.oneStore.oneNum}</span>
                <button onClick={()=>this.props.history.push('/')}>
                    跳转到首页
                </button>
            </div>
        )
    }
}

export default One;