import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {
    render() {
        return (
            <header className="navbar">
                <div className="logo">
                    <a href="./index.html">
                        <img
                            src="/the_plug_logo.jpg"
                            alt="The Plug Logo" 
                        />
                    </a>
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                    <button>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>

                <button className="menu-button">
                    <FontAwesomeIcon icon={faBars} />
                </button>

                <ul className="menu">
                    <li><a href="./review.html">Write a review</a></li>
                    <li><a href="./login.html">Login</a></li>
                    <li><a href="./signup.html">Signup</a></li>
                </ul>
            </header>
        );
    }
}

export default Header;