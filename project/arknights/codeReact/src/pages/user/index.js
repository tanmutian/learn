import React,{useCallback, useMomo,useState} from 'react';
import { connect } from 'dva';
import { Menu, Dropdown, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import { PoweroffOutlined } from '@ant-design/icons'
import styles from './index.less';


// @connect(({ user }) => ({ user }))
const User =()=>{
    const [test,setTest]=useState(['a','b','c','d','e']);
    const onClickButton=()=>{
        let newTest=[];
        for(let i=0;i<test.length;i++){
            newTest.push(test[i]+test[i]);
        }
        setTest(newTest);
    }
    const getFunctionReturnObject=()=>{
        let getFunctionReturnObjectHtml=[];
        for(let i=0;i<test.length;i++){
            getFunctionReturnObjectHtml.push(
                <div className={styles.item}>
                    {test[i]}
                </div>
            );
        }
        return getFunctionReturnObjectHtml;
    }
    
    return (
        <div> 
            {getFunctionReturnObject()}
            <div className={styles.button} onClick={onClickButton}> 
            </div>
        </div>

    )
}
export default User;
