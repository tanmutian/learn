import React,{useCallback, useMomo,useState} from 'react';
import { connect } from 'dva';
import { Menu, Dropdown, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import { PoweroffOutlined } from '@ant-design/icons'
import styles from './index.less';


// @connect(({ user }) => ({ user }))
const User =()=>{
    const [test,setTest]=useState([1,2,3,4,5,6]);
    const onClickButton=()=>{
        let newTest=[];
        for(let i=0;i<test.length;i++){
            newTest.push(test[i]+1);
        }
        setTest(newTest);
    }
    const getFunctionReturnObject=()=>{
        let getFunctionReturnObjectHtml=[];
        for(let i=0;i<test.length;i++){
            getFunctionReturnObjectHtml.push(
                <div className={styles.item}>
                    {test[i]}
                </div>
            );
        }
        return getFunctionReturnObjectHtml;
    }
    
    return (
        <div> 
            {getFunctionReturnObject()}
            <div className={styles.button} onClick={onClickButton}> 
            </div>
            在userTest中定义一个数字数组，里面包含6个数字，初始值为10，20，30，40，50，60。设置一个按钮，每次点击这个按钮，对数组中的每个数字减1。将数组中的值按照如图每次进行展示：
        </div>

    )
}
export default User;
