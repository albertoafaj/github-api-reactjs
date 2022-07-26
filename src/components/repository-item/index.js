import React from 'react'
import * as S from './styled'

function ReposItem({ name, linkToRepo, fullName }) {
  return (
    <S.Wrapper>
      <div>
        <S.WrapperTitle>{name}</S.WrapperTitle>
        <S.WrapperFullName>Full name:</S.WrapperFullName>
        <S.WrapperLink 
          href={linkToRepo} 
          target="_black" 
          rel="noreferrer">{fullName}
        </S.WrapperLink>
      </div>
    </S.Wrapper>
  )
}

export default ReposItem
