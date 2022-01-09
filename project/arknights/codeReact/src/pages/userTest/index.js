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
        class:2,
        score:88
    },{

        name:'Keivn',
        class:1,
        score:85
    },{
        name:'Steven',
        class:5,
        score:76
    },{
        name:'Sunny',
        class:3,
        score:96
    },{
        name:'Linda',
        class:1,
        score:93
    },{
        name:'Tony',
        class:1,
        score:91
    },{
        name:'Wu',
        class:8,
        score:98
    },{
        name:'Nicola',
        class:1,
        score:97
    },{
        name:'Mike',
        class:2,
        score:92
    }]);
    const onClickButton =()=>{
        let newTest=[];
        for(let i=0;i<test.length;i++){
            newTest.push(test[i]+test[i]);
        }
        setTest(newTest);
    }
    const classRanking =()=>{
        let rankList=[]
        for(let i=0;i<test.length;i++){
            for(let j=0;j<=i;j++){
                if(test[j].score<test[j+1].score){
                    let temp
                    temp=
                }
            }
        }
        let classRank=[];
        for(let i=0;i<test.length;i++){
            if(test[i].class==1){
                classRank.push(
                    <div className={styles.theClass}>
                        <div className={styles.name}>
                            {test[i].name}
                        </div>
                        <div classNmae={styles.content}>
                            <div className={styles.rank}>
                                {classRank.length+1}
                            </div>
                            <div className={styles.name}>
                                {test[i].name}
                            </div>
                        </div>
                    </div>
                );
            }            
        }
        return classRank;
    }
    
    

    return (
        <div className={styles.global}>
            
        </div>
    
    )
}
export default User;