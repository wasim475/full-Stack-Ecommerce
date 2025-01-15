import { Table ,Space} from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoryData } from '../../../Feature/Category slice/categorySlice';
import { Loading } from '../../Loading Error/Loading';

const ViewCategory = () => {
    const {categoriesData, isLoading, isError, error} = useSelector((state)=>state.categories)
    const [filterCat, setFilterCat]= useState([])
    const [isActive, setIsActive]= useState([])
    const[catData, setCatData]= useState([])
    const catDispatch = useDispatch()
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

    const handleDelete = (id)=>{
      console.log(id)
    }
    const handleEdit = (id)=>{
      console.log(id)
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
          filters: [
            {
              text: 'London',
              value: 'London',
            },
            {
              text: 'New York',
              value: 'New York',
            },
          ],
          onFilter: (value, record) => record.address.startsWith(value),
          filterSearch: true,
          width: '40%',
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              <button onClick={()=>handleEdit(record.key)}>Edit</button>
              <button onClick={()=>handleDelete(record.key)}>Delete</button>
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
      <Table columns={columns} dataSource={catData} onChange={onChange} />
    </div>
  )
}

export default ViewCategory
