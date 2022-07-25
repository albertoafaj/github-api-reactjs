import React from 'react';
import { ResetCSS } from './components/global/resetCSS';
//import './App.css';
import Layout from './components/layout';
import Profile from './components/profile';
import Repositories from './components/repositories';
import GithubProvider from './providers/github-provider/GithubProvider';

function App() {
  return (
    <main>
      <GithubProvider>
        <ResetCSS />
        <Layout>
          <Profile></Profile>
          <Repositories />
        </Layout>
      </GithubProvider>
    </main>
  );
}

export default App;
