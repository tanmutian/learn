import React from 'react';
import { connect } from 'dva';
import { Button,Tooltip ,Radio} from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import { PoweroffOutlined } from '@ant-design/icons'
import styles from './index.less';

@connect(({ user }) => ({ user }))
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            value1:1,
        }
    }

    onChange1 (e){
        console.log('radio checked', e.target.value);
        this.setState({
            value1:e.target.value
        });
    };

    render() {
        let  self=this;
        const { user } = this.props;
        return (
            <div className={styles.user_global}>
                <div className={styles.button1}>
                    <Button type="primary">
                         按钮实例
                    </Button> 
                </div>
                <div  className={styles.button1}>
                    <Button>
                        默认的按钮
                    </Button>
                </div>
                <div className={styles.button1}>
                    <Tooltip title="search">
                        <Button type="primary" shape="square" icon={<SearchOutlined />}>
                        </Button>
                    </Tooltip>
                </div>
                <div className={styles.button1}>
                    <Button type="primary" danger>
                        123
                    </Button>
                </div>
                <div className={styles.button1}>
                    <Button type="text" danger>
                        Don't Click
                    </Button>
                </div>
                <div className={styles.button1}>
                    <Button type="primary" block>
                        Click me
                    </Button>
                </div>
                <div className={styles.button1}>
                    <Button type="ghost">
                        hided
                    </Button>
                </div>
                <div className={styles.button1}>
                    <Button type="primary" loading>
                        please wait
                    </Button>
                </div>
                <div className={styles.button1}>
                    <Button type="primary" icon={<PoweroffOutlined />} loading >
                    </Button>
                </div>
                <div className={styles.button1}>
                    <Radio>
                        choose me
                    </Radio>
                </div>
                <div className={styles.button1}>
                <Radio.Group onChange={self.onChange1.bind(self)} value={this.state.value1}>
                    <Radio value={1}>A</Radio>
                    <Radio value={2}>B</Radio>
                    <Radio value={3}>C</Radio>
                    <Radio value={4}>D</Radio>
                </Radio.Group>
                </div>
            </div>
        );
    }
}
export default App;
