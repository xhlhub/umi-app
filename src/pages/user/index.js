import React, { Component } from "react";
import { Button,Table, Row,Col,Modal,Form,Input,Icon } from "antd";

const dataSource = [
{
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
},
{
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
},
];

const columns = [
{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
},
{
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
},
{
    title: '住址',
    dataIndex: 'address',
    key: 'address',
},
];

class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dialogVisible:false,
            form:{
                name:"11",
                age:"",
                adress:""
            }
        }
    }
    render() {
        return (
            <div>
                <Row style={{marginBottom:"15px",textAlign:"right"}}>
                    <Col span={24}>
                        <Button type="primary" onClick={this.addUser}>添加</Button>
                        </Col>
                </Row>
                <Table dataSource={dataSource} columns={columns} />
                <Modal
                    title="编辑"
                    visible={this.state.dialogVisible}
                    onOk={this.saveFun}
                    onCancel={this.cancelFun}
                    >
                    <Form  >
                        <Form.Item>
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="姓名"
                                value={this.state.form.name}
                                onChange={this.changeValue.bind(this,'name')}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                prefix={<Icon type="age" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="年龄"
                                value={this.state.form.age}
                                onChange={this.changeValue.bind(this,'age')}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                prefix={<Icon type="address" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="地址"
                                value={this.state.form.address}
                                onChange={this.changeValue.bind(this,'address')}
                            />
                        </Form.Item>
                    </Form>
                </Modal>
            </div>

        )
    }
    addUser = ()=>{
        Object.keys(this.state.form).map((key)=>{
            this.state.form[key] = ""
        })
        this.setState({
            dialogVisible:true
        })
    }
    saveFun = (e)=>{
        dataSource.push(JSON.parse(JSON.stringify(this.state.form)))
        this.cancelFun()
    }
    cancelFun = ()=>{
        console.log(this.state.form)
        this.setState({
            dialogVisible:false
        })
    }
    changeValue (field,e){
        const obj ={};
        obj[field] = e.target.value;
        this.setState({
            form:Object.assign(this.state.form,obj) 
        })
    }
}

export default User