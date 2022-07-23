import React from 'react';
import './App.css';
import Layout from './components/layout';
import Profile from './components/profile';

function App() {
  return (
    <main>
      <Layout>

        <Profile></Profile>
        <div className='Repositers'>Repositers</div>
        <div className='Starreds'>Starred</div>
      </Layout>
    </main>
  );
}

export default App;
