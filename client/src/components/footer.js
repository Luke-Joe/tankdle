import React from 'react';
import About from './about.js';
import { Link } from 'react-router-dom';
import { Privacy } from './privacy.js';

export default function Footer() {
    return (
        <footer className="mt-4">
            <div className="flex flex-col text-white text-xs space-y-1">
                <span>© {new Date().getFullYear()} Tankdle.com</span>
                <About />
                <Link to="/privacy" className="text-white hover:text-white hover:underline">
                    <span>Privacy Policy</span>
                </Link>
            </div>
        </footer>
    )
}