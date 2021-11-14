import React,{useCallback, useMomo,useState} from 'react';
import { connect } from 'dva';
import { Menu, Dropdown, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import { PoweroffOutlined } from '@ant-design/icons'
import styles from './index.less';


// @connect(({ user }) => ({ user }))
const User =()=>{
    const[booleanTest, setBooleanTest]=useState(true);
    const firstButton =()=>{
        let newBoolean;
        if(booleanTest){
            newBoolean = false;
        }else{
            newBoolean =true;
        }
        setBooleanTest(newBoolean);
    }
    return (
        <div>
            <div>
                {booleanTest.toString()}
            </div>
            <div className={styles.button} onClick={firstButton}>
                CLICK ME!
            </div>
        </div>

    )
}
export default User;