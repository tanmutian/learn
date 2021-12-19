import React,{useCallback, useMomo,useState} from 'react';
import { connect } from 'dva';
import { Menu, Dropdown, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import { PoweroffOutlined } from '@ant-design/icons'
import UserTestList from './userTestList/userTestList.js'
import UserTestListVerticle from './userTestList2/userTestListVerticle.js'
import styles from './index.less';

// @connect(({ user }) => ({ user }))
const User =()=>{

    const [test,setTest]=useState(['a','b','c','d','e','f']);
    const onClickButton =()=>{
        let newTest=[];
        for(let i=0;i<test.length;i++){
            newTest.push(test[i]+test[i]);
        }
        setTest(newTest);
    }
    const horizon =()=>{
        let functionReturnObjectHtml=[];
        for(let i=0;i<test.length;i++){
            functionReturnObjectHtml.push(
                <div className={styles.item}>
                    {test[i]}
                </div>
            );
        }
        return functionReturnObjectHtml;
    }
    
    

    return (
        <div className={styles.global}>
            {horizon()}
            <div className={styles.button} onClick={onClickButton}>
                CLICK ME !!!
            </div>
        </div>
    
    )
}
export default User;