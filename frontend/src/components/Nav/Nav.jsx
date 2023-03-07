import React from 'react';
import { DivNav, DivMenu, ANavLink, NavButton, NavDivResponsive, DivNavMain, NavResponsiveBtn, NavMenuResponsive, NavLinkResponsive } from './StyleNav';
import { useLocation } from 'react-router-dom';



export default function Nav(props) {//props.handleAddChar  (funcion), props.handleChange
    const location = useLocation().pathname
    const [dropdown, setDropDown] = React.useState(false);

    const handleDropDown = () => {
        if(dropdown) {
            setDropDown(false)
        } else {
            setDropDown(true)
        }
    }

    React.useEffect(() => {
        return () => {
            setDropDown(false);
        };
    }, [location]);

    return (
        <>
           {location !== '/' ?
           <DivNav>
                <DivMenu>
                    <DivNavMain>                        
                        <ANavLink to={'/home'} >Home</ANavLink>
                        <ANavLink to={'/favorites'}>Favorites</ANavLink>
                        <ANavLink to={'/about'} >About</ANavLink>
                    </DivNavMain>
                    <NavDivResponsive>
                        <NavResponsiveBtn onClick={handleDropDown}><i className="fa-solid fa-bars"></i></NavResponsiveBtn>
                        <NavMenuResponsive active={dropdown}>
                            <NavLinkResponsive to={'/home'} >Home</NavLinkResponsive>
                            <NavLinkResponsive to={'/favorites'}>Favorites</NavLinkResponsive>
                            <NavLinkResponsive to={'/about'} >About</NavLinkResponsive>
                        </NavMenuResponsive>
                    </NavDivResponsive>
                    <NavButton onClick={props.logout}>Logout</NavButton>
                </DivMenu>                
            </DivNav> 
           :
           ''}
        </>
    );
};