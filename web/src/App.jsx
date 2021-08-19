import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import HeaderComponent from "./components/Header/Header";
import Layout from 'antd/lib/layout';
import TransactionsList from "./components/Body/TransactionsList/TransactionsList";


function App() {
    return (
        <div className="App">
            <Layout>
                <HeaderComponent/>
                <TransactionsList/>
            </Layout>
        </div>
    );
}

export default App;
