import React from 'react'
import ReposItem from '../repository-item'
import * as S from './styled'

function Repositories() {
  return (
    <S.WrapperTabs
      selectedTabClassName='is-selected'
      selectedTabPanelClassName='is-selected'
    >
      <S.WrapperTabList>
        <S.WrapperTab>Repositories</S.WrapperTab>
        <S.WrapperTab>Starred</S.WrapperTab>
      </S.WrapperTabList>
      <S.WrapperTabPanel>
        <ReposItem
          name='"name":state"'
          linkToRepo="html_url"
          fullName="full_name: state"
        />
      </S.WrapperTabPanel>
      <S.WrapperTabPanel>
        <ReposItem
          name='repo1'
          linkToRepo=''
          fullName=''
        />
      </S.WrapperTabPanel>

    </S.WrapperTabs>
  )
}

export default Repositories
