import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../../Feature/userSlice/userSlice";
import { Table } from 'antd';

const Users = () => {
  const { users, isLoading, isError, error } = useSelector((state) => state.users);
  const [userName, setUserName]= useState(null)
  const [userEmail, setUsersEmail]= useState(null)
  const [userRole, setUsersRole]= useState(null)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
    
  }, [dispatch]);

  useEffect(() => {
    if (users?.data?.length) {
      const name = users.data.map((item) => ({
        text: item.name,
        value: item.name,
      }));
      setUserName(name);
    }
  }, [users]);
  useEffect(() => {
    if (users?.data?.length) {
      const email = users.data.map((item) => (
        
        {
        text: item.email,
        value: item.email,
      }
    ));
      setUsersEmail(email);
    }
  }, [users]);
  useEffect(() => {
    if (users?.data?.length) {
      const role = users.data.map((item) => ({
        text: item.role,
        value: item.role,
      }));
      setUsersRole(role);
    }
  }, [users]);

  // console.log(userName)

  /**==================================================================================
                      ant table Start
   ================================================================================*/
   const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      filters: userName,
      filterMode: 'tree',
      filterSearch: true,
      onFilter: (value, record) => record.name.startsWith(value),
      width: '30%',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      filters: userEmail,
      filterMode: 'tree',
      filterSearch: true,
      onFilter: (value, record) => record.email.startsWith(value),
      width: '30%'
    },
    {
      title: 'Role',
      dataIndex: 'role',
      filters: userRole,
      onFilter: (value, record) => record.role.startsWith(value),
      filterSearch: true,
      width: '40%',
    },
  ];
  // const data = [
  //   {
  //     key: '1',
  //     name: 'demo',
  //     email: "demo@email.com",
  //     role: 'demo',
  //   },
  // ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  /**==================================================================================
                      ant table End
   ================================================================================*/
 
  return (
    // <div className=''>
    //   <h1>Users</h1>
    //   <ul>
    //     {
    //       users?.data?.map((user, index)=>(
            
    //           user.role=== "user"
    //           &&
    //           <li key={user._id} >{index+1}.{user?.name}</li>
              
            
            
    //       ))
    //     }
    //   </ul>
    // </div>
    <>
      <Table columns={columns} dataSource={users?.data} onChange={onChange} />
    </>
  );
};

export default Users;
