import React from 'react';

export default class extends React.Component {
    render() {
        return (
            <section id="ContactUs">
                <address>
                    <div>Looking to find out more information please feel free to reach out directly at: 
                        <br />
                        contactus@convergence.tech
                        <br />
                        <strong><a href="https://convergence.tech">Convergence.tech</a></strong>
                    </div>
                    <div className="logos">
                        <div>
                            <img alt="trybe.id" src="images/white-trybeID.png" style={{ height: '70px', padding: '0.618rem 1rem' }} />
                        </div>
                    </div>
                </address>
                {/* <div className="social">
                    <a target="_blank" rel="noopener noreferrer" className="linkedin" href="https://ca.linkedin.com/company/blockchainlearninggroup"></a>
                    <a target="_blank" rel="noopener noreferrer" className="twitter" href="https://twitter.com/BlockchainLG"></a>
                    <a target="_blank" rel="noopener noreferrer" className="github" href="https://github.com/Blockchain-Learning-Group"></a>
                </div> */}
            </section>
        );
    }
}
