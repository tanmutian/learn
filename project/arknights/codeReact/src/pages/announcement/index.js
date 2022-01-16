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

	const[data,setData]=useState([{
		topDate:"March 16, 2021",
		bottomLeftImg:announcement2,
		bottomRightText:"Flash update announcement on March 16"
	},{
		topDate:"March 09, 2021",
		bottomLeftImg:announcement2,
		bottomRightText:"Repair instructions for abnormal conditions on March 09"
	},{
		topDate:"March 09, 2021",
		bottomLeftImg:announcement2,
		bottomRightText:"Downtime maintenance for the new version"
	},])

	const arrange =()=>{
		let arrangement=[];
		for(let i=0;i<data.length;i++){
			arrangement.push(
				<AnnouncementListItem 
					topDate={data[i].topDate} 
					bottomLeftImg={data[i].bottomLeftImg} 
					bottomRightText={data[i].bottomRightText}
				/>
			)
		}
		return arrangement;
	}

	return (
		<div className={styles.global}>
			<Navigation />

			<Account />
						

			<div className={styles.firstArea}>
				<div className={styles.title}>
					Announcement
				</div>
			</div>
			
			{arrange()}
			
			<Copyright />
			
			<div className={styles.clear}>
			</div>
		</div>
	);
 
}
export default Announcement;