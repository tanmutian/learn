import React,{useCallback,useMomo,useState} from 'react';
import {connect} from 'dva';
import { DatePicker } from 'antd';
import styles from './index.less';
import originiums from '../../image/originiums.jpg'
import reunion from '../../image/reunion.jpg'
import mortalCity from '../../image/mortalCity.jpg'
import infected from '../../image/infected.jpg'
import originiumArt from '../../image/originiumArt.jpg'
import rhodesLand from '../../image/rhodesLand.jpg'

//@connect(({background}) => ({background}))
const Background =()=>{

	return (
		<div className={styles.global}>
			<div className={styles.yellow}>
			</div>
			
			
			<div className={styles.titleArea}>
				<div className={styles.title}>
					background
				</div>
			</div>
			
			<div className={styles.totalArea}>
				<div className={styles.firstImg}>
					<div className={styles.position1}>
						<img className={styles.imgStyle1} src={originiums}/>
					</div>
				</div>
				
				<div className={styles.secondArea}>
					<div className={styles.position2}>
						<img className={styles.imgStyle2} src={reunion}/>
					</div>
					
					<div className={styles.position3}>
						<img className={styles.imgStyle3} src={mortalCity}/>
					</div>
					
					<div className={styles.clear}>
					</div>
				</div>
				
				<div className={styles.thirdArea}>
					<div className={styles.position4}>
						<img className={styles.imgStyle4} src={originiumArt}/>
					</div>
					
					<div className={styles.position5}>
						<img className={styles.imgStyle5} src={infected}/>
					</div>
					
					<div className={styles.position6}>
						<img className={styles.imgStyle6} src={rhodesLand}/>
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

export default Background