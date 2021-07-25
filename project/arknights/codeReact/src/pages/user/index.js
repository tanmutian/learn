import React from 'react';
import { connect } from 'dva';
import { Button,Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import styles from './index.less';

@connect(({ user }) => ({ user }))
class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
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
            </div>
        );
    }
}
export default App;
