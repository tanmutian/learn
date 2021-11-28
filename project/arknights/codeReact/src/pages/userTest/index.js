import React,{useCallback, useMomo,useState} from 'react';
import { connect } from 'dva';
import { Menu, Dropdown, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import { PoweroffOutlined } from '@ant-design/icons'
import UserTestList from './userTestList/userTestList.js'
import styles from './index.less';

// @connect(({ user }) => ({ user }))
const User =()=>{

    return (
        <div className={styles.global}>
            <UserTestList
                name={'Tony'}
                highestRank={'Gold-4'}
                presentRank={'Gold-2'}
                job={'Leader and Commander'}
                jobStyle={{
                    float:'left',
                    borderLeft:'1px solid black',
                    borderRight:'1px solid black',
                    width:'400px',
                    height:'100px',
                    fontSize:'20px',
                    lineHeight:'100px',
                    textAlign:'center',
                }}
                jobTagStyle={{
                    float:'left',
                    borderLeft:'1px solid black',
                    width:'100px',
                    height:'100px',
                    fontSize:'30px',
                    lineHeight:'100px',
                    textAlign:'center',
                }}
            />

            <UserTestList
                name={'Victor'}
                highestRank={'Gold-3'}
                presentRank={'Gold-1'}
                job={'Striker'}
                jobStyle={{
                    float:'left',
                    borderLeft:'1px solid black',
                    borderRight:'1px solid black',
                    width:'400px',
                    height:'100px',
                    fontSize:'20px',
                    lineHeight:'100px',
                    textAlign:'center',
                }}
                jobTagStyle={{
                    float:'left',
                    borderLeft:'1px solid black',
                    width:'100px',
                    height:'100px',
                    fontSize:'30px',
                    lineHeight:'100px',
                    textAlign:'center',
                }}
            />


            <UserTestList
                name={'Steven'}
                highestRank={'Gold-2'}
                presentRank={'Gold-1'}
                job={'Free Man and Seconday Sniper'}
                jobStyle={{
                    float:'left',
                    borderLeft:'1px solid black',
                    borderRight:'1px solid black',
                    width:'400px',
                    height:'100px',
                    fontSize:'20px',
                    lineHeight:'100px',
                    textAlign:'center',
                }}
                jobTagStyle={{
                    float:'left',
                    borderLeft:'1px solid black',
                    width:'100px',
                    height:'100px',
                    fontSize:'30px',
                    lineHeight:'100px',
                    textAlign:'center',
                }}
            />

            <UserTestList
                name={'Henry'}
                highestRank={'Gold-AK'}
                presentRank={'Gold-1'}
                job={'Primary Sniper'}
                jobStyle={{
                    float:'left',
                    borderLeft:'1px solid black',
                    borderRight:'1px solid black',
                    width:'400px',
                    height:'100px',
                    fontSize:'20px',
                    lineHeight:'100px',
                    textAlign:'center',
                }}
                jobTagStyle={{
                    float:'left',
                    borderLeft:'1px solid black',
                    width:'100px',
                    height:'100px',
                    fontSize:'30px',
                    lineHeight:'100px',
                    textAlign:'center',
                }}
            />

            <UserTestList
                name={'Eric'}
                highestRank={'Gold-2'}
                presentRank={'Silver-Elite'}
                job={'Striker'}
                jobStyle={{
                    float:'left',
                    borderLeft:'1px solid black',
                    borderRight:'1px solid black',
                    width:'400px',
                    height:'100px',
                    fontSize:'20px',
                    lineHeight:'100px',
                    textAlign:'center',
                }}
                jobTagStyle={{
                    float:'left',
                    borderLeft:'1px solid black',
                    width:'100px',
                    height:'100px',
                    fontSize:'30px',
                    lineHeight:'100px',
                    textAlign:'center',
                }}
            />

            <UserTestList
                name={'Eze'}
                highestRank={'Silver-Elite'}
                presentRank={'Silver-Elite'}
                job={'Reteat covering'}
                jobStyle={{
                    float:'left',
                    borderLeft:'1px solid black',
                    borderRight:'1px solid black',
                    width:'400px',
                    height:'100px',
                    fontSize:'20px',
                    lineHeight:'100px',
                    textAlign:'center',
                }}
                jobTagStyle={{
                    float:'left',
                    borderLeft:'1px solid black',
                    width:'100px',
                    height:'100px',
                    fontSize:'30px',
                    lineHeight:'100px',
                    textAlign:'center',
                }}
            />

            <UserTestList
                name={'sunny'}
                highestRank={'Silver-Elite'}
                presentRank={'Silver-3'}
                job={'Secondary Sniper'}
                jobStyle={{
                    float:'left',
                    borderLeft:'1px solid black',
                    borderRight:'1px solid black',
                    borderBottom:'1px solid black',
                    width:'400px',
                    height:'100px',
                    fontSize:'20px',
                    lineHeight:'100px',
                    textAlign:'center',
                }}
                jobTagStyle={{
                    float:'left',
                    borderLeft:'1px solid black',
                    borderBottom:'1px solid black',
                    width:'100px',
                    height:'100px',
                    fontSize:'30px',
                    lineHeight:'100px',
                    textAlign:'center',
                }}
            />
            
            <div className={styles.clear}>
            </div>
        </div>

    )
}
export default User;