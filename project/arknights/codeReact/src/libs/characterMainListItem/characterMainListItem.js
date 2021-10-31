import React from 'react';
import { connect } from 'dva';
import styles from './characterMainListItem.less';
import announcement2 from '../../image/announcement2.jpg'
import rhodesIland from '../../image/rhodesIland.png'

const CharacterMainListItemImgUp =({imgStyle, img, text})=>{
    return (
        <div className={styles.area1}>
            <div className={styles.picture1}>
                <img 
                    className={styles.pictureArea1} 
                    src={img} 
                    style={imgStyle} 
                />
            </div>

            <div className={styles.textArea2}>
                {text}
            </div>
         </div>
    )
        

    
}

export default CharacterMainListItemImgUp


