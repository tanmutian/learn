import React from 'react';
import { connect } from 'dva';
import { DatePicker,Carousel } from 'antd';
import styles from './index.less';
import city5 from '../../image/city5.png';
import amiya from '../../image/amiya.png';
import kaltsit from '../../image/kaltsit.png';
import blaze from '../../image/blaze.png';
import rosmontis from '../../image/rosmontis.png';

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

                <div className={styles.contentMain}>
                    <Carousel autoplay>
                        <div className={styles.contentStyle}>
                            <div className={styles.text}>
                                The leader of the rhodesIland, with the highest executive power.
                            </div>

                            <div className={styles.centralPicture}>
                                <img  className={styles.pictureArea} src={amiya}/>
                            </div> 
                            
                            <div className={styles.logoStyle}>
                                <img className={styles.imgArea} src={city5} />
                            </div>
                        </div>

                        <div className={styles.contentStyle}>
                            <div className={styles.text}>
                                The leader of the rhodesIland, with the highest executive power.
                            </div>

                            <div className={styles.centralPicture}>
                                <img  className={styles.pictureArea3} src={kaltsit}/>
                            </div> 
                            
                            <div className={styles.logoStyle}>
                                <img className={styles.imgArea} src={city5} />
                            </div>
                        </div>

                        <div className={styles.contentStyle}>
                            <div className={styles.text}>
                                The leader of the rhodesIland, with the highest executive power.
                            </div>

                            <div className={styles.centralPicture}>
                                <img  className={styles.pictureArea2} src={blaze}/>
                            </div> 
                            
                            <div className={styles.logoStyle}>
                                <img className={styles.imgArea} src={city5} />
                            </div>
                        </div>
                        <div className={styles.contentStyle}>
                           <div className={styles.text}>
                                The leader of the rhodesIland, with the highest executive power.
                            </div>

                            <div className={styles.centralPicture}>
                                <img  className={styles.pictureArea4} src={rosmontis}/>
                            </div> 
                            
                            <div className={styles.logoStyle}>
                                <img className={styles.imgArea} src={city5} />
                            </div>
                        </div>
                    </Carousel>
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
