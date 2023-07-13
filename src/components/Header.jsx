import React from 'react'
import '../styles/components/Header.css';

function Header () {
    return (
        <div className="Header">
            <h1 className="Header-title">Flexx Store</h1>
            <div className="Header-checkout">
            Checkout
            </div>
        </div>
    );
}

export default Header