import React from 'react';

export default class extends React.Component {
    render() {
        return (
            <section id="Team">
                <header>
                    <h3>Our Team</h3>
                </header>

                <ul>
                    <li>
                        <header>
                            <div>
                                <span className="avatar">
                                    <img alt="" src="images/profiles/Chami.jpg" />
                                </span>
                            </div>
                        </header>
                        <footer>
                            <h4>
                                <div>Chami Akmeemana</div>
                                <div>Chief Executive Officer</div>
                            </h4>
                            <aside>
                                <p>Chami Akmeemana is the CEO of Blockchain Learning Group and Blockscale Solutions. He is a Blockchain and AI Specialist. He pursued a Ph.D. in Bioceramic Engineering at Queen Mary, University of London, until deciding to forgo an academic career in favor of Law Enforcement. In 2002, he joined London’s Metropolitan Police.</p>
                                <p>Chami has had 4 successful exits over the last decade and is passionate about the intersection of technology, business and social good. His experience includes serving as Fintech Advisor to the Ontario Securities Commission; Managing Director, Fintech and Blockchain at the Global Risk Institute; and Regulatory Advisor to the Republic of Liberland.</p>
                                <p>Chami is also the Chairman of the Blockchain Association Australia and an Advisory Board member of doc.ai.</p>
                            </aside>
                        </footer>
                    </li>

                    <li>
                        <header>
                            <div>
                                <span className="avatar">
                                    <img alt="" src="images/profiles/Erik.png" />
                                </span>
                            </div>
                        </header>
                        <footer>
                            <h4>
                                <div>Erik Zvaigzne</div>
                                <div>Vice President of Product</div>
                            </h4>
                            <aside>
                                <p>
                                Erik has 15 years of experience in corporate IT and systems development, having worked extensively in the government sector as a technical lead and project manager on the ideation, design, delivery, and operations of large-scale enterprise technology solutions. His diverse experience includes building out systems involving sensor networks to aggregate data for flood forecasting, public-facing web based government services portals, and a blockchain-based traceability solutions leveraging mobile devices and RFID technologies for clients in Canada and abroad.
                                </p>
                            </aside>
                        </footer>
                    </li>

                    <li>
                        <header>
                            <div>
                                <span className="avatar">
                                    <img alt="" src="images/profiles/Adam.jpg" />
                                </span>
                            </div>
                        </header>
                        <footer>
                            <h4>
                                <div>Adam Lemmon</div>
                                <div>Manager of Engineering Operations</div>
                            </h4>
                            <aside>
                                <p>
                                    Adam currently leads engineering operations with Trybe.ID. He is a driven engineer and educator, with a background in Mechatronic Systems and Software Engineering. He has been active in the Blockchain ecosystem for several years and has been involved in a variety of initiatives spanning both software education and development globally.
                                </p>
                            </aside>
                        </footer>
                    </li>
                </ul>
            </section>
        );
    }
}
