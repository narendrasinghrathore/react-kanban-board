import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';
export default function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Dashboard</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
}