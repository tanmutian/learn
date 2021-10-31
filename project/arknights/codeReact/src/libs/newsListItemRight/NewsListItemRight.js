import React from 'react';
import { connect } from 'dva';
import styles from './NewsListItemRight.less'
import notice from '../../image/notice.png'


const NewsListItemRight =({date, img, text})=>{
    return (
        <div className={styles.totalArea}>
			<div className={styles.date}>
					{date}
			</div>
			
			<div className={styles.line}>
			</div>
				
				
				
			<div className={styles.noticeArea}>
			
				<img className={styles.imageRight} src={img}/>
				
					
				<div className={styles.textRight}>
					{text}
				</div>
					
				<div className={styles.clear}>
				</div>
					
			</div>
				
				
			<div className={styles.clear}>
			</div>
		</div>
    )
        

    
}

export default NewsListItemRight