import { Button, Checkbox, Form, Input } from 'antd';
import axios  from 'axios';
import { Link } from 'react-router';
// import Password from 'antd/es/input/Password';
const onFinish = async (values) => {
    const loginData = {email: values.email, password: values.password}
 const responser = await axios.post("http://localhost:1559/api/v1/auth/login", loginData)
 if(responser.data.error){
    console.log(responser.data.error)
}else{
     console.log(responser.data.success)
 }
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const Login = () => (
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
    <h1>Don't have an accout? <Link to={"/registration"}>Register</Link></h1>
    </Form.Item>
  </Form>
);
export default Login;