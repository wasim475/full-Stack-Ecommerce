import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { subCategoryData } from "../../../Feature/SubCategorySlice/SubCategorySlice";
import { Loading } from "../../../components/Loading Error/Loading";
import { Button, Space, Table } from "antd";

const SubCategory = () => {
  const { subCategories, isLoading, error } = useSelector(
    (state) => state.subCategories
  );
  const [filterSubCat, setFilterSubCat] = useState([]);
  const [tableDatas, setTableDatas] = useState([]);
  const subCatDispatch = useDispatch();
  useEffect(() => {
    subCatDispatch(subCategoryData());
  }, [subCatDispatch]);
  console.log(tableDatas);
  useEffect(() => {
    const subCat = subCategories?.map((subcat) => ({
      text: subcat.name,
      value: subcat.name,
    }));
    setFilterSubCat(subCat);
  }, [subCategories]);
  useEffect(() => {
    const tableData = subCategories.map((item) => ({
      name: item.name,
      isActive: item.isActive ? "Aproved" : "Pending",
      category: item.categoryId.name,
      key: item._id
    }));
    setTableDatas(tableData);
  }, [subCategories]);

const handleEdit = (key, name)=>{
  
}
const handleDelete = (key)=>{
  
}

  if (isLoading) {
    return Loading;
  }

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      filters: filterSubCat,
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.name.startsWith(value),
      width: "30%",
    },
    {
      title: "Category",
      dataIndex: "category",
      // sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Active",
      dataIndex: "isActive",
      // sorter: (a, b) => a.age - b.age,
    },
    {
      title: "action",
      key: 'action',
          render: (_, record) => (
            <Space size="middle">
              <button onClick={()=>handleEdit(record.key, record.name)}>Edit</button>
              <button onClick={()=>handleDelete(record.key)}>Delete</button>
            </Space>
      ),
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <div>
      <Table columns={columns} dataSource={tableDatas} onChange={onChange} />
    </div>
  );
};

export default SubCategory;
