import { Button, Form, Input } from "antd";
import axios from 'axios';
import { data } from 'react-router';
import { toast } from 'react-toastify';

const AddCategory = () => {
    const getUserData = localStorage.getItem("authData")
    const userData = JSON.parse(getUserData)
    const userId = userData?.user?.id
  const onFinish = async (values) => {
    const categoryData = {
        name: values.name,
        userId
    }
    const response = await axios.post("http://localhost:1559/api/v1/products/createcategory",categoryData)
     if(response?.data?.success){
        toast.success(response.data.success)
     }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
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
          label="Category Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddCategory;
