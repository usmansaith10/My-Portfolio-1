import { useAuth } from './auth';
import './services.css';

export const Services = () => {
    const { services } = useAuth();

    return (
        <section className="section-services">
            <div className="container">
                <h1 className="main-heading">
                    Services
                </h1>
            </div>

            <div className="container grid three-cols">
                {services.length > 0 ? (
                    services.map((curElem, index) => {
                        const { price, description, provider, service } = curElem;

                        return (
                            <div className="card" key={index}>
                                <div className="card-img">
                                    <img src="/images/service.png" alt="Our Services info" width="300px"  />
                                </div>

                                <div className="card-details">
                                    <div className="space">
                                    <h2>Service: {service}</h2>
                                    <p>Description: {description}</p>
                                </div>
                                    <p>Price: {price}</p>
                                    <p>Provider: {provider}</p>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p>No services available</p>
                )}
                
            </div>
     
            <div className="service-button">
                                    <a href="/contact"><button>Contact Now</button></a>
                                    <a href="/services"><button className="secondary-button">Learn more</button></a>

                               </div>
        </section>
    );
};
