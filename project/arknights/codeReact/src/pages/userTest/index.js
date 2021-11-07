import React,{useCallback, useMomo,useState} from 'react';
import { connect } from 'dva';
import { Menu, Dropdown, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import { PoweroffOutlined } from '@ant-design/icons'
import styles from './index.less';


// @connect(({ user }) => ({ user }))
const User =()=>{
    const[boolean, setBoolean]=useState(true);
    const[String, setString]=useState('a');
    const[array, setArray]=useState([{
       name:'张三',
       age:'17' 
    }]);
    const firstButton =()=>{
        if(boolean){
            let newBoolean = false;
        }else{
            let newBoolean =true;
        }
        setBoolean(newBoolean)
    }
    return (
        <div>
            <div>
                {boolean}
            </div>
            <div className={styles.button} onClick={firstButton}>
                CLICK ME!
            </div>
        </div>

    )
}
export default User;