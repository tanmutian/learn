import React from 'react';
import {connect} from 'dva';
import { DatePicker } from 'antd';
import styles from './index.less';
import rhodesIland from '../../image/rhodesIland.png'
import longMen from '../../image/longMen.png'
import rhineLab from '../../image/rhineLab.png'
import penguinLogistics from '../../image/penguinLogistics.png'

@connect(({characterMain2}) => ({characterMain2}))
class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { characterMain } = this.props;
		return (
			<div className={styles.global}>
				<div className={styles.yellow}>
				</div>
				
                <div className={styles.area1}>
                    <div className={styles.picture1}>
                        <img className={styles.pictureArea1} src={rhodesIland} />
                    </div>

                    <div className={styles.textArea1}>
                        text1
                    </div>
                </div>

                <div className={styles.area1}>
                    <div className={styles.textArea1}>
                        text1
                    </div>

                    <div className={styles.picture2}>
                        <img className={styles.pictureArea2} src={longMen} />
                    </div>
                </div>

                <div className={styles.area1}>
                    <div className={styles.picture1}>
                        <img className={styles.pictureArea3} src={rhineLab} />
                    </div>

                    <div className={styles.textArea1}>
                        text1
                    </div>
                </div> 
				
                <div className={styles.area1}>
                    <div className={styles.textArea1}>
                        text1
                    </div>

                    <div className={styles.picture2}>
                        <img className={styles.pictureArea4} src={penguinLogistics} />
                    </div>
                </div>

				<div className={styles.clear}>
				</div>
			</div>
		)
	}
}
export default App;
