import React from 'react'
import * as S from './styled'

function Layout({ children }) {
    return (
        <>
            <S.WrapperLayout>
                <header>
                    <input type="text" placeholder='Digite o username para pesquisa...' />
                    <button>Buscar</button>
                </header>
                {children}
            </S.WrapperLayout>
        </>
    )
}

export default Layout
