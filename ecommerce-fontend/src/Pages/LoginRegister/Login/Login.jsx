import { Button, Checkbox, Form, Input,  Card, Space  } from 'antd';
import axios  from 'axios';
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';


const Login = () => {
  const navigate = useNavigate()
  const onFinish = async (values) => {
    const loginData = {email: values.email, password: values.password}
 const responser = await axios.post("http://localhost:1559/api/v1/auth/login", loginData)
 console.log(responser)
 if(responser.data.error ){
    toast.error(responser.data.error)
}else if(responser.data.user.role !=="user"){
     toast.success(responser.data.success)
     navigate("/")
     localStorage.setItem("users",JSON.stringify(responser.data.user))
 } else if(responser.data.user.role ==="user"){
  toast.warn("User cannot logging dashboard.")
 }
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
  return (
    <>
      <div className='text-center'>
      <Space direction="vertical" size={16}>
          <Card
            title="Login"
            style={{
              width: 500,
            }}
          >
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
    <h1> <Link to={`/forgotpassword`}> Forgot Password?</Link> </h1>
    </Form.Item>
    <h1> Do not have an account? <Link to={"/registration"}>Register</Link></h1>
  </Form>
  </Card>
  </Space>
      </div>
    </>
  )
}

export default Login
