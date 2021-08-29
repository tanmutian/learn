import React,{useCallback, useMomo,useState} from 'react';
import {connect} from 'dva';
import { DatePicker } from 'antd';
import styles from './index.less';
import underTides from '../../image/underTides.jpg'
import getCharater2 from '../../image/getCharater2.jpg'
import clothes1 from '../../image/clothes1.jpg'
import clothes2 from '../../image/clothes2.jpg'
import miningArea from '../../image/miningArea.jpg'
    
// @connect(({ eventDetail }) => ({ eventDetail }))
const EventDetail =()=>{

    return (
		<div className={styles.global}>
			<div className={styles.yellowPart}>
			</div>
			
			<div className={styles.activityName}>
				Second anniversary celebration event
			</div>
			
			<div className={styles.activity1}>
				<img className={styles.imageStyle} src={underTides}/>
				
				<div className={styles.descriptionStyle}>
					Activity description: During the event of [UnderTides], the event level will be open for limited time. Players can receive rewards from the shop by finishing the operations and missions in the activity.
				</div>
				
				<div className={styles.descriptionStyle}>
					Unlocking condition:    pass the main line level 1-10
				</div>
				
				<div className={styles.secondDetail}>
					The activity levels will be carried out in sectional opening:
				</div>
				
				<div className={styles.partDescription}>
					<div className={styles.activityPart}>
						The first part:
					</div>
					
					<div className={styles.time1}>
						May1st 16:00 - May15th 3:59
					</div>
					
					<div className={styles.clear}>
					</div>
				</div>
				
				<div className={styles.partDescription}>
					<div className={styles.activityPart}>
						The second part:
					</div>
					
					<div className={styles.time2}>
						May8th 16:00 - May15th 3:59
					</div>
					
					<div className={styles.clear}>
					</div>
				</div>
				
				
				<div className={styles.clear}>
				</div>
			</div>
			
			
			<div className={styles.activity2}>
				<img className={styles.imageStyle} src={getCharater2}/>
				
				<div className={styles.descriptionStyle}>
					[Deep Drown]The limited-time headhunting open 
				</div>
				
				<div className={styles.descriptionStyle}>
					Event duration: May1st 16:00 - May15th 3:59
				</div>
				
				<div className={styles.secondDetail}>
					Activity description: the Limited-time Headhunting, [Deep Drown] opens and the several Opereators will appear with higer rate from this Standard Headhunting:
				</div>
				
				<div className={styles.character1}>
					★★★★★★: Skadi the Corrupting Heart [limited]/Kal'tsit 
				</div>
				<div className={styles.rate1}>
					(Accounting for 70% of the 6★ output rate)
				</div>
				<div className={styles.character2}>
					★★★★★★: W
				</div>
				<div className={styles.rate2}>
					(Accounting for 30% of the rest of 6★ output rate)
				</div>
				<div className={styles.character3}>
					★★★★★: Akafuyu
				</div>
				<div className={styles.rate3}>
					(Accounting for 50% of 5★ output rate)
				</div>
					
				
				
				
				<div className={styles.clear}>
				</div>
			</div>
			
			<div className={styles.activity3}>
				<img className={styles.imageStyle} src={clothes1}/>
				
				<div className={styles.descriptionStyle}>
					[Bloodline of combat]The limited-time clothes open 
				</div>
				
				<div className={styles.descriptionStyle}>
					Event duration: May1st 16:00 - May15th 3:59
				</div>
				
				<div className={styles.secondDetail}>
					Activity description: the Limited-time clothes, [Bloodline of combat] opens and the several clothes own by the following Opereators will be sold on the clothes shop:
				</div>
				
				<div className={styles.clothes1}>
					Mountain
				</div>
				<div className={styles.textRed} >
					Eunectes
				</div>
				<div className={styles.textRed}>
					Ayerscapper
				</div>
				<div className={styles.textRed}>
					Flint
				</div>
				<div className={styles.textRed}>
					Spot
				</div>
				
				
				
				
				
				<div className={styles.clear}>
				</div>
			</div>
			
			<div className={styles.activity2}>
				<img className={styles.imageStyle} src={clothes2}/>
				
				<div className={styles.descriptionStyle}>
					[Ambience Synesthesia]The limited-time clothes open 
				</div>
				
				<div className={styles.descriptionStyle}>
					Event duration: May1st 16:00 - May15th 3:59
				</div>
				
				<div className={styles.secondDetail}>
					Activity description: the Limited-time clothes, [Ambience Synesthesia] opens and the several clothes own by the following Opereators will be sold on the clothes shop:
				</div>
				
				<div className={styles.clothes1}>
					Blaze
				</div>
				<div className={styles.textRed}>
					Courier
				</div>
				<div className={styles.textRed}>
					Vigna
				</div>
				
				<div className={styles.clear}>
				</div>
			</div>
			
			
			<div className={styles.activity4}>
				<img className={styles.imageStyle} src={miningArea}/>
				
				<div className={styles.descriptionStyle}>
					Event Duration: May1st 16:00 - May15th 3:59
				</div>
				
				<div className={styles.descriptionStyle}>
					Activity description: During the activity, players can mine once in the mining area every day. Players will get 3 kinds of mine after mining in the area and the mine will be directly machining into Synthetic Jade:
				</div>
				
				<div className={styles.clothes1}>
					Originium Coarse ore: 300 to 600 Synthetic Jade
				</div>
				<div className={styles.textRed}>
					Originium mine: 700 to 900 Synthetic Jade
				</div>
				<div className={styles.textRed}>
					Originium mineral vein: 1800 Synethetic Jade
				</div>
				
				<div className={styles.descriptionStyle}>
					Other details: If the player do not find any originium mineral vein in the event, on the last day, there will be an expert who will take the player to the originium mineral vein.
				</div>
				
				
				<div className={styles.clear}>
				</div>
			</div>
			
			<div className={styles.clear}>
			</div>
		</div>
    );
 
}
export default EventDetail;