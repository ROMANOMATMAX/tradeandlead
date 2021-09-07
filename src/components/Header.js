import React from 'react';
import styled from '@emotion/styled' 
import BotonMenu from './BotonMenu';
import {useHistory} from 'react-router-dom'

const NavbarContainer = styled.nav`
    display: flex;
    flex-direction: column;
    width: 100px;
    justify-content: space-around;
    align-items: center;
`
const HomeIcon = () => (
    <i className="fas fa-home"></i>
);

const AddressIcon = () => (
    <i className="fas fa-address-book"></i>
);

const CoffeIcon = () => (
    <i class="fas fa-coffee"></i>
);

const SignInIcon = () => (
    <i class="fas fa-sign-in-alt"></i>
);

const Header = () => {
    return (
       <NavbarContainer>
            <BotonMenu
                icono={<HomeIcon/>}
                goto="/"
            />
            <BotonMenu
                icono={<AddressIcon/>}
                goto="/seccion2"
            />
            <BotonMenu
                icono={<CoffeIcon/>}
                goto="/seccion3"
            />
            <BotonMenu
                icono={<SignInIcon/>}
                goto="/seccion4"
            />
       </NavbarContainer>
      );
}
 
export default Header;