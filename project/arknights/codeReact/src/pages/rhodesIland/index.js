import React,{useCallback, useMomo,useState} from 'react';
import { connect } from 'dva';
import { DatePicker,Carousel } from 'antd';
import styles from './index.less';
import rhodesIsland from '../../image/rhodesIland.png';
import amiya from '../../image/amiya.png';
import kaltsit from '../../image/kaltsit.png';
import blaze from '../../image/blaze.png';
import rosmontis from '../../image/rosmontis.png';
import Navigation from '../../libs/navigation/navigation.js'
import Copyright from '../../libs/copyright/copyright.js'
import Account from '../../libs/account/account.js'
import RhodesIslandList from '../../libs/rhodesIsland/rhodesIslandList.js'

// @connect(({ rhodesIland }) => ({ rhodesIland }))
const rhodesIland =()=>{

    return (
        <div className={styles.global}>
            <Navigation />

            <Account />

            <div className={styles.contentMain}>
                <Carousel autoplay>
                    <RhodesIslandList 
                        text = {"The leader of the rhodesIland, with the highest executive power. Although,she outwardly seemed only an immature girl, in fact, she is a trusted and qualified leader.Now, amiya is leading the rhodesIland fighting for the future of the infected and for the world getting rid of the affection of the orginuium disease."}
                        img = {amiya}
                        pictureArea = {{
                            width:'300px',
                            height:'400px',
                            marginLeft:'50px'
                        }}
                        logoArea = {{
                            width:'271px',
                            height:'254px'
                        }}
                        logo = {rhodesIsland}
                    />
                    
                    <RhodesIslandList 
                        text = {"Kaltsit, one of the senior management and the leader of the medical project of the rhodesIland. She has profound knowledge in many fields of study and work as a medical staff provided some medical theories and machines in some missions.Also, she will work as an improtant member of the command of the rhodesIland in each projects."}
                        img = {kaltsit}
                        pictureArea = {{
                            width:'225px',
                            height:'400px',
                            marginLeft:'87px'
                        }}
                        logoArea = {{
                            width:'271px',
                            height:'254px'
                        }}
                        logo = {rhodesIsland}
                    />
                    
                    
                    <RhodesIslandList 
                        text = {"Blaze, elite operator of the rhodesIland, she has demonstrated professional combat skills and combat accomplishment in various battles.Now, leading by amiya, acting as a key member of the elite team. "}
                        img = {blaze}
                        pictureArea = {{
                            width:'200px',
                            height:'400px',
                            marginLeft:'100px'
                        }}
                        logoArea = {{
                            width:'271px',
                            height:'254px'
                        }}
                        logo = {rhodesIsland}
                    />
                    

                    <RhodesIslandList 
                        text = {"Rosmontis, elite operator of the rhodesIland, master the use of extremely rare originium art which used to fighting with huge object.She shows great battlefield control and tactical value in various battles.Now is leading by kaltsit, acting as the core promoter of the annihilation."}
                        img = {rosmontis}
                        pictureArea = {{
                            width:'245px',
                            height:'400px',
                            marginLeft:'77px'
                        }}
                        logoArea = {{
                            width:'271px',
                            height:'254px'
                        }}
                        logo = {rhodesIsland}
                    />
                </Carousel>
            </div>

            <Copyright />
            
            <div className={styles.clear}>
            </div>
        </div>
    );
 
}
export default rhodesIland;