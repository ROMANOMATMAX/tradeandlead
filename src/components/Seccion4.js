import React from 'react';
import styled, { keyframes } from 'styled-components';
import { bounceInRight } from 'react-animations';
import LoginForm from './LoginForm';

const bounceAnimation = keyframes`${bounceInRight}`;

const BouncyDiv = styled.div`
    background: blue;
    animation: 1s ${bounceAnimation};
`;

const LoginContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

const Login = styled.section`
    background-color: #FFF;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const RightSideContainer = styled.section`
    background-color: #red;
    height: 100vh;
`


const Seccion4 = () => {
    return (  
        <BouncyDiv>
            <LoginContainer>
                <Login>
                    <LoginForm/>
                </Login>
                <RightSideContainer></RightSideContainer>
            </LoginContainer>
        </BouncyDiv>
    );
}
 
export default Seccion4;