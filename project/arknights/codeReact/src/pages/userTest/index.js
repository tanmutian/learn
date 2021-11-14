import React,{useCallback, useMomo,useState} from 'react';
import { connect } from 'dva';
import { Menu, Dropdown, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import { PoweroffOutlined } from '@ant-design/icons'
import styles from './index.less';


// @connect(({ user }) => ({ user }))
const User =()=>{
    const [arrayTest, setArrayTest]=useState([{
        name : '1',
        no : 1
    }]);
    const [theAnswer, setTheAnswer]=useState(arrayTest[0].name);
    const firstButton =()=>{        
        let valueFormed = Math.random();
        let newValue = {
            name : valueFormed,
            no : arrayTest.length+1
        }
        let newArrayTest=[...arrayTest];
        newArrayTest.push(newValue);
        setArrayTest(newArrayTest);
        let answer='';
        for(let i=0;i<newArrayTest.length;i++){
            answer=answer+newArrayTest[i].name+',';
        }
        setTheAnswer(answer);
    }
    return (
        <div>
            <div>
                {theAnswer}
            </div>
            <div className={styles.button} onClick={firstButton}>
                CLICK ME!
            </div>
        </div>

    )
}
export default User;