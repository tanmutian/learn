import React,{useCallback, useMomo,useState} from 'react';
import {connect} from 'dva';
import { DatePicker } from 'antd';
import styles from './index.less';
import announcement2 from '../../image/announcement2.jpg'
import Navigation from '../../libs/navigation/navigation.js'
import Copyright from '../../libs/copyright/copyright.js'
import Account from '../../libs/account/account.js'
import AnnouncementListItem from '../../libs/AnnouncementListItem/AnnouncementListItem.js'


// @connect(({announcement}) => ({announcement}))
const Announcement =()=>{
	return (
		<div className={styles.global}>
			<Navigation />

			<Account />
						

			<div className={styles.firstArea}>
				<div className={styles.title}>
					Announcement
				</div>
			</div>
			
			<AnnouncementListItem 
				topDate={"March 16, 2021"} 
				bottomLeftImg={announcement2} 
				bottomRightText={"Flash update announcement on March 16"}
			/>
			

			
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
			
			<Copyright />
			
			<div className={styles.clear}>
			</div>
		</div>
	);
 
}
export default Announcement;