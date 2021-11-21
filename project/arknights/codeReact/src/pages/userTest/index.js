import React,{useCallback, useMomo,useState} from 'react';
import { connect } from 'dva';
import { Menu, Dropdown, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import { PoweroffOutlined } from '@ant-design/icons'
import styles from './index.less';


// @connect(({ user }) => ({ user }))
const User =()=>{

    return (
        <div className={styles.global}>
            <div className={styles.totalArea}>
                <div className={styles.Section}>
                    <div className={styles.nameTag}>
                        Name
                    </div>
                    <div className={styles.name}>
                        Tony
                    </div>  
                    <div className={styles.clear}>
                    </div>
                </div>

                <div className={styles.Section}>
                    <div className={styles.rank}>
                        Highest Rank
                    </div>
                    <div className={styles.rank}>
                        Gold-4
                    </div>
                    <div className={styles.rank}>
                        Present Rank
                    </div>
                    <div className={styles.rank}>
                        Gold-2
                    </div>
                    <div className={styles.clear}>
                    </div>
                </div>

                <div className={styles.Section}>
                    <div className={styles.jobTag}>
                        Job
                    </div>
                    <div className={styles.job}>
                        Leader and Commander
                    </div> 
                    <div className={styles.clear}>
                    </div>
                </div>

                <div className={styles.clear}>
                </div>
            </div>

            <div className={styles.totalArea}>
                <div className={styles.Section}>
                    <div className={styles.nameTag}>
                        Name
                    </div>
                    <div className={styles.name}>
                        Victor
                    </div>  
                    <div className={styles.clear}>
                    </div>
                </div>

                <div className={styles.Section}>
                    <div className={styles.rank}>
                        Highest Rank
                    </div>
                    <div className={styles.rank}>
                        Gold-3
                    </div>
                    <div className={styles.rank}>
                        Present Rank
                    </div>
                    <div className={styles.rank}>
                        Gold-1
                    </div>
                    <div className={styles.clear}>
                    </div>
                </div>

                <div className={styles.Section}>
                    <div className={styles.jobTag}>
                        Job
                    </div>
                    <div className={styles.job}>
                        Striker
                    </div> 
                    <div className={styles.clear}>
                    </div>
                </div>

                <div className={styles.clear}>
                </div>
            </div>


            <div className={styles.totalArea}>
                <div className={styles.Section}>
                    <div className={styles.nameTag}>
                        Name
                    </div>
                    <div className={styles.name}>
                        Steven
                    </div>  
                    <div className={styles.clear}>
                    </div>
                </div>

                <div className={styles.Section}>
                    <div className={styles.rank}>
                        Highest Rank
                    </div>
                    <div className={styles.rank}>
                        Gold-2
                    </div>
                    <div className={styles.rank}>
                        Present Rank
                    </div>
                    <div className={styles.rank}>
                        Gold-1
                    </div>
                    <div className={styles.clear}>
                    </div>
                </div>

                <div className={styles.Section}>
                    <div className={styles.jobTag}>
                        Job
                    </div>
                    <div className={styles.job}>
                        Free man and Secondary Sniper
                    </div> 
                    <div className={styles.clear}>
                    </div>
                </div>

                <div className={styles.clear}>
                    </div>
            </div>
            
            <div className={styles.clear}>
            </div>
        </div>

    )
}
export default User;