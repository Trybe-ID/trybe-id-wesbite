import React from 'react';

export default class extends React.Component {
    render() {
        return (
            <section id="ContactUs">
                <address>
                    <div>
                        Looking to find out more information please feel free to reach out directly at: 
                        <br />
                        adam@trybe.id
                        <br />
                    </div>
                    <div className="logos">
                        <div>
                            <img alt="trybe.id" src="images/white-trybeID.png" style={{ height: '70px', padding: '0.618rem 1rem' }} />
                        </div>
                    </div>
                    <div>
                        If you have a keen interest to explore how Trybe.ID and related digital technologies can be utilized within your 
                        organzation feel free to reach out to our sister company Convergence.tech at ContactUs@convergence.tech
                        <br />
                        <strong><a target="_blank" href="https://convergence.tech">https://Convergence.tech</a></strong>
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
