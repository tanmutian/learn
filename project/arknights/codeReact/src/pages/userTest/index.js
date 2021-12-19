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

    const [test,setTest]=useState([1,2,3,4,5,6]);
    const onClickButton =()=>{
        let newTest=[];
        for(let i=0;i<test.length;i++){
            newTest.push(test[i]+1);
        }
        setTest(newTest);
    }
    const functionReturnObject =()=>{
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
            <div>
                {functionReturnObject()}
            </div>
            <div className={styles.button} onClick={onClickButton}>
                CLICK ME !!!
            </div>
            
            <div className={styles.clear}>
            </div>
        </div>

    )
}
export default User;