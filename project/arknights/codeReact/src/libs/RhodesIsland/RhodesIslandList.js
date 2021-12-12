import React from 'react';
import { connect } from 'dva';
import styles from './rhodesIslandList.less'
import notice from '../../image/notice.png'


const RhodesIslandList =({logoArea, pictureArea, img, text, logo})=>{
    return (
        <div className={styles.contentStyle}>
            <div className={styles.text}>
                {text}
            </div>

            <div className={styles.centralPicture}>
                <img  style={pictureArea} src={img}/>
            </div> 
                        
            <div className={styles.logoStyle}>
                <img style={logoArea} src={logo} />
            </div>
         </div>       
    )
        

    
}

export default RhodesIslandList