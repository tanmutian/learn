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

    const [test,setTest]=useState([{
        name:'Royce',
        age:19,
        cource:'Psychology'
    },{

        name:'Keivn',
        age:19,
        cource:'management'
    },{
        name:'Steven',
        age:19,
        cource:'mechanical Engineering'
    },{
        name:'Sunny',
        age:18,
        cource:'Electronic and electrical engineering'
    }]);
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
                    <div className={styles.name}>
                        {test[i].name}
                    </div>
                    <div className={styles.large}>
                        <div className={styles.age}>
                            {test[i].age}
                        </div>
                        <div className={styles.cource}>
                            {test[i].cource}
                        </div>
                    </div>
                </div>
            );
        }
        return functionReturnObjectHtml;
    }
    
    

    return (
        <div className={styles.global}>
            {horizon()}
        </div>
    
    )
}
export default User;