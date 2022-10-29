import { NavLink,useMatch } from 'react-router-dom';
import React from 'react';

const CustomLink = ({to,children}) => {
    const match = useMatch(to);

    return (
        <NavLink to={to} 
        style={{color: match ? 'white' : '#BDE5F8'}}>
            {children}
        </NavLink>
    );
};

export default CustomLink;