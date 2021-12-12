import React from 'react';
import { connect } from 'dva';
import styles from './newsListItem.less'
import notice from '../../image/notice.png'


const NewsListItem =({date, img, text})=>{
    return (
        <div className={styles.totalArea}>
				<div className={styles.dateLeft}>
					{date}
				</div>
			
				<div className={styles.lineLeft}>
				</div>
				
				<div className={styles.noticeArea}>
				
					<img className={styles.imageLeft} src={img}/>
					
					<div className={styles.messageLeft}>
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

export default NewsListItem