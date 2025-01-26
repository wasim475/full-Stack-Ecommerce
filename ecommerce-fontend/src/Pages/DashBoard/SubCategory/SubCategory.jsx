import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { subCategoryData } from '../../../Feature/SubCategorySlice/SubCategorySlice'
import { Loading } from '../../../components/Loading Error/Loading'
import { Table } from 'antd';


const SubCategory = () => {
    const {subCategories, isLoading, error}= useSelector((state)=>state.subCategories)
    const [filterSubCat, setFilterSubCat]= useState([])
    const subCatDispatch = useDispatch()
    useEffect(()=>{
        subCatDispatch(subCategoryData())
    },[subCatDispatch])

    useEffect(()=>{
        const subCat = subCategories?.map((subcat)=>({
                text: subcat.name,
                value: subcat.name,
                
            })
        )
        setFilterSubCat(subCat)
    },[subCategories])

    if(isLoading){
        return Loading
    }

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          filters: filterSubCat,
          filterMode: 'tree',
          filterSearch: true,
          onFilter: (value, record) => record.name.startsWith(value),
          width: '30%',
        },
        {
          title: 'Active',
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
      <Table columns={columns} dataSource={subCategories} onChange={onChange} />
    </div>
  )
}

export default SubCategory
