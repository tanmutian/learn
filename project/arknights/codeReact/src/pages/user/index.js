import React,{useCallback, useMomo,useState} from 'react';
import { connect } from 'dva';
import { Menu, Dropdown, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import { PoweroffOutlined } from '@ant-design/icons'
import styles from './index.less';


// @connect(({ user }) => ({ user }))
const User =()=>{
    const [test,setTest]=useState({
        name:'Mike',
        age:12,
        address:'shanghai'
    });
    const onClickButton=()=>{
        let newTest={
            name:test.name+'g',
            age:test.age+1,
            address:test.address+'a',
        };
        
        setTest(newTest);
    }
    const getFunctionReturnObject=()=>{
        let myReturn=<div  className={styles.getFunctionReturnObjectClass} >
            {test.name+','+test.age+','+test.address}
        </div>;
        
        return myReturn
    }
    
    return (
        <div> 
            <div>
                {test.name}
            </div> 
            <div>
                {test.age}
            </div>
            <div>
                {test.address}
            </div>
            {getFunctionReturnObject()}
            <div className={styles.button} onClick={onClickButton}> 
            </div>
        </div>

    )
}
export default User;
