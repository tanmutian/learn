import React,{useCallback, useMomo,useState} from 'react';
import { connect } from 'dva';
import { Menu, Dropdown, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import { PoweroffOutlined } from '@ant-design/icons'
import styles from './index.less';


// @connect(({ user }) => ({ user }))
const User =()=>{
    const [test,setTest]=useState(true);
    const onClickButton=()=>{
        let newTest;
        if(test==true){
            newTest=false;
        }else{
            newTest=true;
        }
        setTest(newTest);
    }
    const getFunctionReturnBool=()=>{
        let myReturn;
        if(test==true){
            myReturn=false;
        }else{
            myReturn=true;
        }
        return myReturn
    }
    
    return (
        <div> 
            <div>
                test我是{test.toString()}
            </div> 
            <div>
                我是return的方法{getFunctionReturnBool().toString()}
           </div> 
            <div className={styles.button} onClick={onClickButton}> 
            </div>
        </div>

    )
}
export default User;
