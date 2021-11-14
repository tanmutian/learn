import React,{useCallback, useMomo,useState} from 'react';
import { connect } from 'dva';
import { Menu, Dropdown, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import { PoweroffOutlined } from '@ant-design/icons'
import styles from './index.less';


// @connect(({ user }) => ({ user }))
const User =()=>{
    const[stringTest, setStringTest]=useState('a');
    const firstButton =()=>{
        let stringArray=[stringTest];
        stringArray.push('a');
        let newString=stringArray.join('');
        setStringTest(newString);
    }
    return (
        <div>
            <div>
                {stringTest}
            </div>
            <div className={styles.button} onClick={firstButton}>
                CLICK ME!
            </div>
        </div>

    )
}
export default User;