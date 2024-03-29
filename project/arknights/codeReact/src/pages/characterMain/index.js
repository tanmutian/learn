import React,{useCallback,useMomo,useState} from 'react';
import {connect} from 'dva';
import { DatePicker, Menu, Dropdown, Button, Space } from 'antd';
import styles from './index.less';
import rhodesIland from '../../image/rhodesIland.png'
import longMen from '../../image/longMen.png'
import rhineLab from '../../image/rhineLab.png'
import penguinLogistics from '../../image/penguinLogistics.png'
import { history } from 'umi';
import Navigation from '../../libs/navigation/navigation.js'
import Copyright from '../../libs/copyright/copyright.js'
import Account from '../../libs/account/account.js'
import CharacterMainListItemImgUp from '../../libs/characterMainListItem/characterMainListItem.js'
import CharacterMainListItemImgDown from '../../libs/characterMainListItemImgDown/characterMainListItemImgDown.js'

//@connect(({characterMain}) => ({characterMain}))
const CharacterMain =()=>{

    

    return (
        <div className={styles.global}>
            <Navigation />

            <Account />

            <CharacterMainListItemImgUp 
                imgStyle={{    
                    width:'263px',
                    height:'227px'
                }}
                img = {rhodesIland}
                text = {"It is a pharmaceutical company and working as an expert in solving infected's problems. Deep into dangerous area, it has solved many problems caused by the infected through various means.But now, they need to deal with larger riots of the infected. By moving between the reigons, finding out more inside stories and finding the final answer."}
            />

            <CharacterMainListItemImgDown 
                imgStyle={{    
                    width:'263px',
                    height:'278px'
                }}
                img = {longMen}
                text = {"Longmen is a mobile city-state under the Zhongyan kingdom.It seems to be a city divided and ruled by various internal forces, but there is considerable organizational discipline and harmony among the various levels.Longmen has no obvious political stance and currently takes economic development as its main planning direction."}
            />
            
            <CharacterMainListItemImgUp 
                imgStyle={{    
                    width:'263px',
                    height:'219px'
                }}
                img = {rhineLab}
                text = {"Rhinelab is located in Colombia, committed to life science, chemical manufacturing, biological applications and other fields of technology, as a key support group of Columbia science and technology, involving a wide range of projects, many of the published results have become the focus of attention in the industry."}
            />

            <CharacterMainListItemImgDown 
                imgStyle={{    
                    width:'263px',
                    height:'286px'
                }}
                img = {penguinLogistics}
                text = {"It is an underground logistics organization, with armed escort mechanism, carrying out various transport work.As a mixture of special logistics companies and information merchants, Penguin logistics plays a huge role in resource transportation, information transmission and other confidential actions."}
            />
            

            

            <Copyright />

            <div className={styles.clear}>
            </div>
        </div>
    );
}
export default CharacterMain