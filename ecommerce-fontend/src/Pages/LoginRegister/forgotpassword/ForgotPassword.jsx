import { Button, Form, Input, Card, Space } from "antd";
import axios from "axios";
import { useState } from 'react';
import { toast } from "react-toastify";

const ForgotPassword = () => {
    const [loading, setLoading]= useState(false)
  const onFinish = async (values) => {
    setLoading(!loading)
      const email = { email: values.email };
      const responser = await axios.post(
          "http://localhost:1559/api/v1/auth/forgetpassword",
          email
        );
        


    if (responser.data.error) {
      toast.error(responser.data.error);
    } else {
      toast.success(responser.data.success);
      setLoading(false)
      //  navigate("/")
     
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <div className="text-center">
        <Space direction="vertical" size={16}>
          <Card
            title="Forgot Password"
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
                label="email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item label={null}>
                <Button type="primary" htmlType="submit">
                    {
                        loading ? "please wait" :" Reset Password"
                    }
                 
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Space>
      </div>
    </>
  );
};

export default ForgotPassword;
