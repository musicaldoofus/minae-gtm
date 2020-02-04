import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import linksConfig from '../../../helpers/linksConfig';
import './Nav.css';

const Nav = () => {
    const location = useLocation();

    const links = useMemo(() => {
        return linksConfig.map(({path, label}) => {
            const isActive = location.pathname === path;
            return (
                <div key={path} className={`nav-link${isActive ? ' active' : ''}`}>
                    <Link to={path}>
                        <span>{label}</span>
                    </Link>
                </div>
            );
        })
    }, [location]);

    return (
        <nav>
            <div className="nav-inner-container">
                <div className="nav-brand">
                    <Link to="/"></Link>
                </div>
                <div className="nav-links-container">
                    {links}
                </div>
            </div>
        </nav>
    );
}

export default Nav;