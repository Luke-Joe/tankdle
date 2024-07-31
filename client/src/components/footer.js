import React from 'react';
import About from './about.js';

export default function Footer() {
    return (
        <footer className="mt-4">
            <div className="flex flex-col text-white text-xs space-y-1">
                <span>© {new Date().getFullYear()} Tankdle.com</span>
                <About />
                <span>Privacy Policy</span>
            </div>
        </footer>
    )
}