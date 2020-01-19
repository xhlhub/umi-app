
import React from 'react'
import { Layout, Icon  } from 'antd';
import style from  './index.less';
import Mymenu from './menu'
const { Header, Sider, Content } = Layout;

class BasicLayout extends React.Component {
  state = {
    collapsed: false,
  };
  // constructor(props){
  //   super(props)
  // };
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
          <Mymenu></Mymenu>
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
