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
                                <p>Chami Akmeemana is the CEO of Convergence.tech and Trybe.ID. He is a Blockchain and AI Specialist. He pursued a Ph.D. in Bioceramic Engineering at Queen Mary, University of London, until deciding to forgo an academic career in favor of Law Enforcement. In 2002, he joined London’s Metropolitan Police.</p>
                                <p>Chami has had 4 successful exits over the last decade and is passionate about the intersection of technology, business and social good. His experience includes serving as Fintech Advisor to the Ontario Securities Commission; Managing Director, Fintech and Blockchain at the Global Risk Institute; and Regulatory Advisor to the Republic of Liberland.</p>
                                <p>Chami is also the Chairman of the Blockchain Association Australia and an Advisory Board member of doc.ai.</p>
                            </aside>
                        </footer>
                    </li>

                    <li>
                        <header>
                            <div>
                                <span className="avatar">
                                    <img alt="" src="images/profiles/Kim.jpg" />
                                </span>
                            </div>
                        </header>
                        <footer>
                            <h4>
                                <div>Kim Cameron</div>
                                <div>Chief Identity Officer</div>
                            </h4>
                            <aside>
                                <p>
                                Kim Cameron is a Canadian computer scientist and engineering leader who has worked since the emergence of the Internet to create a humanistic system of Digital Identity. Kim moved to Seattle to join Microsoft in 1999 when it acquired Toronto-based Zoomit Corporation, a software company dedicated to digital identity that he co-founded in 1980. In 2000 he became the Architect of Microsoft’s Active Directory, which evolved into the most widely deployed identity technology used in enterprises globally. As the growth of the Internet made the importance of identity increasingly evident, his role expanded to become Chief Architect of Identity for Microsoft, a position he held until his retirement in 2019.
                                <br />
                                <br />
                                Kim led Microsoft to build technology that was part of an “identity metasystem” that worked across vendors, technologies and political boundaries. He introduced the concept of “claims” so the system could handle a world where the assertions of different entities were trusted for different things and to different extents – a major building block for what became cloud computing. In 2004 he wrote the Laws of Identity, a document that has long influenced both technologists and regulators, and which Microsoft adopted to guide its innovation. At the same time he began to champion innovations that would put users in control of their own identity as a way to solve the privacy and security problems of both individuals and organizations – work he continues to advance today.
                                </p>
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
