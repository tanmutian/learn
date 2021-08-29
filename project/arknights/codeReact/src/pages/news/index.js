import React,{useCallback, useMomo,useState} from 'react';
import {connect} from 'dva';
import { DatePicker } from 'antd';
import styles from './index.less';
import notice from '../../image/notice.png'
    
// @connect(({ news }) => ({ news }))
const News =()=>{

    return (
		<div className={styles.global1}>
			<div className={styles.yellow}>
			</div>
			
			
			<div className={styles.global2}>
				<div className={styles.title}>
					Latest News
				</div>
			</div>
			
			<div className={styles.totalArea}>
				<div className={styles.date}>
					February 21, 2021
				</div>
			
				<div className={styles.line}>
				</div>
				
				
				
				<div className={styles.noticeArea}>
				
					<img className={styles.imageRight} src={notice}/>
					
					
					<div className={styles.textRight}>
						Message from the production team #9
					</div>
					
					<div className={styles.clear}>
					</div>
					
				</div>
				
				
				<div className={styles.clear}>
				</div>
			</div>
			
			<div className={styles.totalArea}>
				<div className={styles.dateLeft}>
					January 11, 2021
				</div>
			
				<div className={styles.lineLeft}>
				</div>
				
				<div className={styles.noticeArea}>
				
					<img className={styles.imageLeft} src={notice}/>
					
					<div className={styles.messageLeft}>
						Message from the production team #8
					</div>
					
					<div className={styles.clear}>
					</div>
					
				</div>
				
				
				<div className={styles.clear}>
				</div>
			</div>
			
			<div className={styles.totalArea}>
				<div className={styles.date}>
					December 03, 2020
				</div>
			
				<div className={styles.line}>
				</div>
				
				<div className={styles.noticeArea}>
				
					<img className={styles.imageRight} src={notice}/>
					
					<div className={styles.textRight}>
						Message from the production team #7
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
    );
 
}
export default News;