import React from 'react';
import { ResetCSS } from './components/global/resetCSS';
//import './App.css';
import Layout from './components/layout';
import Profile from './components/profile';


function App() {
  return (
    <main>
      <ResetCSS/>
      <Layout>

        <Profile></Profile>
        <div>Repositers</div>
        <div>Starred</div>
      </Layout>
    </main>
  );
}

export default App;
