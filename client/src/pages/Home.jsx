export const Home = () =>{
const style = {
    textWrap:"nowrap",
}
return <>
    <main>
        <section>
            <div className="section-hero">
                <div className="container grid grid-two-cols">
                    <div className="hero-content">
                        <p>We are Creative Firm</p>
                        <h1 style={style}>Welcome to My Company</h1>
                        <p className="paragraph">At My Company, we specialize in creating high-quality, 
                           user-friendly websites and applications. With over six 
                           years of experience in web development, our expertise 
                           spans HTML, CSS, JavaScript, React, Node.js, MongoDB, 
                           PHP, and Laravel. We are dedicated to delivering innovative 
                           and scalable solutions tailored to meet your unique needs.</p>
                               <div className="btn btn-grp">
                                    <a href="/contact"><button>Contact Now</button></a>
                                    <a href="/services"><button className="secondary-button">Learn more</button></a>

                               </div>

                    </div>
                    <div className="hero-image">
                        <img src="/images/home.jpg" alt="Coding with my company" width="500" height="auto"/>
                    </div>
                </div>
            </div>
        </section>
    </main>
    
    <section className="section-analytics">
        <div className="container grid grid-four-cols">
            <div className="div1">
                <h2>50+</h2>
                <p>Registered Companies</p>
            </div>

            <div className="div1">
                <h2>500+</h2>
                <p>Happy Clients</p>
            </div>

            <div className="div1">
                <h2>200+</h2>
                <p>Well known Developers</p>
            </div>

            <div className="div1">
                <h2>24/7</h2>
                <p>Services</p>
            </div>
        </div>
    </section>
    
    <section>
    <div className="section-hero">
                <div className="container grid grid-two-cols">
                <div className="hero-image1">
                        <img src="/images/web design.jpeg" alt="Coding with my company" width="500" height="auto"/>
                    </div>

                    <div className="hero-content">
                        <p>We are here to help you</p>
                        <h1 style={style}>Get Started Today</h1>
                        <p className="paragraph">Ready to take your web presence to the next level? 
                            At My Company, we bring over six years of expertise in web development 
                            to create stunning, user-friendly websites and applications tailored to 
                            your unique needs. Our team excels in HTML, CSS, JavaScript, React, Node.js, 
                            MongoDB, PHP, and Laravel, ensuring high-quality and scalable solutions. 
                            Let us help you achieve your digital goals. Contact us today to get started and 
                            transform your vision into reality!</p>
                               <div className="btn btn-grp">
                                    <a href="/contact"><button>Contact Now</button></a>
                                    <a href="/services"><button className="secondary-button">Learn more</button></a>

                               </div>

                    </div>
                    
                </div>
            </div>
    </section>
    
    
    
    </>
};