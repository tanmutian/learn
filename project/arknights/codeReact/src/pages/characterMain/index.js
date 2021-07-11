import React from 'react';
import {connect} from 'dva';
import { DatePicker } from 'antd';
import styles from './index.less';
import city1 from '../../image/city1.png'
import city2 from '../../image/city2.png'
import city3 from '../../image/city3.png'
import city4 from '../../image/city4.png'
import city5 from '../../image/city5.png'
import city6 from '../../image/city6.png'
import city7 from '../../image/city7.png'
import city8 from '../../image/city8.png'

@connect(({characterMain}) => ({characterMain}))
class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { characterMain } = this.props;
		return (
			<div className={styles.global2}>
				<div className={styles.yellow}>
				</div>
				
				
				<div className={styles.firstBackground}>
					<img className={styles.imgStyle} src={city1}/>
				</div>
				
				<div className={styles.background}>
					<img className={styles.imgStyle} src={city2}/>
				</div>
				
				<div className={styles.background}>
					<img className={styles.imgStyle} src={city7}/>
				</div>
				
				<div className={styles.background}>
					<img className={styles.imgStyle} src={city5}/>
				</div>
				
				<div className={styles.background}>
					<img className={styles.imgStyle} src={city6}/>
				</div>
				
				<div className={styles.background}>
					<img className={styles.imgStyle} src={city8}/>
				</div>
				
				<div className={styles.background}>
					<img className={styles.imgStyle} src={city4}/>
				</div>
				
				<div className={styles.background}>
					<img className={styles.imgStyle} src={city3}/>
				</div>
				
				<div className={styles.clear}>
				</div>
			</div>
		)
	}
}
export default App;
