import React from 'react';
import { connect } from 'dva';
import { DatePicker, Menu, Dropdown, Button, Space } from 'antd';
import styles from './navigation.less';
import { history } from 'umi';


const Navigation =()=>{
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

    const historyBackground =()=>{
        history.push('/background')
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

    return(
        <div className={styles.yellow}>
            <Dropdown overlay={menuEvents} placement="bottomCenter">
                <div className={styles.content1}>
                    Events and news
                </div>
            </Dropdown>

            <div className={styles.content2} onClick={historyBackground}>
                 Background
            </div>

            <Dropdown overlay={menuCharacter} placement="bottomCenter">
                <div className={styles.content2}>
                    Operator data
                </div>
            </Dropdown> 
        </div>
    );
}

export default Navigation