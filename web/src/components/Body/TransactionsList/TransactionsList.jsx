import React from 'react';
import Layout from 'antd/lib/layout';
import Button from 'antd/lib/button';
import List from 'antd/lib/list';
import {DeleteOutlined, EditOutlined, PlusOutlined} from '@ant-design/icons';
import {Affix} from "antd";

const {Content} = Layout;

class TransactionsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            transactions: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/transactions')
            .then(res => res.json())
            .then(json => this.setState({transactions: json}));
    }

    render() {
        console.log(this.state)
        return (
            <List
                size={'large'}
                bordered
                dataSource={this.state.transactions}
                itemLayout='horizontal'
                renderItem={(item) =>
                    <List.Item actions={[
                        <Button shape="circle" icon={<EditOutlined/>}/>,
                        <Button shape="circle" icon={<DeleteOutlined/>}/>,
                    ]}>
                        <span><b>{item.type}</b></span>
                        <span>{item.description}</span>
                        <span>{item.sum}</span>
                        <span>{new Date(item.date).toDateString()}</span>
                    </List.Item>}
                footer={
                    <Affix offsetBottom={10} style={{position: 'relative', left: '46%'}}>
                        <Button shape="circle" type="primary" icon={<PlusOutlined/>}/>
                    </Affix>}
            >
            </List>
        );
    }
}

export default TransactionsList;