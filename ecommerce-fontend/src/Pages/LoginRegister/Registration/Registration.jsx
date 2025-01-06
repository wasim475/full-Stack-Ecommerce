import { Button, Checkbox, Form, Input } from 'antd';
import axios  from 'axios';
import { Link } from 'react-router';
import { toast } from 'react-toastify';
// import Password from 'antd/es/input/Password';
const onFinish = async (values) => {
    const registrationData = {name: values.name, email: values.email, password: values.password}
 const responser = await axios.post("http://localhost:1559/api/v1/auth/registration", registrationData)
 if(responser.data.error){
    toast.error(responser.data.error)
}else{
    toast.success(responser.data.success)
 }
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const Registration = () => (
  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Name"
      name="name"
      rules={[
        {
          required: true,
          message: 'Please input your name!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your email!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item name="remember" valuePropName="checked" label={null}>
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Login
      </Button>
      <h1>Already have an accout? <Link to={"/login"} >Login</Link></h1>
    </Form.Item>
  </Form>
);
export default Registration;