import React from 'react'

function Layout({children}) {
  return (
    <>
      <header>
        <input type="text" placeholder='Digite o username para pesquisa...' />
        <button>Buscar</button>
      </header>
      {children}
    </>
  )
}

export default Layout
