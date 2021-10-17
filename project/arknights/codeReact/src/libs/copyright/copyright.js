import React from 'react';
import { connect } from 'dva';
import styles from './copyright.less';
import logo from '../../image/logo.png'

const Copyright =()=>{
    return (
        <div>
            <div className={styles.copyrightLine}>
            </div>    
            <div className={styles.copyright}>
                <div className={styles.logo}>
                    <img className={styles.logoStyle} src={logo}/>
                </div>
                <div className={styles.copyrightText}>
                    Developer: Mutian Tan
                </div>
                <div className={styles.copyrightText2}>
                    The present game mode: 1.5.81
                </div>
                <div className={styles.copyrightText3}>
                    The latest update: 17/9/2021
                </div>
                <div className={styles.copyrightText}>
                    Loacation: 666, Xinhua Road, Changning District, Shanghai. Telepone number:181-1723-5737. E-mail address: tanmutian@126.com. QQ number:2628918369
                </div>
            </div> 
        </div>  
    )
        

    
}

export default Copyright
