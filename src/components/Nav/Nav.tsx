import React from "react";
import './Nav.css';

export interface NavProps {
    title: string;
}

const Nav = (props: NavProps) => {
    return (
        <div className='nav-container'>
            <div className='nav-title'>
                <p><strong>{props.title}</strong></p>
            </div>
            <div className='nav-links'>
                <a href='/#services'>Prestations</a>
                <a href='/#about'>A propos</a>
                <a href='/#projects'>Projets</a>
                <a href='/#footer'>
                    <div className='nav-contact'>
                        <button>Me contacter</button>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Nav;