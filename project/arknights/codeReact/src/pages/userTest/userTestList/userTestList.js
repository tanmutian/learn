import React,{useCallback, useMomo,useState} from 'react';
import { connect } from 'dva';
import { Menu, Dropdown, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import { PoweroffOutlined } from '@ant-design/icons'
import styles from './userTestList.less';

const UserTestList =({name,highestRank,presentRank,job,jobStyle,jobTagStyle})=>{
    return (
        <div className={styles.totalArea}>
            <div className={styles.Section}>
                <div className={styles.nameTag}>
                    Name
                </div>
                <div className={styles.name}>
                    {name}
                </div>  
                <div className={styles.clear}>
                </div>
            </div>

            <div className={styles.Section}>
                <div className={styles.rank}>
                    Highest Rank
                </div>
                <div className={styles.rank2}>
                    {highestRank}
                </div>
                <div className={styles.rank3}>
                    Present Rank
                </div>
                <div className={styles.rank}>
                    {presentRank}
                </div>
                <div className={styles.clear}>
                </div>
            </div>

            <div className={styles.Section}>
                <div style={jobTagStyle} className={styles.jobTag}>
                    Job
                </div>
                <div style={jobStyle} className={styles.job}>
                    {job}
                </div> 
                <div className={styles.clear}>
                </div>
            </div>

            <div className={styles.clear}>
            </div>
        </div>
    )
    
}

export default UserTestList