import { Button, Form, Input } from "antd";
import axios from "axios";
import { toast } from "react-toastify";
import { Card, Space } from "antd";
import { useNavigate, useParams } from 'react-router';


const VerifyOtp = () => {
    const {email} = useParams()
    const navigate = useNavigate()
    console.log(email)
    const onFinish = async (values) => {
        const otpData = {
            email: email,
            otp: values.otp
        };
        
        const responser = await axios.post(
          "http://localhost:1559/api/v1/auth/otp",
          otpData
        );
        if (responser.data.error) {
          toast.error(responser.data.error);
        } else {
          toast.success(responser.data.success);
          navigate("/login")
        }
      };
      const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
      };
  return (
    <>
       <div className='text-center'>
    <Space direction="vertical" size={16}>
      <Card
        title="Verify Your Account."
        style={{
          width: 300,
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
            label="OTP"
            name="otp"
            rules={[
              {
                required: true,
                message: "Please input your otp!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              Verify
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Space>
  </div>
    </>
  )
}

export default VerifyOtp

