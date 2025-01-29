import { Button, Checkbox, Form, Input } from "antd";
import { useState } from 'react';

const AddProducts = () => {
    let [count, setCount]= useState(0)
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleVarient = ()=>{
    setCount(++count)
    console.log(count)
  }
  return (
    <div>
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
          label="name"
          name="name"
          rules={[
            {
              required: true,
              message: "Write product name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Band" name="band">
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: true,
              message: "Write a product description!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Varient Name"
          name="varientName"
          rules={[
            {
              required: true,
              message: "Write a product varient name!",
            },
          ]}
        >
          <Input />
        </Form.Item>


        <Form.Item
          label="Varient Value"
          name="varientValue"
          rules={[
              {
                  required: true,
                  message: "Write a product varient value!",
                },
            ]}
        >
          <Input />
        </Form.Item>
            <Button onClick={handleVarient} color="primary" variant="solid">Add Varient</Button>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Add Product
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddProducts;
