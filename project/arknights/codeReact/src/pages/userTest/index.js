import React,{useCallback, useMomo,useState} from 'react';
import { connect } from 'dva';
import { Menu, Dropdown, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import { PoweroffOutlined } from '@ant-design/icons'
import styles from './index.less';


// @connect(({ user }) => ({ user }))
const User =()=>{
    const[firstTest, setFirstTest]=useState(200);
    const onClickButton =()=>{
        let newTest=firstTest-10;
        setFirstTest(newTest)
    }
    
    return (
        <div>
            <div style={{fontSize:'30px'}}>
                {firstTest}
            </div>
            <div className={styles.button} onClick={onClickButton}>
                CLICK ME!
            </div>
        </div>

    )
}
export default User;