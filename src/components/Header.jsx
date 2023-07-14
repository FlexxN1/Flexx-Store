import React from 'react'
import {Link} from 'react-router-dom';
import '../styles/components/Header.css';

function Header () {
    return (
        <div className="Header">
            <h1 className="Header-title">
                <Link to='/'>
                    Flexx Store
                </Link>
            </h1>
            <div className="Header-checkout">
                <Link to='/checkout'>
                    <i className="fas fa-shopping-basket fa-2x" title="Checkout"/>
                </Link>
            </div>
        </div>
    );
}

export default Header