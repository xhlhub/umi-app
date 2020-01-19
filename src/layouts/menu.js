
import React from 'react'
import {  Menu, Icon  } from 'antd';
import {Link} from 'react-router-dom'
import withRouter from 'umi/withRouter'

@withRouter
class Mymenu extends React.Component {
  componentDidMount(){
    console.log(this.props.location)
  }  
  render() {
    const { match, location, history } = this.props;
    debugger
    return (
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Link to='/'>
            <Icon type="video-camera" />
          <span>首页</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
        <Link to='/user'>
          <Icon type="user" />
          <span>用户</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
        <Link to='/account'>
          <Icon type="upload" />
          <span>账号</span>
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Mymenu;
