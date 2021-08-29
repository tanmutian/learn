import React,{useCallback, useMomo,useState} from 'react';
import {connect} from 'dva';
import { DatePicker } from 'antd';
import styles from './index.less';
import newCharacter1 from '../../image/newCharacter1.jpg'
import activity1 from '../../image/activity1.jpg'
import defenceActivity from '../../image/defenceActivity.jpg'

// @connect(({ latestEvent }) => ({ latestEvent }))
const LatestEvent =()=>{

    return (
		<div className={styles.global}>
			<div className={styles.yellow}>
			</div>
			
			<div className={styles.titleArea}>
				<div className={styles.title}>
					Latest Events
				</div>
			</div>
			
			
			<div className={styles.totalArea}>
				<div className={styles.date}>
					2021.03.09
				</div>
			
				<div className={styles.line}>
				</div>
				
				<div className={styles.clear}>
				</div>
			</div>
			
			<div className={styles.displayArea}>
				<div className={styles.activity}>
					[Attack, Defence and Tactical Collide] The limited-time headhunting open  
				</div>
				
				<div className={styles.outsideArea}>
					<div className={styles.insideArea}>
						<div className={styles.imgArea}>
							<img className={styles.imgStyle} src={newCharacter1}/>
						</div>
						
						
						<div className={styles.descriptionArea}> 
							<div className={styles.text1}>
								During the event of [Arknights × Rainbow Six], the Limited-time Headhunting, "Attack, Defence and Tactical Collide" opens and the several Opereators will appear with higer rate from this Standard Headhunting:
							</div>
							
							<div className={styles.character1}>
								★★★★★★: Ash
							</div>
							<div className={styles.character2}>
								★★★★★: Frost
							</div>
							<div className={styles.character2}>
								★★★★★: Blitz
							</div>
							
							<div className={styles.clear}>
							</div>
						</div>
						
						<div className={styles.clear}>
						</div>
					</div>
				</div>
				<div className={styles.clear}>
				</div>
			</div>
			
			
			<div className={styles.totalArea}>
				<div className={styles.date}>
					2021.03.09
				</div>
			
				<div className={styles.line}>
				</div>
				
				<div className={styles.clear}>
				</div>
			</div>
			
			<div className={styles.displayArea}>
				<div className={styles.activity}>
					[Arknights × Rainbow Six] limited-time activity starts now
				</div>
				
				<div className={styles.outsideArea}>
					<div className={styles.insideArea}>
						<div className={styles.imgArea}>
							<img className={styles.imgStyle} src={activity1}/>
						</div>
						
						
						<div className={styles.descriptionArea}>
							<div className={styles.text2}>
								The event of Originium Dust Operation is open for a limited time. Players can obtain event rewards by clearing event stages, completing the missions, and redeeming from event shop. 
							</div>
							
							<div className={styles.greenText}>
								The further missions will be allowed to play 7 days after the activity start
							</div>
							
							<div className={styles.clear}>
							</div>
						</div>
						
						<div className={styles.clear}>
						</div>
					</div>
				</div>
				
				<div className={styles.clear}>
				</div>
			</div>
			
			<div className={styles.totalArea}>
				<div className={styles.date}>
					2021.03.09
				</div>
			
				<div className={styles.line}>
				</div>
				
				<div className={styles.clear}>
				</div>
			</div>
			
			<div className={styles.displayArea}>
				<div className={styles.activity}>
					[Arknights × Rainbow Six] limited-time activity starts now
				</div>
				<div className={styles.outsideArea}>
					<div className={styles.insideArea}>
						<div className={styles.imgArea}>
							<img className={styles.imgStyle} src={defenceActivity}/>
						</div>
						
						
						<div className={styles.descriptionArea}>
							<div className={styles.text2}>
								The event of Defence Protocols will be open for a limited time. Players can start a mission by  matching strangers, inviting or joining your friends. Completing the missions, players can redeeming the rewards from the shops.
							</div>
							
							
							
							<div className={styles.clear}>
							</div>
						</div>
						
						<div className={styles.clear}>
						</div>
					</div>
				</div>
				
				<div className={styles.clear}>
				</div>
			</div>
			
			
			<div className={styles.totalArea}>
				<div className={styles.date}>
					2021.03.03
				</div>
			
				<div className={styles.line}>
				</div>
				
				<div className={styles.clear}>
				</div>
			</div>
			
			<div className={styles.displayArea}>
				<div className={styles.activity}>
					[Arknights × Rainbow Six] limited-time activity is coming soon
				</div>
				
				<div className={styles.outsideArea}>
					<div className={styles.insideArea}>
						<div className={styles.imgArea}>
							<img className={styles.imgStyle} src={activity1}/>
						</div>
						
						
						<div className={styles.descriptionArea}>
							<div className={styles.text2}>
								The event of Originium Dust Operation will be open for a limited time a few days later. More information will be given when the event begin 
							</div>
							
							
							
							<div className={styles.clear}>
							</div>
						</div>
						
						<div className={styles.clear}>
						</div>
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
export default LatestEvent;