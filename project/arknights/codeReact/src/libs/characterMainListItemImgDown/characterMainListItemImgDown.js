import React from 'react';
import { connect } from 'dva';
import styles from './characterMainListItemImgDown.less';



const CharacterMainListItemImgDown =({imgStyle, img, text})=>{
    return (
        <div className={styles.area1}>
            <div className={styles.textArea1}>
                {text}
            </div>

            <div className={styles.picture2}>
                <img 
                    src={img}
                    style={imgStyle}
                 />
            </div>
        </div>
    )
        

    
}

export default CharacterMainListItemImgDown