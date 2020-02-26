import React from 'react';

export default class extends React.Component {
    render() {
        return (
            <section id="AboutUs">
                <div />
                <div>
                    <header>
                        <article>
                            <h4>
                                <strong>CORE COMPONENTS</strong>
                            </h4>
                            <p>
                                Web Platform, Wallet and Cloud API which provide functionality for 3 core roles: Issuers, Holders and Verifiers.
                                <br />
                                <br />    
                                Where an <strong>Issuer</strong> is an entity that wishes to create and issues credentials (ie. University or High School), 
                                a <strong>Holder</strong> is an entity that credentials are issued to (ie. a student) and 
                                a <strong>Verifier</strong> is an entity that credentials are presented to and accepted / verified by (ie. an employer or recruiter). 
                            </p>
                        </article>
                    </header>

                    <footer>
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
            </section>
        );
    }
}
