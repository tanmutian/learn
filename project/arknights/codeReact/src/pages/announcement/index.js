import React,{useCallback, useMomo,useState} from 'react';
import {connect} from 'dva';
import { DatePicker } from 'antd';
import styles from './index.less';
import announcement2 from '../../image/announcement2.jpg'
import Navigation from '../../libs/navigation/navigation.js'

// @connect(({announcement}) => ({announcement}))
const Announcement =()=>{
	return (
		<div className={styles.global}>
			<Navigation />
			
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

			<div className={styles.copyrightLine}>
			</div>
			
			<div className={styles.copyright}>
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
					loacation: 666, Xinhua Road, Changning District, Shanghai. telepone number:181-1723-5737.
				</div>
			</div>
			
			<div className={styles.clear}>
			</div>
		</div>
	);
 
}
export default Announcement;