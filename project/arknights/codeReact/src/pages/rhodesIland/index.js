import React from 'react';
import { connect } from 'dva';
import { DatePicker,Carousel } from 'antd';
import styles from './index.less';
import city5 from '../../image/city5.png';

const contentStyle = {
    width:'200px',
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    color:'red'
  };

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
                
                <Carousel autoplay>
                    <div>
                        <h1 style={contentStyle}>
                            1
                        </h1>
                    </div>
                    <div>
                        <h1 style={contentStyle}>
                            2
                        </h1>
                    </div>
                    <div>
                        <h1 style={contentStyle}>
                            3
                        </h1>
                    </div>
                    <div>
                        <h1 style={contentStyle}>
                            4
                        </h1>
                    </div>
                </Carousel>
                <div className={styles.text}>
                </div>
                
                <div className={styles.centralPicture}>
                </div>
                
                <div className={styles.logoStyle}>
                    <img className={styles.imgArea} src={city5} />
                </div>
                
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
