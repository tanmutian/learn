import React,{useCallback, useMomo,useState} from 'react';
import {connect} from 'dva';
import { DatePicker } from 'antd';
import styles from './index.less';
import announcement2 from '../../image/announcement2.jpg'

// @connect(({announcement}) => ({announcement}))
const Announcement =()=>{
	return (
		<div className={styles.global}>
			<div className={styles.yellow}>
			</div>
			
			
			<div className={styles.firstArea}>
				<div className={styles.title}>
					Announcement
				</div>
			</div>
			
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
			
			<div className={styles.area}>
				<div className={styles.textStyle}>
					March 09, 2021
				</div>
			
				<div className={styles.line}>
				</div>
				
				<div className={styles.outside}>
				
					<img className={styles.imgStyle} src={announcement2}/>
					
					<div className={styles.description}>
						Repair instructions for abnormal conditions on March 09
					</div>
					
					<div className={styles.clear}>
					</div>
					
				</div>
				
				
				<div className={styles.clear}>
				</div>
			</div>
			
			<div className={styles.area}>
			
				
				<div className={styles.followOutside}>
				
					<img className={styles.imgStyle} src={announcement2}/>
					
					<div className={styles.description}>
						Downtime maintenance for the new version
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
export default Announcement;