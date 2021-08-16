import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import HeaderComponent from "./components/Header/Header";
import Layout from 'antd/lib/layout';

function App() {
    return (
        <div className="App">
            <Layout>
                <HeaderComponent/>
            </Layout>
        </div>
    );
}

export default App;
