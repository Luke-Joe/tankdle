import React from 'react';
import About from '../pages/about.js';
import { Link } from 'react-router-dom';
import HowToPlay from '../pages/howToPlay.js';

export default function Footer() {
    return (
        <footer className="mt-4">
            <div className="flex flex-col text-white text-xs space-y-1">
                <span>© {new Date().getFullYear()} Tankdle.ca</span>
                <HowToPlay />
                <About />
                <Link to="/privacy" className="text-white hover:text-white hover:underline">
                    <span>Privacy Policy</span>
                </Link>
            </div>
        </footer>
    )
}