import React, { Component } from "react";
import { Button,Table, Row,Col,Modal,Form,Input,Icon } from "antd";
import { connect } from 'dva'
import PropTypes from 'prop-types'

const FormItem = Form.Item;

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
@Form.create()
@connect(({ user, app }) => ({ user, app }))
class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dialogVisible:false,
        }
    }
    render() {
        const {
            form: { getFieldDecorator },
        } = this.props;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol:{ span: 18 }
        };
        return (
            <div>
                <Row style={{marginBottom:"15px",textAlign:"right"}}>
                    <Col span={24}>
                        <Button style={{marginRight:"10px"}} type="primary" onClick={this.addUser}>添加</Button>
                        <Button type="success" onClick={this.getUser}>发起请求</Button>
                        </Col>
                </Row>
                <Table dataSource={this.props.user.userList} columns={columns} />
                <Modal
                    title="编辑"
                    visible={this.state.dialogVisible}
                    onOk={this.saveFun}
                    onCancel={this.cancelFun}
                    >
                    <Form  >
                        <FormItem {...formItemLayout} label="姓名">
                            {getFieldDecorator('name', {
                                rules: [{
                                    required: true, message: '请输入姓名',whitespace:true 
                                }]
                            })(
                                <Input autoComplete="off" placeholder="请输入姓名" maxLength={20} />
                            )}
                        </FormItem>
                        <FormItem {...formItemLayout} label="年龄">
                            {getFieldDecorator('age', {
                                rules: [{
                                    required: true, message: '请输入年龄',whitespace:true 
                                }]
                            })(
                                <Input autoComplete="off" placeholder="请输入年龄" maxLength={20} />
                            )}
                        </FormItem>
                        <FormItem {...formItemLayout} label="性别">
                            {getFieldDecorator('sex', {
                                rules: [{
                                    required: true, message: '请输入性别',whitespace:true 
                                }]
                            })(
                                <Input autoComplete="off" placeholder="请输入性别" maxLength={20} />
                            )}
                        </FormItem>
                    </Form>
                </Modal>
            </div>

        )
    }
    componentDidMount(){
        console.log(this.state)
    }
    componentWillUnmount() {
        console.log(this.state)
    }
    addUser = (e)=>{
        this.setState({
            dialogVisible:true
        })
    }
    getUser = ()=>{
        console.log(this.props.user)
        const { dispatch } = this.props;
        dispatch({
            type: 'user/updateuser'
        })
    }
    saveFun = (e)=>{
        const { dispatch } = this.props;
        this.props.form.validateFields((err, values) => {
            if (!err) {
                dispatch({
                    type: 'user/addUser',
                    payload:values
                })
                this.cancelFun()
            }
          });
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

User.propTypes = {
    dispatch: PropTypes.func,
}

export default User