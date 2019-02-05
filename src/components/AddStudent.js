import React,{Component} from 'react';
import {Form, InputNumber, Input, Button} from 'antd';
import {connect} from 'react-redux';
import * as actions from "../actions";
import FormItem from 'antd/lib/form/FormItem';

class AddStudent extends Component{
    onChange = value => {
        console.log(value);
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log("Submitted");
    }

    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <Form layout="inline" onSubmit={this.handleSubmit}>
                
                <FormItem>
                    <Input placeholder="Enter Full Name" />
                </FormItem>

                <FormItem>
                    <Input placeholder="Enter USN" />
                </FormItem>

                <Form.Item>
                    {getFieldDecorator('email', {
                        rules: [{
                    type: 'email', message: 'The input is not valid E-mail!',
                    }, {
                    required: true, message: 'Please input your E-mail!',
                    }],
                    })(
            <Input />
          )}
        </Form.Item>

                <FormItem>
                    <InputNumber min={1} max={31} defaultValue={3} onChange={this.onChange} />
                </FormItem>
                <FormItem>
                    <InputNumber min={1} max={12} defaultValue={3} onChange={this.onChange} />
                </FormItem>
                <FormItem>
                    <InputNumber min={1980} max={2050} defaultValue={3} onChange={this.onChange} />
                </FormItem>

            </Form>
        )
    }
}

const WrappedAddStudentForm = Form.create({ name: 'register' })(AddStudent);
const mapStateToProps = ({ data, auth }) => ({
    data,
    auth
});

export default connect(
    mapStateToProps,
    actions
  )(WrappedAddStudentForm);