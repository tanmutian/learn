import React,{useCallback, useMomo,useState} from 'react';
import { connect } from 'dva';
import { Menu, Dropdown, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import { PoweroffOutlined } from '@ant-design/icons'
import styles from './index.less';


// @connect(({ user }) => ({ user }))
const User =()=>{
    const [arrayTest, setArrayTest]=useState([{
        name: 'Tony',
        highestRank: 'Gold-4',
        presentRank:'Gold-2',
        job: 'leader and commander'
    },{
        name: 'Victor',
        highestRank: 'Gold-3',
        presentRank:'Gold-2',
        job: 'break through'
    },{
        name: 'Steven',
        highestRank: 'Gold-2',
        presentRank:'Gold-1',
        job: 'free man and scondary sniper'
    },{
        name: 'Henry',
        highestRank: 'Gold-4',
        presentRank:'Gold-1',
        job: 'primary sniper'
    },{
        name: 'Eric',
        highestRank: 'Gold-1',
        presentRank:'Silver-Elite',
        job: 'break through'
    }]);
    const [sentence, setSentence]=useState([
        'The name of the team member is: ',
        'The highest rank he reached was: ',
        'The present rank of him is: ',
        'The job he does in the team is: '
    ])
    const [theAnswer, setTheAnswer]=useState('');
    const [count, setCount]=useState(0);
    const firstButton =()=>{        
        let firstSentence=sentence[0]+arrayTest[count].name+'. ';
        let secondSentence=sentence[1]+arrayTest[count].highestRank+'. ';
        let thirdSentence=sentence[2]+arrayTest[count].presentRank+'. ';
        let forthSentence=sentence[3]+arrayTest[count].job+'. ';
        let newAnswer= firstSentence+secondSentence+thirdSentence+forthSentence;
        setTheAnswer(newAnswer);
        if(count==4){
            setCount(0);
        }else{
            setCount(count+1);
        }      
    }
    return (
        <div>
            <div className={styles.text}>
                {theAnswer}
            </div>
            <div className={styles.button} onClick={firstButton}>
                CLICK ME!
            </div>
        </div>

    )
}
export default User;