import React,{useCallback, useMomo,useState} from 'react';
import { connect } from 'dva';
import { Menu, Dropdown, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import { PoweroffOutlined } from '@ant-design/icons'
import styles from './index.less';


// @connect(({ user }) => ({ user }))
const User =()=>{
    const [test,setTest]=useState('a');
    const onClickButton=()=>{
        let newTest=test+'a';
        setTest(newTest);
    }
    const getFunctionReturnString=()=>{
        let myReturn =test+'b';
        return myReturn
    }
    
    return (
        <div> 
            <div>
                {test}
            </div> 
            <div>
                {getFunctionReturnString()}
           </div> 
            <div className={styles.button} onClick={onClickButton}> 
            </div>
        </div>

    )
}
export default User;
