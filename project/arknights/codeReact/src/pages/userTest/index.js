import React,{useCallback, useMomo,useState} from 'react';
import { connect } from 'dva';
import { Menu, Dropdown, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import { PoweroffOutlined } from '@ant-design/icons'
import UserTestList from './userTestList/userTestList.js'
import styles from './index.less';

// @connect(({ user }) => ({ user }))
const User =()=>{

    const [test,setTest]=useState({
        name: 'Peter',
        age: 16,
        address: 'Shanghai'
    });
    const OnClick =()=>{
        let newTest;
        newTest={
            name:test.name+'X',
            age: test.age+1,
            address: test.address+'n'
        }
        setTest(newTest);
    }
    
    const getFunctionReturnObject =()=>{
        let myReturn;
        myReturn = <div className={styles.getFunctionReturnObjectClass}>
            {test.name+'/'+test.age+'/'+test.address+'.'}
        </div>;
        return myReturn;
    }

    return (
        <div className={styles.global}>

            <div style={{
                float:'left',
                width:'200px',
                height:'200px',
                background:'yellow'
            }}>
                {test.name}
            </div>

            <div style={{
                float:'left',
                width:'200px',
                height:'200px',
                background:'yellow'
            }}>
                {test.age}
            </div>

            <div style={{
                float:'left',
                width:'200px',
                height:'200px',
                background:'yellow'
            }}>
                {test.address}
            </div>

           {getFunctionReturnObject()}

            <div className={styles.button} onClick={OnClick}>
                CLICK ME!!!
            </div>


            <UserTestList
                name={'Tony'}
                highestRank={'Gold-4'}
                presentRank={'Gold-2'}
                job={'Leader and Commander'}
            />

            <UserTestList
                name={'Victor'}
                highestRank={'Gold-3'}
                presentRank={'Gold-1'}
                job={'Striker'}
            />


            <UserTestList
                name={'Steven'}
                highestRank={'Gold-2'}
                presentRank={'Gold-1'}
                job={'Free Man and Seconday Sniper'}
            />

            <UserTestList
                name={'Henry'}
                highestRank={'Gold-AK'}
                presentRank={'Gold-1'}
                job={'Primary Sniper'}
            />

            <UserTestList
                name={'Eric'}
                highestRank={'Gold-2'}
                presentRank={'Silver-Elite'}
                job={'Striker'}
            />

            <UserTestList
                name={'Eze'}
                highestRank={'Silver-Elite'}
                presentRank={'Silver-Elite'}
                job={'Reteat covering'}
            />

            <UserTestList
                name={'sunny'}
                highestRank={'Silver-Elite'}
                presentRank={'Silver-3'}
                job={'Secondary Sniper'}
                jobStyle={{
                    borderBottom:'1px solid black',
                }}
                jobTagStyle={{
                    borderBottom:'1px solid black',
                }}
            />
            
            <div className={styles.clear}>
            </div>
        </div>

    )
}
export default User;