import React from 'react';
import * as S from './styled';

function Profile() {
    return (
        <S.Wrapper>
            <div>
                <img src="https://avatars.githubusercontent.com/u/45070086?v=4" alt="User picture" />
                <h1>Alberto Araújo Jr</h1>
                <h3>Username:</h3>
                <span>albertoafaj</span>
                <h3>Company:</h3>
                <span>N/A</span>
                <h3>Location:</h3>
                <span>Camaçari/BA</span>
                <h3>Blog:</h3>
                <span>Https://...</span>
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
            </div>
        </S.Wrapper>
    )
}

export default Profile
