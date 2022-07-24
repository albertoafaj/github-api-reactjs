import React from 'react';
import { ResetCSS } from './components/global/resetCSS';
//import './App.css';
import Layout from './components/layout';
import Profile from './components/profile';
import Repositories from './components/repositories';


function App() {
  return (
    <main>
      <ResetCSS/>
      <Layout>

        <Profile></Profile>
        <Repositories />
      </Layout>
    </main>
  );
}

export default App;
