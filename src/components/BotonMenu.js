import React from 'react';
import {useHistory} from 'react-router-dom'
import styled from '@emotion/styled' 

const IconContainer = styled.div`
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    color: white;
    transition: all 0.5s ease;
    cursor: pointer;
    &:hover {
        color: black;
    }
`

const BotonMenu = ({icono, goto}) => {
    const history = useHistory();

    const goToSeccion = goto => {
        history.push(goto)
    }

    return (  
        <IconContainer
            onClick={() => goToSeccion(goto)}
        >
            {icono}
        </IconContainer>
    );
}
 
export default BotonMenu;