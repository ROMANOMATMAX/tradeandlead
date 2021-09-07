import React from 'react';
import styled, { keyframes } from 'styled-components';
import { bounceInRight } from 'react-animations';

const bounceAnimation = keyframes`${bounceInRight}`;

const BouncyDiv = styled.div`
    background: blue;
    animation: 1s ${bounceAnimation};
`;

const Seccion3 = () => {
    return (  
        <BouncyDiv>
            <h1>Seccion 3</h1>
        </BouncyDiv>
    );
}
 
export default Seccion3;