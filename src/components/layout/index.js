import React from 'react'
import useGithub from '../../hooks/githubHooks'
import Header from '../header/Header'
import * as S from './styled'


function Layout({ children }) {
    return (
        <>
            <S.WrapperLayout>
                <Header />  
                {githubState.loading ? <p>Loading</p> : <> {children}</>}
            </S.WrapperLayout>
        </>
    )
}

export default Layout
