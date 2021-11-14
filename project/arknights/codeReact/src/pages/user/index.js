import React,{useCallback, useMomo,useState} from 'react';
import { connect } from 'dva';
import { Menu, Dropdown, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import { PoweroffOutlined } from '@ant-design/icons'
import styles from './index.less';


// @connect(({ user }) => ({ user }))
const User =()=>{
    const [test,setTest]=useState(100);
    const onClickButton=()=>{
        let newTest=test+1;
        setTest(newTest);
    }
    
    return (
        <div> 
            <div>
                {test}
                {/* 初始状态是数组
                        [{
                            name:'张三',
                            age:16,
                        }，
                        {
                            name:'李四',
                            age:17,
                        }]
                点击按钮，往数组里面新增一项，值随意,在html里面是数组中name的以逗号分隔的字符串

                张三，李四  */}
            </div> 
            
            <div className={styles.button} onClick={onClickButton}> 
            </div>
        </div>

    )
}
export default User;
