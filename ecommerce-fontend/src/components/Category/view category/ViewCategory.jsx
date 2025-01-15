import { Table } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoryData } from '../../../Feature/Category slice/categorySlice';
import { Loading } from '../../Loading Error/Loading';

const ViewCategory = () => {
    const {categoriesData, isLoading, isError, error} = useSelector((state)=>state.categories)
    const [filterCat, setFilterCat]= useState([])
    const catDispatch = useDispatch()
    useEffect(()=>{
        catDispatch(categoryData())
    },[catDispatch])

    useEffect(()=>{
      const cateNames = categoriesData?.map((cat)=>({
        text: cat.name,
        value: cat.name
      }))
      setFilterCat(cateNames)
    },[categoriesData])
    if(isLoading){
      return Loading
    }
    console.log("categoriesData",categoriesData)
    const columns = [
        {
          title: 'Category',
          dataIndex: 'name',
          filters: filterCat,
          filterMode: 'tree',
          filterSearch: true,
          onFilter: (value, record) => record.name.includes(value),
          width: '30%',
        },
        {
          title: 'CategoryId',
          dataIndex: '_id',
          sorter: (a, b) => a.age - b.age,
        },
        {
          title: 'Address',
          dataIndex: 'address',
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
      ];
    
      const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
      };
  return (
    <div>
      <Table columns={columns} dataSource={categoriesData} onChange={onChange} />
    </div>
  )
}

export default ViewCategory
