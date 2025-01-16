import { Button, Form, Input } from "antd";
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { currentUser } from '../../../Feature/CurrentUser/CurrentUserSlice';

const AddCategory = () => {
    const {currUser} = useSelector((state)=>state.currentUser)
    const currDispatch = useDispatch()
    useEffect(()=>{
      currDispatch(currentUser())
    },[currDispatch])
    const ownerId = currUser?.id

  const onFinish = async (values) => {
    const categoryData = {
        name: values.name,
        ownerId
    }
    const response = await axios.post("http://localhost:1559/api/v1/products/createcategory",categoryData)
    // console.log(response)
     if(response?.data?.success){
        toast.success(response.data.success)
     }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  // console.log(ownerId)
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
