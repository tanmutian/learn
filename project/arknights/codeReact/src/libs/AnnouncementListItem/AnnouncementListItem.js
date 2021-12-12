import React from 'react';
import { connect } from 'dva';
import styles from './announcementListItem.less';
import announcement2 from '../../image/announcement2.jpg'

const AnnouncementListItem =({topDate,bottomLeftImg,bottomRightText})=>{
    return (
        <div className={styles.area}>
            <div className={styles.textStyle}>
                {topDate}
            </div>
                    
            <div className={styles.line}>
            </div>
                        
            <div className={styles.outside}>
                        
                <img className={styles.imgStyle} src={bottomLeftImg}/>
                            
                            
                <div className={styles.description}>
                    {bottomRightText}
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


