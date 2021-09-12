import React,{useCallback, useMomo,useState} from 'react';
import { connect } from 'dva';
import { Menu, Dropdown, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import { PoweroffOutlined } from '@ant-design/icons'
import styles from './index.less';


// @connect(({ user }) => ({ user }))
const User =()=>{
    const menu = (
        <Menu>
            <Menu.Item>
            <div target="_blank" rel="noopener noreferrer">
                1st menu item
            </div>
            </Menu.Item>
            <Menu.Item>
            <div target="_blank" rel="noopener noreferrer" >
                2nd menu item
            </div>
            </Menu.Item>
            <Menu.Item>
            <div target="_blank" rel="noopener noreferrer" >
                3rd menu item
            </div>
            </Menu.Item>
        </Menu>
    );
    
    return (
        <div>
            <Dropdown overlay={menu} placement="bottomLeft">
                <Button>bottomLeft</Button>
            </Dropdown>
            <Dropdown overlay={menu} placement="bottomCenter">
                <Button>bottomCenter</Button>
            </Dropdown>
            <Dropdown overlay={menu} placement="bottomRight">
                <Button>bottomRight</Button>
            </Dropdown>
            <Dropdown overlay={menu} placement="topLeft">
                <Button>topLeft</Button>
            </Dropdown>
            <Dropdown overlay={menu} placement="topCenter">
                <Button>topCenter</Button>
            </Dropdown>
            <Dropdown overlay={menu} placement="topRight">
                <Button>topRight</Button>
            </Dropdown>
        </div>   
    )
}
export default User;
