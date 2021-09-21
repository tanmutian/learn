import React,{useCallback,useMomo,useState} from 'react';
import {connect} from 'dva';
import { DatePicker, Menu, Dropdown, Button, Space } from 'antd';
import styles from './index.less';
import rhodesIland from '../../image/rhodesIland.png'
import longMen from '../../image/longMen.png'
import rhineLab from '../../image/rhineLab.png'
import penguinLogistics from '../../image/penguinLogistics.png'
import { history } from 'umi';
import Test from '../../libs/test/test.js';

//@connect(({characterMain}) => ({characterMain}))
const CharacterMain =()=>{
    const historyLatestEvents =()=>{
        history.push('/latestEvents')
    }

    const historyNews =()=>{
        history.push('/News')
    }

    const historyAnnouncement =()=>{
        history.push('/announcement')
    }

    const historyRhodesIland =()=>{
        history.push('/rhodesIland')
    }

    const menuEvents = (
        <Menu>
            <Menu.Item>
            <div onClick={historyLatestEvents} className={styles.dropDown} target="_blank" rel="noopener noreferrer">
                Latest Events
            </div>
            </Menu.Item>
            <Menu.Item>
            <div onClick={historyNews} className={styles.dropDown} target="_blank" rel="noopener noreferrer" >
                News
            </div>
            </Menu.Item>
            <Menu.Item>
            <div onClick={historyAnnouncement} className={styles.dropDown} target="_blank" rel="noopener noreferrer" >
                announcement
            </div>
            </Menu.Item>
        </Menu>
    );

    const menuCharacter = (
        <Menu>
            <Menu.Item>
            <div onClick={historyRhodesIland} className={styles.dropDown} target="_blank" rel="noopener noreferrer">
                RhodesIsLand
            </div>
            </Menu.Item>
            <Menu.Item>
            <div className={styles.dropDown} target="_blank" rel="noopener noreferrer" >
                Longmen
            </div>
            </Menu.Item>
            <Menu.Item>
            <div className={styles.dropDown} target="_blank" rel="noopener noreferrer" >
                Rhine Lab
            </div>
            </Menu.Item>
            <Menu.Item>
            <div className={styles.dropDown} target="_blank" rel="noopener noreferrer" >
                Penguin Logistics
            </div>
            </Menu.Item>
        </Menu>
    );
    

    return (
        <div className={styles.global}>
            <div className={styles.yellow}>
                <Dropdown overlay={menuEvents} placement="bottomCenter">
                    <div className={styles.content1}>
                        Events and news
                    </div>
                </Dropdown>

                <div className={styles.content2}>
                     Background
                </div>

                <Dropdown overlay={menuCharacter} placement="bottomCenter">
                    <div className={styles.content2}>
                        Operator data
                    </div>
                </Dropdown> 
            </div>
            <Test />
            <div className={styles.area1}>
                <div className={styles.picture1}>
                    <img className={styles.pictureArea1} src={rhodesIland} />
                </div>

                <div className={styles.textArea2}>
                    It is a pharmaceutical company and working as an expert in solving infected's problems. 
                    Deep into dangerous area, it has solved many problems caused by the infected through various means.
                    But now, they need to deal with larger riots of the infected. By moving between the reigons, finding out more inside stories and finding the final answer.
                </div>
            </div>

            <div className={styles.area1}>
                <div className={styles.textArea1}>
                    Longmen is a mobile city-state under the Zhongyan kingdom.
                    It seems to be a city divided and ruled by various internal forces, but there is considerable organizational discipline and harmony among the various levels.
                    Longmen has no obvious political stance and currently takes economic development as its main planning direction.
                </div>

                <div className={styles.picture2}>
                    <img className={styles.pictureArea2} src={longMen} />
                </div>
            </div>

            <div className={styles.area1}>
                <div className={styles.picture1}>
                    <img className={styles.pictureArea3} src={rhineLab} />
                </div>

                <div className={styles.textArea2}>
                Rhinelab is located in Colombia, committed to life science, chemical manufacturing, biological applications and other fields of technology, 
                as a key support group of Columbia science and technology, involving a wide range of projects, many of the published results have become the focus of attention in the industry.
                </div>
            </div> 
            
            <div className={styles.area1}>
                <div className={styles.textArea1}>
                    It is an underground logistics organization, with armed escort mechanism, carrying out various transport work.
                    As a mixture of special logistics companies and information merchants, Penguin logistics plays a huge role in resource transportation, information transmission and other confidential actions.
                </div>

                <div className={styles.picture2}>
                    <img className={styles.pictureArea4} src={penguinLogistics} />
                </div>
            </div>

            <div className={styles.clear}>
            </div>
        </div>
    );
}
export default CharacterMain