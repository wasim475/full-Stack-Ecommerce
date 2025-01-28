import React, { useEffect, useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu,  Col, Row } from 'antd';
import { Outlet, useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { currentUser } from '../../../Feature/CurrentUser/CurrentUserSlice';

const Sidebar = () => {
  const navigate = useNavigate()
  const {currUser} = useSelector((state)=>state.currentUser)
  const dispatch = useDispatch()


  useEffect(()=>{
    dispatch(currentUser())
  },[dispatch])

  const items = [
    // Users Part
    currUser?.role=== "Admin" &&
    {
      key: 'sub1',
      label: 'Users',
      icon: <MailOutlined />,
      children: [
        
            {
              key: '1',
              label: 'User',
            },
            {
              key: '2',
              label: 'Marchant',
            },
         
      
      ],
    },
    {
        type: 'divider',
      },
      // Products Part
    {
      key: 'sub2',
      label: 'Products',
      icon: <AppstoreOutlined />,
      children: [
        {
          key: '3',
          label: 'Category',
          children: [
            {
              key: '4',
              label: 'Add Category',
            },
            {
              key: '5',
              label: 'View Catagory',
            },
          ],
        },
        {
          key: '6',
          label: 'Sub-Category',
          children: [
            {
              key: '7',
              label: 'Add Sub-Category',
            },
            {
              key: '8',
              label: 'view Sub-Category',
            },
          ],
        },
        {
          key: '9',
          label: 'Product',
          children: [
            {
              key: '10',
              label: 'Add Products',
            },
            {
              key: '11',
              label: 'View Products',
            },
          ],
        },
      ],
    },

    {
      type: 'divider',
    },
    // Discount Part
    {
      key: 'sub4',
      label: 'Discount',
      icon: <SettingOutlined />,
      children: [
        {
          key: '12',
          label: 'Add Discount',
        },
        {
          key: '13',
          label: 'View Discount',
        },
     
      ],
    },
    // {
    //   key: 'grp',
    //   label: 'Group',
    //   type: 'group',
    //   children: [
    //     {
    //       key: '13',
    //       label: 'Option 13',
    //     },
    //     {
    //       key: '14',
    //       label: 'Option 14',
    //     },
    //   ],
    // },
  ];

    const onClick = (e) => {
      if(e.key==1){
        navigate("/dashboard/users")
      }
      if(e.key==2){
        navigate("/dashboard/marchant")
      }
      if(e.key==5){
        navigate("/dashboard/category")
      }
      if(e.key==4){
        navigate("/dashboard/add-category")
      }
      if(e.key==7){
        navigate("/dashboard/add-sub-category")
      }
      if(e.key==8){
        navigate("/dashboard/sub-category")
      }
      if(e.key==10){
        navigate("/dashboard/addproduct")
      }
      if(e.key==11){
        navigate("/dashboard/products")
      }
        console.log('click ', e);
      };
  return (
    <>
    <Row>
      <Col span={7}>   <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    /></Col>
      <Col span={17}>
        <Outlet/>
      </Col>
    </Row>
   
    </>
  )
}

export default Sidebar
