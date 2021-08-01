import React from 'react';
import { connect } from 'dva';
import { Button,Tooltip ,Radio, Input, Space,Carousel} from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import { PoweroffOutlined } from '@ant-design/icons'
import styles from './index.less';

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

@connect(({ user }) => ({ user }))
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            value1:1,
            value2:2,
        }
    }

    onChange1 (e){
        this.setState({
            value1:e.target.value
        });
    };

    onChange2 (e){
        this.setState({
          value2: e.target.value,
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
                <div className={styles.button1}>
                <Radio.Group onChange={self.onChange2.bind(self)} value={this.state.value2}>
                 <Space direction="vertical">
                <Radio value={1}>Option A</Radio>
                <Radio value={2}>Option B</Radio>
                <Radio value={3}>Option C</Radio>
                <Radio value={4}>
                    More...
                    {this.state.value2 === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
                </Radio>
                </Space>
                </Radio.Group>
                </div>
                <div className={styles.button1}>
                <Radio.Group defaultValue="a" buttonStyle="solid">
                    <Radio.Button value="a">Hangzhou</Radio.Button>
                    <Radio.Button value="b">Shanghai</Radio.Button>
                    <Radio.Button value="c">Beijing</Radio.Button>
                    <Radio.Button value="d">Chengdu</Radio.Button>
                </Radio.Group>
                </div>
                <div className={styles.button1}>
                    <Carousel autoplay>
                        <div>
                        <h3 style={contentStyle}>1</h3>
                        </div>
                        <div>
                        <h3 style={contentStyle}>2</h3>
                        </div>
                        <div>
                        <h3 style={contentStyle}>3</h3>
                        </div>
                        <div>
                        <h3 style={contentStyle}>4</h3>
                        </div>
                    </Carousel>
                </div>
            </div>
            
        );
    }
}
export default App;
