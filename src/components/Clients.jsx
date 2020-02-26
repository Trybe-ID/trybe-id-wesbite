import React from 'react';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            client: 0,
            clients: 9
        };
    }

    handleClickPrevious() {
        this.setState({
            client:
                ((this.state.client - 1) < 0
                    ? this.state.clients - 1
                    : (this.state.client - 1)) % this.state.clients
        });
    }

    handleClickNext() {
        this.setState({
            client: (this.state.client + 1) % this.state.clients
        });
    }

    render() {
        return (
            <section id="Clients">
                <header>
                    <h3>IMPACT'd Clients</h3>
                </header>

                <footer className="mdc-elevation--z8">
                    <div className="mobile">
                        <div>
                            <img alt="AGL Energy" src="images/clients/AGLEnergy.png" />
                        </div>
                        <div>
                            <img alt="Government Of Ontario" src="images/clients/GovernmentOfOntario.png" />
                        </div>
                        <div>
                            <img alt="Melbourne Girls Grammar School" src="images/clients/MelbourneGirlsGrammarSchool.png" />
                        </div>
                        <div>
                            <img alt="The Bishop Strachan School" src="images/clients/TheBishopStrachanSchool.png" />
                        </div>
                        <div>
                            <img alt="The Knowledge Society" src="images/clients/TheKnowledgeSociety.png" />
                        </div>
                        <div>
                            <img alt="TMX Group" src="images/clients/TMXGroup.png" />
                        </div>
                        <div>
                            <img alt="City of Toronto" src="images/clients/cityOfToronto.png" />
                        </div>
                        <div>
                            <img alt="UNDP" src="images/clients/undp.jpeg" />
                        </div>
                        <div>
                            <img alt="USAID" src="images/clients/usaid.png" />
                        </div>
                        <div>
                            <img alt="Havergal College" src="images/clients/HavergalCollege.png" />
                        </div>
                        <div>
                            <img alt="Holy Trinity" src="images/clients/holyTrinitySchool.png" />
                        </div>
                        <div>
                            <img alt="UCC" src="images/clients/upperCanadaCollege.png" />
                        </div>
                    </div>

                    <div className="not-mobile">
                        <ul>
                            <button className="blg__nav__btn--prev mdc-elevation--z2" onClick={this.handleClickPrevious.bind(this)}>
                                <i className="material-icons">chevron_left</i>
                            </button>

                            <li className={this.state.client === 0 ? '' : 'blg--invisible layout vertical center-center'}>
                                <div className="layout vertical center-center" style={{ padding: 0, height: '100%', width: '100%', justifyContent: 'space-around' }}>
                                    <div>
                                        <img alt="Government Of Ontario" src="images/clients/GovernmentOfOntario.png" />
                                    </div>
                                    <div>
                                        <img alt="City of Toronto" src="images/clients/cityOfToronto.png" />
                                    </div>
                                    <div>
                                        <img alt="TMX Group" src="images/clients/TMXGroup.png" />
                                    </div>
                                </div>
                            </li>

                            <li className={this.state.client === 1 ? '' : 'blg--invisible layout vertical center-center'}>
                                <div className="layout vertical center-center" style={{ padding: 0, height: '100%', width: '100%', justifyContent: 'space-around' }}>
                                    <div>
                                        <img alt="United Nations Development Programme" width="300" src="images/clients/undp.jpeg" />
                                    </div>
                                    <div>
                                        <img style={{ height: 200 }} alt="USAID" src="images/clients/usaid.png" />
                                    </div>
                                </div>
                            </li>

                            <li className={this.state.client === 2 ? '' : 'blg--invisible layout vertical center-center'}>
                                <div className="layout vertical center-center" style={{ padding: 0, height: '100%', width: '100%', justifyContent: 'space-around' }}>
                                    <div>
                                        <img alt="Havergal College" src="images/clients/HavergalCollege.png" />
                                    </div>
                                    <div>
                                        <img alt="The Bishop Strachan School" src="images/clients/TheBishopStrachanSchool.png" />
                                    </div>
                                    <div>
                                        <img alt="Holy Trinity School" src="images/clients/holyTrinitySchool.png" />
                                    </div>
                                </div>
                            </li>

                            <li className={this.state.client === 3 ? '' : 'blg--invisible layout vertical center-center'}>
                                <div className="layout vertical center-center" style={{ padding: 0, height: '100%', width: '100%', justifyContent: 'space-around' }}>
                                    <div>
                                        <img alt="Royal St. George College" src="images/clients/royalStGeorgeCollege.png" />
                                    </div>
                                    <div>
                                        <img alt="Upper Canada College" src="images/clients/upperCanadaCollege.png" />
                                    </div>
                                    <div>
                                        <img alt="The Knowledge Society" src="images/clients/tks.png" />
                                    </div>
                                </div>
                            </li>

                            <li className={this.state.client === 4 ? '' : 'blg--invisible'}>
                                <div>
                                    <header>
                                        <img style={{ height: 100 }} alt="AGL Energy" src="images/clients/AGLEnergy.png" />
                                        <p>“Thank you to the Blockchain Learning Group for equipping AGL with a strong foundation in blockchain technology and providing us with the knowledge, tools and confidence to start making meaningful inroads with integrating this technology. We have gone from talking about Blockchain to actually developing and experimenting with different solutions, a significant achievement realized in a relatively short period of time. I would highly recommend the Blockchain Learning Group to any organization that is looking for a world-class education partner to jumpstart their own blockchain journeys!”</p>
                                    </header>
                                    <footer>
                                        <h4>
                                            <div>
                                                <strong>Joy Marrocco</strong>
                                            </div>
                                            <div>
                                                <small>IT Innovation Manager</small>
                                            </div>
                                            <div>
                                                <small>AGL Energy</small>
                                            </div>
                                        </h4>
                                    </footer>
                                </div>
                            </li>

                            <li className={this.state.client === 5 ? '' : 'blg--invisible'}>
                                <div>
                                    <header>
                                        <img style={{ height: 75 }} alt="The Knowledge Society" src="images/clients/TheKnowledgeSociety.png" />
                                        <p>"Wow. Just wow. I cannot say enough about how valuable the Blockchain Learning Group experience was for our TKS students. Before the training, our students had a rudimentary understanding of blockchain technologies. Only a few weeks later they are building multiple decentralized applications and becoming young thought leaders in such a short period of time! Adam and the team were phenomenal facilitators. Not only were they incredibly knowledgeable, but they knew how to deliver the content to different audiences who might have had various levels of coding experience and blockchain understanding. How they were able to provide a personalized experience to a group of young people was very impressive.”</p>
                                    </header>
                                    <footer>
                                        <h4>
                                            <div>
                                                <strong>Nadeem Nathoo</strong>
                                            </div>
                                            <div>
                                                <small>Executive Director</small>
                                            </div>
                                            <div>
                                                <small>The Knowledge Society</small>
                                            </div>
                                        </h4>
                                    </footer>
                                </div>
                            </li>

                            <li className={this.state.client === 6 ? '' : 'blg--invisible'}>
                                <div>
                                    <header>
                                        <img style={{ height: 90 }} alt="Melbourne Girls Grammar School" src="images/clients/MelbourneGirlsGrammarSchool.png" />
                                        <p style={{ fontSize: "15px" }}>“Blockchain Learning Group provided an immersive learning experience for students and staff at Melbourne Girls Grammar. Their workshops illuminated for all participants the exciting, complex, and disruptive nature of blockchain technologies and its potential to democratize trust. Their skillful and patient coaching enabled students to become developers and integrators of blockchain technologies and imagine possible career pathways in tech. Our girls were able to demonstrate their new-found capabilities through success at the Smart Cities Hackathon in Melbourne where they developed DAPPs using the Ethereum blockchain and were one of the prize-winning groups.”</p>
                                    </header>
                                    <footer>
                                        <h4>
                                            <div>
                                                <strong>Ivan Carlisle, BA, BE(Monash), MTeach, MEdPolicy(Int)(Melb)</strong>
                                            </div>
                                            <div>
                                                <small>Director of STEM, Teacher of Mathematics & Algorithmics</small>
                                            </div>
                                            <div>
                                                <small>Melbourne Girls Grammar School</small>
                                            </div>
                                        </h4>
                                    </footer>
                                </div>
                            </li>

                            <li className={this.state.client === 7 ? '' : 'blg--invisible'}>
                                <div>
                                    <header>
                                        <img alt="TMX Group" src="images/clients/TMXGroup.png" />
                                        <p style={{ fontSize: "20px" }}>
                                            “Blockchain Learning Group did a fantastic job in our first TMX Blockchain training session. Well attended and impactful with a great curriculum. Thank you for helping to progress our knowledge of how Blockchain can be applied in Capital Markets.”
                                        </p>
                                    </header>
                                    <footer>
                                        <h4>
                                            <div>
                                                <strong>John Lee</strong>
                                            </div>
                                            <div>
                                                <small>Managing Director, Enterprise Innovation and Product Development</small>
                                            </div>
                                            <div>
                                                <small>TMX Group</small>
                                            </div>
                                        </h4>
                                    </footer>
                                </div>
                            </li>

                            <li className={this.state.client === 8 ? '' : 'blg--invisible'}>
                                <div>
                                    <header>
                                        <img style={{ height: 50 }} alt="BSS" src="images/clients/TheBishopStrachanSchool.png" />
                                        <p style={{ fontSize: "10px" }}>“Throughout the course of the Blockchain Hackathon at The Bishop Strachan School, Blockchain Learning Group (BLG) provided our Senior School participants with an invaluable, future-forward learning experience.” 
                                            Training for the Hackathon challenged our students on many levels. They had the opportunity to not only develop their skills on an emergent and complex platform but to also use this decentralizing technology in order to solve a social issue they were passionate about. The experience was exciting and highly motivating, prompting our students to further consider the role of technology in the wider world and their own careers.
                                            BLG provided incredible expert guidance throughout the Hackathon. Skillfully training our students and teachers on the Ethereum platform, they led BSS participants through design thinking exercises in order to produce unique problem statements, user stories, designs, prototype apps and pitches to a panel of Alumnae in the field. Adam Lemmon, the lead trainer from BLG, regularly asked for feedback throughout all stages of the Hackathon and easily adapted the material and structure of the event to suit the needs of the various participants.
                                            Feedback from students highlighted their enjoyment of the friendly competition, and how much they learned from collaborating in multidisciplinary groups. Additionally, throughout the event BLG invited industry mentors and speakers to share their expertise with student participants, providing them with powerful insights and an opportunity to begin a unique network that will be invaluable in their coming careers.”
                                        </p>
                                    </header>
                                    <footer>
                                        <h4>
                                            <div>
                                                <strong>Mary Anne Van Acker, </strong><small>Assistant Head, Innovation Development and Technology</small>
                                            </div>
                                            <div>
                                                <small>The Bishop Strachan School</small>
                                            </div>
                                        </h4>
                                    </footer>
                                </div>
                            </li>

                            <button className="blg__nav__btn--next mdc-elevation--z2" onClick={this.handleClickNext.bind(this)}>
                                <i className="material-icons">chevron_right</i>
                            </button>
                        </ul>
                    </div>
                </footer>
            </section>
        );
    }
}
