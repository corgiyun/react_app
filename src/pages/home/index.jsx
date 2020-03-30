import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { HomeStore } from '../../store/homeStore'
// @inject('homeStore')

@observer
class Home extends Component {
    constructor(props) {
        super(props);
        this.store = new HomeStore();
        this.state = {
            tagList: ['点击添加', '点击删除', '跳转到第一个页面']
        };
        this.handelChange =  this.handelChange.bind(this)
    }
    componentDidMount() {
        this.store.addNum();
    }
    handelChange(index) {
        switch (index) {
            case 0:
                this.store.addNum();
                break;
            case 1:
                this.store.lessNum();
                break;
            case 2:
                this.props.history.push('/one');
                break;    
            default:
                return false    
        }
    }
    render() {
        return (
            <div>
                <h1>首页数据：{this.store.homeNum}</h1>
                {
                    this.state.tagList.map((item, index)=> {
                        return  <button key={index} onClick={()=>this.handelChange(index)}>{item}</button>
                    })
                }
            </div>
        )
    }
}

export default Home;