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
        name:'Keivn',
        class:1,
        score:99,
    },{
        name:'Linda',
        class:1,
        score:93,
    },{
        name:'Tony',
        class:1,
        score:91,
    },{
        name:'Nicola',
        class:1,
        score:88,
    }]);

    const [grade,setGrade]=useState([{
        name:'Mike',
        class:2,
        score:98,
    },{
        name:'Wu',
        class:8,
        score:96,
    },{
        name:'Sunny',
        class:3,
        score:92,
    },{
        name:'Steven',
        class:5,
        score:88,
    },{
        name:'Royce',
        class:2,
        score:76,
    }]);
    const onClickButton =()=>{
        let newTest=[];
        for(let i=0;i<test.length;i++){
            newTest.push(test[i]+test[i]);
        }
        setTest(newTest);
    }

    const classRanking =()=>{
        //let rankList=[]
       // for(let i=0;i<test.length;i++){
        //    for(let j=0;j<i;j++){
         //       if(test[j].score<test[j+1].score){
          //          let temp={};
         //           temp=test[j];
           //         test[j]=test[j+1];
           //         test[j+1]=temp
           //     }
           // }
       // }
        let classRank=[];
        for(let i=0;i<test.length;i++){
            //if(test[i].class==1){
                classRank.push(
                    <div className={styles.theClass}>
                        <div className={styles.name}>
                            {test[i].name}
                        </div>
                        <div classNmae={styles.content}>
                            <div className={styles.rank}>
                                {i+1}
                            </div>
                            <div className={styles.score}>
                                {test[i].score}
                            </div>
                            <div className={styles.clear}>
                            </div>
                        </div>
                        <div className={styles.clear}>
                        </div>
                    </div>
                );
            //}            
        }
        return classRank;
    }
    
    const gradeRanking =()=>{
       // let rankList=[]
       // for(let i=0;i<grade.length;i++){
         //   for(let j=0;j<=i;j++){
         //       if(test[j].score<test[j+1].score){
         //           let temp={};
         //           temp=test[j];
          //          test[j]=test[j+1];
         //           test[j+1]=temp
          //      }
        //    }
       // }
        let gradeRanking=[];
        for(let i=0;i<grade.length;i++){
            gradeRanking.push(
                <div className={styles.theGrade}>
                    <div className={styles.info}>
                        <div className={styles.name2}>
                            {grade[i].name}
                        </div>
                        <div className={styles.class2}>
                            class:{grade[i].class}
                        </div>
                        <div className={styles.clear}>
                        </div>
                    </div>
                    <div className={styles.rank2}>
                        {i+1}
                    </div>
                    <div className={styles.clear}>
                    </div>
                </div>
            )
        }
        return gradeRanking
    }
    

    return (
        <div className={styles.global}>
            <div className={styles.totalArea}>
                <div className={styles.classRank}>
                    {classRanking()}
                </div>

                <div className={styles.gradeRank}>
                    {gradeRanking()}
                </div>
                
                <div className={styles.clear}>
                </div>
            </div>          
        </div>
    
    )
}
export default User;