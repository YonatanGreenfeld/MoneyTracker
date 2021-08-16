import React from 'react';
import Layout from 'antd/lib/layout';
import './Header.css'

const {Header} = Layout;

function HeaderComponent() {
    return (
        <Header>
            <div className="logo" />
        </Header>
    )
}

export default HeaderComponent;