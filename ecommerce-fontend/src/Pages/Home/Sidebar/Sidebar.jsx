import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
const items = [
    // Users Part
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
          key: '5',
          label: 'Category',
          children: [
            {
              key: '7',
              label: 'Add Category',
            },
            {
              key: '8',
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
          key: '7',
          label: 'Product',
          children: [
            {
              key: '7',
              label: 'Add Products',
            },
            {
              key: '8',
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
          key: '9',
          label: 'Add Discount',
        },
        {
          key: '10',
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
const Sidebar = () => {
    const onClick = (e) => {
        console.log('click ', e);
      };
  return (
    <>
      <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
    </>
  )
}

export default Sidebar
