import React from 'react';
import * as S from './styled';

function Profile() {
    return (
        <S.Wrapper>
            <>
                <S.WrapperImg src="https://avatars.githubusercontent.com/u/45070086?v=4" alt="User picture" />
                <S.Wrapper>

                    <S.WrapperInfoUser>
                        <div>
                            <h1>Alberto Araújo Jr</h1>
                            <S.WrapperUserName>
                                <h3>Username:</h3>
                                <a href='https://api.github.com/users/albertoafaj' target="_black" rel='noreferrer'>albertoafaj</a>
                            </S.WrapperUserName>
                            <S.WrapperUserName>
                                <h3>Company:</h3>
                                <a href='https://api.github.com/users/albertoafaj' target="_black" rel='noreferrer'>N/A</a>
                            </S.WrapperUserName>
                            <S.WrapperUserName>
                                <h3>Location:</h3>
                                <a href='https://api.github.com/users/albertoafaj' target="_black" rel='noreferrer'>Camaçari/BA</a>
                            </S.WrapperUserName>
                            <S.WrapperUserName>
                                <h3>Blog:</h3>
                                <a href='https://www.linkedin.com/in/alberto-araújo-996a01186/' target="_black" rel='noreferrer'>Https://...</a>
                            </S.WrapperUserName>
                            
                        </div>
                    <S.WrapperStatusCount>
                        <div>
                            <h4>Followers</h4>
                            <span>5</span>
                        </div>
                        <div>
                            <h4>Followings</h4>
                            <span>5</span>
                        </div>
                        <div>
                            <h4>Gits</h4>
                            <span>5</span>
                        </div>
                        <div>
                            <h4>Repos</h4>
                            <span>5</span>
                        </div>
                    </S.WrapperStatusCount>
                    </S.WrapperInfoUser>
                </S.Wrapper>
            </>
        </S.Wrapper>
    )
}

export default Profile
