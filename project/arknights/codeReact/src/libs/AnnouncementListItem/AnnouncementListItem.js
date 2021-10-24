import React from 'react';
import { connect } from 'dva';
import styles from './AnnouncementListItem.less';
import announcement2 from '../../image/announcement2.jpg'

const AnnouncementListItem =()=>{
    return (
        <div className={styles.area}>
            <div className={styles.textStyle}>
                March 16, 2021
            </div>
                    
            <div className={styles.line}>
            </div>
                        
            <div className={styles.outside}>
                        
                <img className={styles.imgStyle} src={announcement2}/>
                            
                            
                <div className={styles.description}>
                    Flash update announcement on March 16
                </div>
                            
                <div className={styles.clear}>
                </div>
                            
            </div>
                        
                        
            <div className={styles.clear}>
            </div>
        </div>
    )
        

    
}

export default AnnouncementListItem


