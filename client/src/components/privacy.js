import React from 'react';
import NavButton from './navButton.js';

export default function Privacy() {
    return (
        <div id="privacy" className="block mx-auto text-white text-left max-w-3xl w-full">
            <h1 className="block mx-auto text-white text-3xl text-left max-w-5xl w-full">COOKIES POLICY</h1>
            <p>Last Updated: 2024-07-31</p>
            <br></br>
            <h2>Introduction</h2>
            <p>Welcome to Tankdle. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy explains how we collect and use your information when you use our website.</p>
            <br></br>
            <h2>Information we collect:</h2>
            <p>We do not collect personal information directly from our users. However, our website uses third-party services like Google Analytics, which may gather data to help us understand how our website is used.</p>
            <br></br>
            <h2>Google Analytics</h2>
            <p>Google Analytics is a service provided by Google that tracks and reports on website traffic. This tool may collect information such as your IP address, browser type and version, the pages you visit, the time and date of your visit, the amount of time spent on those pages, and other relevant data.</p>
            <br></br>
            <h2>Use of Cookies</h2>
            <p>Google Analytics relies on cookies—small files stored on your device—to collect data. These cookies contain an anonymous unique identifier and help us analyze how visitors interact with our website.</p>
            <br></br>
            <h2>How we use your Information</h2>
            <p>The data collected through Google Analytics is used to analyze user interactions with our site and to enhance your experience. We do not have access to personal details through this process, and all data is aggregated and anonymized.</p>
            <br></br>
            <h2>Your Privacy Rights</h2>
            <p>You have the rights to disable cookies or adjust your cookie settings through your browser. However, doing so may effect the functionality of this website.</p>
            <br></br>
            <h2>Data Protection</h2>
            <p>We take appropriate measures to protect any data collected through our website. While we strive to ensure your data is secure, please understand that no online platform can guarantee complete security.</p>
            <br></br>
            <h2>Changes to this policy</h2>
            <p>We may update our privacy policy from time to time. We will notify you of any changes by posting the new policy on this page alongside the date of the latest revision.</p>
            <br></br>
            <h2>Contact</h2>
            <p>If you have any questions about this privacy policy, please contact us at <a href="mailto:temosdev@gmail.com">temosdev@gmail.com</a></p>
            <div className="flex justify-center">
                <NavButton to="/" text1="HOMEPAGE" highlightColour="wgreen" />
            </div>
        </div>
    )
}