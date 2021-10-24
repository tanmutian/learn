import React from 'react';
import { connect } from 'dva';
import styles from './account.less';
import account from '../../image/account.png'

const Account =()=>{
    return (
        <div className={styles.account}>
            <img className={styles.accountImg} src={account}/>

            <div className={styles.logIn}>
                Log In
            </div>

            <div className={styles.signIn}>
                Sign In
            </div>				
        </div>
    )
        

    
}

export default Account

