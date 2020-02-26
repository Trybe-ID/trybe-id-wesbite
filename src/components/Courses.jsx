import React from 'react';

export default class extends React.Component {
    scrollTo(e) {
        if (e.target.hasAttribute('href')) {
            let id = e.target.getAttribute('href').replace('#', '');
            let el = document.getElementById(id);
            document.getElementsByClassName('blg--main-wrapper')[0].scroll(0, el.offsetTop);
            e.preventDefault();
        }
    }

    render() {
        return (
            <section id="Courses">
                <footer>
                    {/* <h3>Our IMPACT Series</h3> */}
                    <p>
                    Trybe.ID features various web components which are powered exclusively by our cloud-based API and microservices.  
                    Trybe.ID has been extensively researched and designed to meet and serve the needs of the growing education digital credentials market. 
                    Of note, Trybe.ID has been developed with integration in mind, consisting of various loosely coupled and modular components.  
                    This design enables ease of integration with existing Student Information Systems or Learning Management Systems as well as strong standalone capabilities.
                    </p>

                    <ul>
                        <li id="COURSE--DEVELOPER-EDUCATION-COURSE">
                            <div className="wrapper">
                                <header>
                                    <h4 className="mdc-elevation--z4">
                                        <div>Trybe.ID</div>
                                        <div>
                                            <strong>CORE COMPONENTS</strong>
                                        </div>
                                    </h4>
                                </header>
                                <footer className="mdc-elevation--z8">
                                    <p>
                                        Web Platform, Wallet and Cloud API which provide functionality for 3 core roles: Issuers, Holders and Verifiers.
                                        <br />
                                        <br />    
                                        Where an <strong>Issuer</strong> is an entity that wishes to create and issues credentials (ie. University or High School), 
                                        a <strong>Holder</strong> is an entity that credentials are issued to (ie. a student) and 
                                        a <strong>Verifier</strong> is an entity that credentials are presented to and accepted / verified by (ie. an employer or recruiter). 
                                    </p>

                                    <h4>
                            <strong>ISSUERS</strong>
                            </h4>
                            <p>
                                Easily manage student / organizational lists and accounts, learning pathways and stackable credentials, 
                                and create, issue and manage credentials.  
                                <br />
                                <br />
                                Recipient Upload. Credential Creation. Credential Issuance.
                            </p>
                            
                            <h4>
                                <strong>HOLDERS</strong>
                            </h4>
                            <p>
                                No downloads or accounts to be created.
                                Unique credential data model, enables credentials to be issued directly to existing email addresses / SSI wallets.  
                                <br />
                                <br />
                                Web based Wallet to manage, store and share their credentials ongoing.
                            </p>                        
                            
                            <h4>    
                                <strong>VERIFIERS</strong>
                            </h4>
                            <p>
                                Web portal is provided to verify and visualize presented credentials.  
                                Verifier may leverage this web utility to verify and visualize the credential.  
                                Cloud API based; easily integrate behind any existing system or service.
                            </p>     

                                </footer>
                            </div>
                        </li>
                    </ul>
                </footer>

                <header>
                    <ul>
                        <li className="mdc-elevation--z16">
                            <header>
                                <div>
                                    <strong>WEB PLATFORM</strong>
                                </div>
                            </header>
                            <div className="delivery-formats">
                                <p>
                                    Credential and relationship management. 
                                    <br />
                                    <br />
                                    Issuing, accepting or verifying credentials.
                                </p>
                                <img src="images/platform.png"/>
                                <br />
                            </div>
                            <footer>
                                <a className="blg-btn" 
                                    // onClick={() => window.open("https://goo.gl/forms/GXbph4lwLEO5ibNy2")}
                                >
                                    WEB PLATFORM
                                </a>
                            </footer>
                        </li>

                        <li className="mdc-elevation--z16">
                            <header>
                                <div>
                                    <strong>WALLET</strong>
                                </div>
                            </header>
                            <p>
                                Easy access and management of credentials and relationships.  
                                100s of credentials and relationships.
                            </p>
                            <img src="images/grey-wallet.png"/>
                            <br />
                            <footer>
                                <a className="blg-btn" 
                                    // onClick={() => window.open("https://goo.gl/forms/GXbph4lwLEO5ibNy2")}
                                >
                                    WALLET
                                </a>
                            </footer>
                        </li>

                        <li className="mdc-elevation--z16">
                            <header>
                                <div>
                                    <strong>CLOUD API</strong>
                                </div>
                            </header>
                            <p>
                                A managed RESTful service for easy integration with other backend services or frontend applications.
                            </p>
                            <img src="images/cloudapi.png"/>
                            <br />
                            <footer>
                                <a className="blg-btn" 
                                    // onClick={() => window.open("https://goo.gl/forms/GXbph4lwLEO5ibNy2")}
                                >
                                    CLOUD API
                                </a>
                            </footer>
                        </li>
                    </ul>                    
                </header>
            </section>
        );
    }
}
















