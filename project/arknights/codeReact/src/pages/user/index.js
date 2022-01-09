import React,{useCallback, useMomo,useState} from 'react';
import { connect } from 'dva';
import { Menu, Dropdown, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import { PoweroffOutlined } from '@ant-design/icons'
import styles from './index.less';


// @connect(({ user }) => ({ user }))
const User =()=>{
    const [test,setTest]=useState([{
        name:'张三',
        age:15,
        address:'上海'
    },{
        name:'李四',
        age:13,
        address:'杭州'
    },{
        name:'王五',
        age:25,
        address:'苏州'
    },{
        name:'赵六',
        age:17,
        address:'天津'
    }]);

    const getFunctionReturnObject=()=>{
        let getFunctionReturnObjectHtml=[];
        for(let i=0;i<test.length;i++){
            getFunctionReturnObjectHtml.push(
                <div className={styles.item}> 
                    <div className={styles.name}> 
                        {test[i].name}
                    </div>
                    <div className={styles.content}> 
                        <div className={styles.age}> 
                            {test[i].age}
                        </div>
                        <div className={styles.address}> 
                            {test[i].address}
                        </div>
                        <div className={styles.clear}> 
                        </div>
                    </div>
                    <div className={styles.clear}> 
                    </div>
                </div>
            );
        }
        return getFunctionReturnObjectHtml;
    }
    
    return (
        <div className={styles.global}> 
            {getFunctionReturnObject()}
            <div className={styles.clear}> 
            </div>
        </div>

    )
}
export default User;
