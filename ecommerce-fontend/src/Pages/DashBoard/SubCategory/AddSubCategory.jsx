import { Button, Form, Input, Select } from "antd";
import axios from "axios";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";
import { categoryData } from '../../../Feature/Category slice/categorySlice';

const AddSubCategory = () => {
  const {categoriesData, isLoading}= useSelector((state)=>state.categories)
  const dispatch = useDispatch()
  const [selectCat, setSelectCat]= useState(null)
  const [catId, setCatId]= useState(null)
  // console.log(catId)
  useEffect(()=>{
    dispatch(categoryData())
  },[])
  const onFinish = async (values) => {
    const subCategoryData = {
      name: values.name,
      categoryId:catId
    };

    const response = await axios.post(
      "http://localhost:1559/api/v1/products/create-subcategory",
      subCategoryData
    );
    if (response?.data?.success) {
      toast.success(response.data.success);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onChange = (value) => {
    setCatId(value)
    // console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    // console.log("search:", value);
  };
  useEffect(()=>{
    const selectCats = categoriesData?.map((item)=>({
      value: item._id,
      label: item.name,
      
    }))
    setSelectCat(selectCats)
  },[categoriesData])
  return (
    <>
    <h1 className='text-2xl font-bold mb-5'>Sub Category</h1>
      <Form
        name="basic"
        labelCol={{
          span: 12,
        }}
        wrapperCol={{
          span: 12,
        }}
        style={{
          maxWidth: 800,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        
        <section className='flex gap-x-2'>
          <div>
            <Form.Item
              label="Sub Category Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "write your subcategory Name!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </div>
          <div className="text-center">
            <Select
              showSearch
              placeholder="Select a Category"
              optionFilterProp="label"
              onChange={onChange}
              onSearch={onSearch}
              options={selectCat}
            />
          </div>
        </section>

        <Form.Item label={null} >
          <Button className='-ml-20' type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddSubCategory;
