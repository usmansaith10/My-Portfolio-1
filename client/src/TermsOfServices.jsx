import React from 'react';

export const TermsOfService = () => {
    return (
        <div className="terms-of-service">
            <header className="terms-header">
                <h1>Terms of Service</h1>
                <p  className="paragraph2" >Effective Date: July 25, 2024</p><br /><br />
            </header>

            <main className="terms-content">
                <section>
                    <h2  className="heading2">1. Introduction</h2><br />
                    <p  className="paragraph2">Welcome to My Company. These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our site, you agree to comply with and be bound by these Terms. If you do not agree with these Terms, please do not use our site.</p><br />
                </section>

                <section>
                    <h2 className="heading2">2. Use of Our Services</h2><br />
                    <p className="paragraph2">You must be at least 18 years old to use our services. You agree to use our services only for lawful purposes and in accordance with these Terms. You must not use our services in any way that could damage, disable, overburden, or impair our site, or interfere with any other party's use of our services.</p><br />
                </section>

                <section>
                    <h2 className="heading2">3. User Accounts</h2><br />
                    <p className="paragraph2">To use certain features of our site, you may be required to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for safeguarding your password and for any activities or actions under your account.</p><br />
                </section>

                <section>
                    <h2 className="heading2">4. Intellectual Property</h2><br />
                    <p className="paragraph2">All content, trademarks, and other intellectual property on our site are the property of My Company or its licensors. You may not use any content from our site without our prior written permission, except as allowed by applicable law.</p><br />
                </section>

                <section>
                    <h2 className="heading2">5. Limitation of Liability</h2><br />
                    <p className="paragraph2">To the fullest extent permitted by law, My Company shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or data, whether in an action in contract or tort, arising from your use of or inability to use our site or services.</p><br />
                </section>

                <section>
                    <h2 className="heading2">6. Termination</h2><br />
                    <p className="paragraph2">We may terminate or suspend your access to our site immediately, without prior notice or liability, if you breach any of these Terms or for any other reason. Upon termination, your right to use our services will immediately cease.</p><br />
                </section>

                <section>
                    <h2 className="heading2">7. Changes to These Terms</h2><br />
                    <p className="paragraph2">We may update our Terms from time to time. We will notify you of any changes by posting the new Terms on our site. You are advised to review these Terms periodically for any changes. Changes to these Terms are effective when they are posted on this page.</p><br />
                </section>

                <section>
                    <h2 className="heading2">8. Governing Law</h2><br />
                    <p className="paragraph2">These Terms shall be governed and construed in accordance with the laws of Your country, without regard to its conflict of law principles. Any legal action or proceeding arising out of or related to these Terms shall be brought exclusively in the courts located in [Your State/Country].</p><br />
                </section>

                <section>
                    <h2 className="heading2">9. Contact Us</h2><br />
                    <p className="paragraph2">If you have any questions about these Terms, please contact us at:</p><br />
                    <address>
                        <p className="paragraph2">Email: <a href="mailto:support@yourcompany.com">support@yourcompany.com</a></p><br />
                        <p className="paragraph2">Address: 123 Your Street, Your City, Your State, 12345, Your Country</p><br />
                    </address>

                    <div className="btn btn-grp">
                                    <a href="/contact"><button>Contact Now</button></a>
                                    <a href="/services"><button className="secondary-button">Learn more</button></a>

                               </div><br /><br />

                </section>
            </main>
        </div>
    );
};
