import React,{useCallback, useMomo,useState} from 'react';
import { connect } from 'dva';
import { Menu, Dropdown, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import { PoweroffOutlined } from '@ant-design/icons'
import styles from './index.less';


// @connect(({ user }) => ({ user }))
const User =()=>{
    const [test,setTest]=useState(100);
    const onClickButton=()=>{
        let newTest=test+1;
        setTest(newTest);
    }
    
    return (
        <div> 
            <div>
                {test}
            </div>  
            <div className={styles.button} onClick={onClickButton}> 
            </div>
        </div>

    )
}
export default User;
