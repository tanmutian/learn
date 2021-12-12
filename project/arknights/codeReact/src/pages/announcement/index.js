import React,{useCallback, useMomo,useState} from 'react';
import {connect} from 'dva';
import { DatePicker } from 'antd';
import styles from './index.less';
import announcement2 from '../../image/announcement2.jpg'
import Navigation from '../../libs/navigation/navigation.js'
import Copyright from '../../libs/copyright/copyright.js'
import Account from '../../libs/account/account.js'
import AnnouncementListItem from '../../libs/announcementListItem/announcementListItem.js'


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
			

			<AnnouncementListItem
				topDate={"March 09, 2021"}
				bottomLeftImg={announcement2}
				bottomRightText={"Repair instructions for abnormal conditions on March 09"}
			/>
			
			<AnnouncementListItem 
				topDate={"March 09, 2021"}
				bottomLeftImg={announcement2}
				bottomRightText={"Downtime maintenance for the new version"}
			/>
			
			<Copyright />
			
			<div className={styles.clear}>
			</div>
		</div>
	);
 
}
export default Announcement;