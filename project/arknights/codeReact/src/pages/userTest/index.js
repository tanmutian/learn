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

    const [test,setTest]=useState([10,20,30,40,50,60]);
    const onClickButton =()=>{
        let newTest=[];
        for(let i=0;i<test.length;i++){
            newTest.push(test[i]-1);
        }
        setTest(newTest);
    }
    const horizon =()=>{
        let functionReturnObjectHtml=[];
        for(let i=0;i<test.length/2;i++){
            if(i==2){
                functionReturnObjectHtml.push(
                    <div className={styles.horizonBlock}>
                        <div className={styles.smallBlock2}>
                            {test[i]}
                        </div>
                        <div className={styles.smallBlock2}>
                            {test[test.length-i-1]}
                        </div>
                    </div>
                );
            }else if(i==1){
                functionReturnObjectHtml.push(
                    <div className={styles.horizonBlock}>
                        <div className={styles.smallBlock3}>
                            {test[i]}
                        </div>
                        <div className={styles.smallBlock3}>
                            {test[test.length-i-1]}
                        </div>
                    </div>
                );
            }else{
                functionReturnObjectHtml.push(
                    <div className={styles.horizonBlock}>
                        <div className={styles.smallBlock}>
                            {test[i]}
                        </div>
                        <div className={styles.smallBlock}>
                            {test[test.length-i-1]}
                        </div>
                    </div>
                );
            }
            
        }
        return functionReturnObjectHtml;
    }

    const verticle =()=>{
        let functionReturnObjectHtml=[];
        for(let i=test.length/2-1;i>=0;i--){
            if(i==0){
                functionReturnObjectHtml.push(
                    <div className={styles.verticleBlock}>
                        <div className={styles.bigBlock2}>
                            {test[test.length-i-1]}
                        </div>
                        <div className={styles.bigBlock2}>
                            {test[i]}
                        </div>
                    </div>
                );
            }else if(i==1){
                functionReturnObjectHtml.push(
                    <div className={styles.verticleBlock}>
                        <div className={styles.bigBlock3}>
                            {test[test.length-i-1]}
                        </div>
                        <div className={styles.bigBlock3}>
                            {test[i]}
                        </div>
                    </div>
                );
            }else{
                functionReturnObjectHtml.push(
                    <div className={styles.verticleBlock}>
                        <div className={styles.bigBlock}>
                            {test[test.length-i-1]}
                        </div>
                        <div className={styles.bigBlock}>
                            {test[i]}
                        </div>
                    </div>
                );
            }
            
        }
        return functionReturnObjectHtml;
    }
    
    

    return (
        <div className={styles.global}>
            <div className={styles.horizon}>
                {horizon()}
            </div>
            <div className={styles.verticle}>
                {verticle()}
            </div>
            <div className={styles.button} onClick={onClickButton}>
                CLICK ME !!!
            </div>
        </div>

    )
}
export default User;