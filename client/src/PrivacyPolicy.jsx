import React from 'react';
import './PrivacyPolicy.css';
export const PrivacyPolicy = () => {
    return (
        <div className="privacy-policy">
            <header className="privacy-header">
                <h1>Privacy Policy</h1><br /><br />
                <p className="effective-date">Effective Date: July 25, 2024</p><br /><br />
            </header>

            <main className="privacy-content">
                <section>
                    <h2 className="text-size">1. Introduction</h2><br />
                    <p>Welcome to our website. This Privacy Policy explains how we collect, use, 
                        and protect your information when you visit our site. By using our website, 
                        you agree to the practices described in this policy.</p><br /><br />
                </section>

                <section>
                    <h2 className="text-size">2. Information We Collect</h2><br />
                    <p>We collect the following types of information:</p><br /><br />
                    <ul>
                        <li><strong>Personal Information:</strong> Information you provide directly, such as your name and email address.</li><br /><br />
                        <li><strong>Usage Data:</strong> Information about your visit to our site, including IP address, browser type, and pages viewed.</li><br /><br />
                    </ul><br /><br />
                </section>

                <section>
                    <h2 className="text-size">3. How We Use Your Information</h2><br />
                    <p>We use the information we collect to:</p><br /><br />
                    <ul className='bullets'>
                        <li>Improve our website and services.</li><br />
                        <li>Respond to your inquiries and provide customer support.</li><br /><br />
                        <li>Analyze website usage and trends.</li><br /><br />
                    </ul>
                </section>

                <section>
                    <h2 className="text-size">4. Cookies and Tracking Technologies</h2><br />
                    <p>We use cookies and similar technologies to enhance your experience on our site. 
                        Cookies are small files stored on your device that help us remember your preferences 
                        and understand how you interact with our website.</p><br /><br />
                </section>

                <section>
                    <h2 className="text-size">5. Data Security</h2><br />
                    <p>We implement reasonable security measures to protect your information from unauthorized access, 
                        alteration, disclosure, or destruction. However, no method of transmission over the internet or 
                        electronic storage is completely secure.</p><br /><br />
                </section>

                <section>
                    <h2 className="text-size">6. Third-Party Links</h2><br />
                    <p>Our website may contain links to third-party sites. We are not responsible for the privacy practices
                        or content of these external sites. Please review their privacy policies before providing any information.</p><br /><br />
                </section>

                <section>
                    <h2 className="text-size">7. Changes to This Privacy Policy</h2><br />
                    <p>We may update this Privacy Policy from time to time. 
                        Any changes will be posted on this page with an updated effective date. 
                        Please check this page periodically for any updates.</p><br /><br />
                </section>

                <section>
                    <h2 className="text-size">8. Contact Us</h2><br />
                    <p>If you have any questions about this Privacy Policy, please contact us at:</p><br /><br />
                    <address>
                        <p>Email: <a href="mailto:support@mycompany.com">support@mycompany.com</a></p>
                        <p>Address: 123 Your Street, Your City, Your State, 12345, Your Country</p><br /><br />
                    </address>

                    <div className="btn btn-grp">
                                    <a href="/contact"><button>Contact Now</button></a>
                                    <a href="/services"><button className="secondary-button">Learn more</button></a>

                               </div>
                               
                </section>
            </main>
        </div>
    );
};
