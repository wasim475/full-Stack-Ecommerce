import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { subCategoryData } from "../../../Feature/SubCategorySlice/SubCategorySlice";
import { Loading } from "../../../components/Loading Error/Loading";
import { Button, Form, Input, Modal, Space, Table } from "antd";
import axios from "axios";
import { toast } from "react-toastify";
import { currentUser } from "../../../Feature/CurrentUser/CurrentUserSlice";

const SubCategory = () => {
  const { subCategories, isLoading, error } = useSelector(
    (state) => state.subCategories
  );
  const [filterSubCat, setFilterSubCat] = useState([]);
  const [tableDatas, setTableDatas] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const subCatDispatch = useDispatch();
  const { currUser } = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);
  useEffect(() => {
    subCatDispatch(subCategoryData());
  }, [subCatDispatch]);
  // console.log(tableDatas);
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
      category: item?.categoryId?.name,
      key: item._id,
    }));
    setTableDatas(tableData);
  }, [subCategories]);

  const handleEdit = (key, name) => {
    setEditId(key);
    setIsModalOpen(true);
  };
  const handleDelete = async (key) => {
    const subCatId = key;
    const response = await axios.post(
      "http://localhost:1559/api/v1/products/deletesubcategory",
      { subCatId }
    );
    if (response.data.success) {
      toast.success(response.data.success);
    }
    const remainingData = tableDatas?.filter((item) => item.key !== key);
    setTableDatas(remainingData);
  };

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
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          {currUser.role === "marchant" && (
            <button onClick={() => handleEdit(record.key, record.name)}>
              Edit
            </button>
          )}
          <button onClick={() => handleDelete(record.key)}>Delete</button>
          {currUser.role === "Admin" && (
            <button onClick={()=>console.log(record.key)}>Aprove</button>
          )}
        </Space>
      ),
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  // Modal Part Start

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = async (values) => {
    const editData = {
      name: values.name,
      subCatId: editId,
    };
    const response = await axios.post(
      "http://localhost:1559/api/v1/products/editsubcategory",
      editData
    );
    if (response.data.success) {
      toast.success(response.data.success);
      setIsModalOpen(false);
    }
    setRefresh(!refresh);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // Modal part end
  return (
    <div>
      <Table columns={columns} dataSource={tableDatas} onChange={onChange} />
      <Modal
        title="Edit Sub Category"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
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
            label="Sub Category"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your SubCategory!",
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
      </Modal>
    </div>
  );
};

export default SubCategory;
