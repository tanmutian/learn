import React from 'react';
import { connect } from 'dva';
import { DatePicker } from 'antd';
import styles from './index.less';
import city5 from '../../image/city5.png';

@connect(({ rhodesIland }) => ({ rhodesIland }))
class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { rhodesIland } = this.props;
        return (
            <div className={styles.global}>
                <div className={styles.yellowPart}>
                </div>
                
                <div className={styles.text}>
                </div>
                
                <div className={styles.centralPicture}>
                </div>
                
                <img className={styles.logoStyle} src={city5} />
                
                
                <div className={styles.allCharacter}>
                    <div className={styles.arrow}>
                        arrow
                    </div>
                    
                    <div className={styles.pictureStyle}>
                    </div>
                    
                    <div className={styles.pictureStyle}>
                    </div>
                    
                    <div className={styles.pictureStyle}>
                    </div>
                    
                    <div className={styles.pictureStyle}>
                    </div>
                    
                    <div className={styles.pictureStyle}>
                    </div>
                    
                    <div className={styles.arrow}>
                        arrow
                    </div>
                    
                    <div className={styles.clear}>
                    </div>
                </div>
                
                <div className={styles.clear}>
                </div>
            </div>
        );
    }
}
export default App;
