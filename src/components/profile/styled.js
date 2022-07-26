import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;

`;

export const WrapperInfoUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    h1 {
        font-size: 32px;
        font-weight: bold;
        margin-top: 8px;
    }

    @media (max-width: 576px) {  
    h1 {
        max-width: 90%;
        //height: 50%;
        font-size: 24px ;
        }
    }
    
    
    
    `;

export const WrapperImg = styled.img`
    border-radius: 50%;
    width: 10%;
    max-width: 200px;
    margin: 10px;
    `;

export const WrapperStatusCount = styled.div`
    display: flex;
    align-items: center;
    div {
        margin: 8px;
        text-align: center;
    }
    
    `;

export const WrapperUserGeneric = styled.div`
    display: flex;
    align-items: center;
    margin: 8px;
    h3{
        font-weight: bold;
        margin-right: 8px;
        font-size: 18px;
        min-width: 25%;   
    }

    a {
        color: blue;
        font-size: 18px;
        word-wrap: break-word;

    }
    
    @media (max-width: 576px) {  
    a {
        max-width: 60%;
        //height: 50%;
        font-size: 14px ;
    }
    h3 {
        font-size: 14px ;

    }
    }


`;