import React,{useCallback, useMomo,useState} from 'react';
import { connect } from 'dva';
import { Menu, Dropdown, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import { PoweroffOutlined } from '@ant-design/icons'
import styles from './userTestList.less';

const UserTestList =({text,colorStyle})=>{
    return (
        <div className={styles.verticle} style={colorStyle}>
            {text}
        </div>
    )
    
}

export default UserTestList