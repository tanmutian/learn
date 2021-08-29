import React,{useCallback, useMomo,useState} from 'react';
import { connect } from 'dva';
import { Button,Tooltip ,Radio, Input, Space,Carousel} from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import { PoweroffOutlined } from '@ant-design/icons'
import styles from './index.less';


// @connect(({ user }) => ({ user }))
const User =()=>{
    const [test,setTest]=useState(1);
    const onClickTest =useCallback(()=>{
        let newTest=test+1
        setTest(newTest);
    },[test])

    return (
        <div className={styles.user_global}>
            <div className={styles.test} onClick={onClickTest}>
                {test}
            </div>
        </div>
    );
 
}
export default User;
