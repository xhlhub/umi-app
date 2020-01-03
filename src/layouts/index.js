
import React from 'react'
import { Layout, Menu, Icon } from 'antd';
import {Link} from 'react-router-dom'
import style from  './index.less';

const { Header, Sider, Content } = Layout;

class BasicLayout extends React.Component {
  state = {
    collapsed: false,
  };
  constructor(props){
    super(props)
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
      <Layout style={{
        fontSize:"14px"
      }}
      >
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
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
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
            className={style.myMain}
          >
           {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default BasicLayout;
