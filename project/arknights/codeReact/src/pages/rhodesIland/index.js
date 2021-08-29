import React,{useCallback, useMomo,useState} from 'react';
import { connect } from 'dva';
import { DatePicker,Carousel } from 'antd';
import styles from './index.less';
import rhodesIsland from '../../image/rhodesIland.png';
import amiya from '../../image/amiya.png';
import kaltsit from '../../image/kaltsit.png';
import blaze from '../../image/blaze.png';
import rosmontis from '../../image/rosmontis.png';

// @connect(({ rhodesIland }) => ({ rhodesIland }))
const rhodesIland =()=>{

    return (
        <div className={styles.global}>
            <div className={styles.yellowPart}>
            </div>

            <div className={styles.contentMain}>
                <Carousel autoplay>
                    <div className={styles.contentStyle}>
                        <div className={styles.text}>
                        The leader of the rhodesIland, with the highest executive power. 
                        Although,she outwardly seemed only an immature girl, in fact, she is a trusted and qualified leader.
                        Now, amiya is leading the rhodesIland fighting for the future of the infected and for the world getting rid of the affection of the orginuium disease.
                        </div>

                        <div className={styles.centralPicture}>
                            <img  className={styles.pictureArea} src={amiya}/>
                        </div> 
                        
                        <div className={styles.logoStyle}>
                            <img className={styles.imgArea} src={rhodesIsland} />
                        </div>
                    </div>

                    <div className={styles.contentStyle}>
                        <div className={styles.text}>
                        Kaltsit, one of the senior management and the leader of the medical project of the rhodesIland. 
                        She has profound knowledge in many fields of study and work as a medical staff provided some medical theories and machines in some missions.
                        Also, she will work as an improtant member of the command of the rhodesIland in each projects.
                        </div>

                        <div className={styles.centralPicture}>
                            <img  className={styles.pictureArea3} src={kaltsit}/>
                        </div> 
                        
                        <div className={styles.logoStyle}>
                            <img className={styles.imgArea} src={rhodesIsland} />
                        </div>
                    </div>

                    <div className={styles.contentStyle}>
                        <div className={styles.text}>
                        Blaze, elite operator of the rhodesIland, she has demonstrated professional combat skills and combat accomplishment in various battles.
                        Now, leading by amiya, acting as a key member of the elite team. 
                        </div>

                        <div className={styles.centralPicture}>
                            <img  className={styles.pictureArea2} src={blaze}/>
                        </div> 
                        
                        <div className={styles.logoStyle}>
                            <img className={styles.imgArea} src={rhodesIsland} />
                        </div>
                    </div>
                    <div className={styles.contentStyle}>
                    <div className={styles.text}>
                            Rosmontis, elite operator of the rhodesIland, master the use of extremely rare originium art which used to fighting with huge object.
                            She shows great battlefield control and tactical value in various battles.
                            Now is leading by kaltsit, acting as the core promoter of the annihilation.
                        </div>

                        <div className={styles.centralPicture}>
                            <img  className={styles.pictureArea4} src={rosmontis}/>
                        </div> 
                        
                        <div className={styles.logoStyle}>
                            <img className={styles.imgArea} src={rhodesIsland} />
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
export default rhodesIland;