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
            有一个学生对象，包括姓名，年龄，性别是否为男，家庭地址，有一个按钮，每次点击变换数据，
            姓名每次加字符a，年龄每次加2，性别男女转换，家庭地址每次加字符b
            将最新对象展示在网页上，如图：
            
            <div className={styles.button} onClick={onClickButton}> 
            </div>
        </div>

    )
}
export default User;
