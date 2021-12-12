import React,{useCallback, useMomo,useState} from 'react';
import { connect } from 'dva';
import { Menu, Dropdown, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import { PoweroffOutlined } from '@ant-design/icons'
import styles from './UserTestListVerticle.less';

const UserTestListVerticle =({text,colorStyle})=>{
    return (
        <div className={styles.verticle} style={colorStyle}>
            {text}
        </div>
    )
    
}

export default UserTestListVerticle