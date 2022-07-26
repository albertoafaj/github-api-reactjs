import React from 'react'
import { ResetCSS } from '../components/global/resetCSS'
import GithubProvider from './github-provider/GithubProvider'
import App from '../App'

const Providers = () => {
    return (
        <main>
            <GithubProvider>
                <ResetCSS />
                <App />
            </GithubProvider>
        </main>

    )
}

export default Providers
