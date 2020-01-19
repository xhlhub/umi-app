import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

export default function(props){
    return (
      <ConfigProvider locale={zhCN}>
          {props.children}
      </ConfigProvider>  
    )
}