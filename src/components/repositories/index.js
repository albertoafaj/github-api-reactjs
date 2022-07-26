import React, { useEffect, useState } from 'react';
import ReposItem from '../repository-item';
import * as S from './styled';
import useGithub from '../../hooks/githubHooks'

function Repositories() {
  const { githubState, getUserRepos, getUserStarred } = useGithub();

  const [hasUserFortSerchRepos, setHasUserFortSerchRepos] = useState(false)

  useEffect(() => {
    if (githubState.user.login) {
      getUserRepos(githubState.user.login);
      getUserStarred(githubState.user.login);
    }

    setHasUserFortSerchRepos(!!githubState.repositories);
  }, [githubState.user.login]);

  return (
    <>
      {hasUserFortSerchRepos ? (

        <S.WrapperTabs
          selectedTabClassName='is-selected'
          selectedTabPanelClassName='is-selected'
        >
          <S.WrapperTabList>
            <S.WrapperTab>Repositories</S.WrapperTab>
            <S.WrapperTab>Starred</S.WrapperTab>
          </S.WrapperTabList>
          <S.WrapperTabPanel>
            <S.WrapperList>

            {githubState.repositories.map((item) => (
              <ReposItem
                key={item.id}
                name={item.name}
                linkToRepo={item.full_named}
                fullName={item.full_name}
              />
            ))}
            </S.WrapperList>
          </S.WrapperTabPanel>
          <S.WrapperTabPanel>
            <S.WrapperList>
            {githubState.starred.map((item) => (
              <ReposItem
                key={item.id}
                name={item.name}
                linkToRepo={item.full_named}
                fullName={item.full_name}
              />
            ))}
            </S.WrapperList>
          </S.WrapperTabPanel>

        </S.WrapperTabs>
      ) : (
        <></>
      )}
    </>
  );
};

export default Repositories
