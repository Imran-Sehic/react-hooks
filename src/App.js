import './App.css';
import React from "react";
import Header from "./components/Header";
import Items from "./components/Items";
import {Layout} from "./components";

function App() {
  return (
    <div className="App">
        <Layout width={'45vw'} margin={'0 auto'} background={'#e3e9ff'}>
            <Header />
            <Items />
        </Layout>
    </div>
  );
}

export default App;
