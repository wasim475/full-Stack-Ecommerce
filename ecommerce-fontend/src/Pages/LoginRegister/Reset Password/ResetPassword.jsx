import { Button, Form, Input,  Card, Space  } from 'antd';
import axios  from 'axios';
import { useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';


const ResetPassword = () => {
  const navigate = useNavigate()
  const {token}= useParams()
  console.log(token)
  const onFinish = async (values) => {
    const resetPasswordData = {token: token, password: values.password}
 const responser = await axios.post("http://localhost:1559/api/v1/auth/resetpassword", resetPasswordData)
//  console.log(loginData.password)
 if(responser.data.error){
    toast.error(responser.data.error)
}else{
     toast.success(responser.data.success)
     navigate("/")
     console.log(responser)
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
            title="Reset Password"
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
      label="New Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your new password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Confirm Password
      </Button>
   
    </Form.Item>
   
  </Form>
  </Card>
  </Space>
      </div>
    </>
  )
}


export default ResetPassword
