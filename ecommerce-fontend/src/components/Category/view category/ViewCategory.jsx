import { Table ,Space, Modal, Input, Form, Button } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoryData } from '../../../Feature/Category slice/categorySlice';
import { Loading } from '../../Loading Error/Loading';
import axios from 'axios';
import { toast } from 'react-toastify';
import { currentUser } from '../../../Feature/CurrentUser/CurrentUserSlice';

const ViewCategory = () => {
    const {categoriesData, isLoading, isError, error} = useSelector((state)=>state.categories)
    const [filterCat, setFilterCat]= useState([])
    const [isActive, setIsActive]= useState([])
    const [refresh, setRefresh]= useState(false)
    const[catData, setCatData]= useState([])
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [msg, setMsg]= useState('')
    const catDispatch = useDispatch()
     const { currUser } = useSelector((state) => state.currentUser);
      const dispatch = useDispatch();
    
      useEffect(() => {
        dispatch(currentUser());
      }, [dispatch]);

    useEffect(()=>{
        catDispatch(categoryData())
    },[catDispatch])

    useEffect(()=>{
      const catagory = categoriesData?.map((item)=>({
        name: item.name,
        isActive: item.isActive?"Aproved":"pending",
        key: item._id
      }))
      setCatData(catagory)
      // console.log(catagory)
    },[categoriesData])

    useEffect(()=>{
      const cateNames = categoriesData?.map((cat)=>({
        text: cat.name,
        value: cat.name,
      }))
      setFilterCat(cateNames)
    },[categoriesData])

    // console.log(categoriesData)

    useEffect(()=>{
      const isActiveData = catData?.map((item)=>({
        isActive: item.isActive?"Aproved":"Pending"
      }))
      setIsActive(isActiveData)
    },[catData])

    // console.log(catData)

    const uniqueFiterData = filterCat.filter((item, index, self)=>
      index === self.findIndex((obj)=>obj.text===item.text)
    )

    const handleDelete = async (categoryId)=>{
      const response = await axios.post("http://localhost:1559/api/v1/products/deleteCategory",{categoryId})
      if(response.data.success){
        setMsg(response.data.success)
        const remainingData = catData?.filter((item)=> item.key !== categoryId)
        setCatData(remainingData)

        setTimeout(() => {
          setMsg("")
        }, 1000);
        
      }
    }

    const [editCat, setEditCat] = useState('');
    const [editId, setEditId]= useState(null)
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };

    const onEditFinish = async (values) => {
      const EditcategoryData = {
          name: values.name,
          categoryId: editId
      }
      
      const response = await axios.post("http://localhost:1559/api/v1/products/editcategory",EditcategoryData)
       if(response?.data?.success){
          toast.success(response.data.success)
          catDispatch(categoryData())
          setIsModalOpen(false);
       }
    };
    
    const handleEdit = (id, name)=>{
      setEditCat(editCat)
      setEditId(id)
      showModal()
    }
const handleAprove = async (id)=>{
  const response = await axios.post("http://localhost:1559/api/v1/products/categoryaprove", {catId:id})
  console.log(response.data.success)
  if(response.data.success){
    toast.success(response.data.success)
  }
}
   
    // console.log("isActive",isActive)
    if(isLoading){
      return Loading
    }
    const columns = [
        {
          title: 'Category',
          dataIndex: 'name',
          filters: uniqueFiterData,
          filterMode: 'tree',
          filterSearch: true,
          onFilter: (value, record) => record.name.includes(value),
          width: '30%',
        },
        {
          title: 'Active',
          dataIndex: "isActive",
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              {
                currUser?.role === "marchant "&&
              <button onClick={()=>handleEdit(record.key, record.name)}>Edit</button>
              }
              <button onClick={()=>handleDelete(record.key)}>Delete</button>
              {
                currUser?.role === "Admin" &&
              <button onClick={()=>handleAprove(record.key)} >Aprove</button>
              }
            </Space>
          ),
        },
          
      ];
    
      const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
      };
  return (
    <div>
      <h1 className='text-xl font-semibold flex justify-center mb-5'>Categories</h1>
      <p className='text-green-400'>{msg}</p>
      <Table columns={columns} dataSource={catData} onChange={onChange} />
      
      <Modal title="Edit Category" open={isModalOpen} >
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
        onFinish={onEditFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Category Name"
          name="name"
          initialValue={editCat}
          rules={[
            {
              required: true,
              message: "Please input your category Name.",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label={null}>
          <Button type="default" onClick={handleCancel} >
            Cancel
          </Button>
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </Form.Item>
      </Form>
      </Modal>
    </div>
  )
}

export default ViewCategory
