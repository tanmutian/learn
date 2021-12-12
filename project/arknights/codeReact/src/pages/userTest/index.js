import React,{useCallback, useMomo,useState} from 'react';
import { connect } from 'dva';
import { Menu, Dropdown, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import { PoweroffOutlined } from '@ant-design/icons'
import UserTestList from './userTestList/userTestList.js'
import UserTestListVerticle from './userTestList2/UserTestListVerticle.js'
import styles from './index.less';

// @connect(({ user }) => ({ user }))
const User =()=>{

    const [test,setTest]=useState({
        name: 'Peter',
        age: 16,
        gender: 'male',
        address: 'Shanghai'
    });
    const OnClick =()=>{
        let newTest;
        let newGender;
        if(test.gender=='male'){
            newGender='female';
        }else{
            newGender='male';
        };
        newTest={
            name:test.name+'a',
            age: test.age+2,
            gender: newGender,
            address: test.address+'b'
        };
        setTest(newTest);
    }
    
    

    return (
        <div className={styles.global}>
            <div className={styles.sectionArea}>
                <UserTestList
                    text = {test.name}
                    colorStyle = {{
                        background: 'blue',
                        color: 'red'
                    }}
                />
                <UserTestList
                    text = {test.age}
                    colorStyle = {{
                        background: 'black',
                        color: 'green'
                    }}
                />
                <UserTestList
                    text = {test.gender}
                    colorStyle = {{
                        background:'grey',
                        color:  'black'
                    }}
                />
                <UserTestList
                    text = {test.address}
                    colorStyle = {{
                        background: 'yellow',
                        color: 'purple'
                    }}
                />
            </div>

            <div className={styles.sectionArea2}>
                <UserTestListVerticle
                    text = {test.address}
                    colorStyle = {{
                        background: 'blue',
                        color: 'green'
                    }}
                />
                <UserTestListVerticle
                    text = {test.address}
                    colorStyle = {{
                        background: 'red',
                        color: 'orange'
                    }}
                />
                <UserTestListVerticle
                    text = {test.address}
                    colorStyle = {{
                        background: 'black',
                        color: 'grey'
                    }}
                />
                <UserTestListVerticle
                    text = {test.address}
                    colorStyle = {{
                        background: 'yellow',
                        color: 'red'
                    }}
                />
            </div>

            <div className={styles.button} onClick={OnClick}>
                CLICK ME !!!
            </div>
            
            <div className={styles.clear}>
            </div>
        </div>

    )
}
export default User;