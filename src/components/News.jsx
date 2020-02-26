import React from 'react';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            client: 0,
            clients: 7
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
                    <h3>In The News</h3>
                </header>

                <footer className="mdc-elevation--z8">
                    <div className="mobile">
                        <div>
                            <img alt="UNDPLSE" src="images/news/LSEUNDP.png" />
                        </div>
                        <div>
                            <img alt="forbes" src="images/news/forbes.png" />
                        </div>
                        <div>
                            <img alt="itWorldCanada" src="images/news/itWorldCanada.png" />
                        </div>
                        <div>
                            <img alt="Startup Here Toronto" src="images/news/startUpToronto.png" />
                        </div>
                        <div>
                            <img alt="UNDP" src="images/news/undp.jpeg" />
                        </div>
                    </div>

                    <div className="not-mobile">
                        <ul>
                            <button className="blg__nav__btn--prev mdc-elevation--z2" onClick={this.handleClickPrevious.bind(this)}>
                                <i className="material-icons">chevron_left</i>
                            </button>

                            <li className={this.state.client === 0 ? '' : 'blg--invisible'}>
                                <div>
                                    <div>
                                        <img alt="Forbes" src="images/news/forbes.png" />
                                    </div>
                                    <header>
                                        <h3>The First Program To Train High School Girls With Blockchain Skills</h3>
                                    </header>
                                    <footer>
                                        <a
                                            href="https://www.forbes.com/sites/rogerhuang/2019/01/07/the-first-program-to-train-high-school-girls-with-blockchain-skills/#2c45ff464275" 
                                            target="_blank"
                                        >
                                            <h4>
                                                https://www.forbes.com/sites/rogerhuang/2019/01/07/the-first-program-to-train-high-school-girls-with-blockchain-skills/#2c45ff464275
                                            </h4>
                                        </a>
                                    </footer>
                                </div>
                            </li>

                            <li className={this.state.client === 1 ? '' : 'blg--invisible'}>
                                <div>
                                    <div>
                                        <img alt="undp" src="images/news/undp.jpeg" />
                                    </div>
                                    <header>
                                        <h3>Using Tech to Combat Corruption in Afghanistan</h3>
                                    </header>
                                    <footer>
                                        <a
                                            href="http://www.af.undp.org/presscenter/pressreleases/2019/Hack4Integrity.html" 
                                            target="_blank"
                                        >
                                            <h4>
                                                http://www.af.undp.org/presscenter/pressreleases/2019/Hack4Integrity.html
                                            </h4>
                                        </a>
                                    </footer>
                                </div>
                            </li>

                            <li className={this.state.client === 2 ? '' : 'blg--invisible'}>
                                <div>
                                    <div>
                                        <img style={{ width: 450, height: 65 }} alt="itworldcanda" src="images/news/itWorldCanada.png" />
                                    </div>
                                    <header>
                                        <h3>Toronto girls school hosts blockchain hackathon to inspire interest in STEM fields</h3>
                                    </header>
                                    <footer>
                                        <a
                                            href="https://www.itworldcanada.com/article/toronto-girls-school-hosts-blockchain-hackathon-to-inspire-interest-in-stem-fields/403826" 
                                            target="_blank"
                                        >
                                            <h4>
                                                https://www.itworldcanada.com/article/toronto-girls-school-hosts-blockchain-hackathon-to-inspire-interest-in-stem-fields/403826
                                            </h4>
                                        </a>
                                    </footer>
                                </div>
                            </li>

                            <li className={this.state.client === 3 ? '' : 'blg--invisible'}>
                                <div>
                                    <div>
                                        <img style={{ height: 80 }} alt="LSE" src="images/news/LSEUNDP.png" />
                                    </div>
                                    <header>
                                        <h3>Using blockchain to make land registry more reliable in India</h3>
                                    </header>
                                    <footer>
                                        <a
                                            href="http://blogs.lse.ac.uk/businessreview/2018/04/13/using-blockchain-to-make-land-registry-more-reliable-in-india/" 
                                            target="_blank"
                                        >
                                            <h4>
                                                http://blogs.lse.ac.uk/businessreview/2018/04/13/using-blockchain-to-make-land-registry-more-reliable-in-india/
                                            </h4>
                                        </a>
                                    </footer>
                                </div>
                            </li>

                            <li className={this.state.client === 4 ? '' : 'blg--invisible'}>
                                <div>
                                    <div>
                                        <img alt="startUpToronto" src="images/news/startUpToronto.png" />
                                    </div>
                                    <header>
                                        <h3>Toronto Startup Transforms Governments with Blockchain</h3>
                                    </header>
                                    <footer>
                                        <a
                                            href="https://startupheretoronto.com/type/profiles/blockchain-learning-group-and-blockscale-solutions-empowering-approach-to-deciphering-blockchain-for-businesses-and-governments/" 
                                            target="_blank"
                                        >
                                            <h4>
                                                https://startupheretoronto.com/type/profiles/blockchain-learning-group-and-blockscale-solutions-empowering-approach-to-deciphering-blockchain-for-businesses-and-governments/
                                            </h4>
                                        </a>
                                    </footer>
                                </div>
                            </li>

                            <li className={this.state.client === 5 ? '' : 'blg--invisible'}>
                                <div>
                                    <div>
                                        <img alt="undp" src="images/news/undp.jpeg" />
                                    </div>
                                    <header>
                                        <h3 style={{ fontSize: "30px" }}>
                                            Scaling up climate action: Fresh compact between UNDP and private sector partners to accelerate data and information solutions
                                        </h3>
                                    </header>
                                    <footer>
                                        <a
                                            href="https://www.adaptation-undp.org/scaling-climate-action-fresh-compact-between-undp-and-private-sector-partners-accelerate-data-and" 
                                            target="_blank"
                                        >
                                            <h4>
                                                https://www.adaptation-undp.org/scaling-climate-action-fresh-compact-between-undp-and-private-sector-partners-accelerate-data-and
                                            </h4>
                                        </a>
                                    </footer>
                                </div>
                            </li>

                            <li className={this.state.client === 6 ? '' : 'blg--invisible'}>
                                <div>
                                    <div>
                                        <img alt="Forbes" src="images/news/forbes.png" />
                                    </div>
                                    <header>
                                        <h3>UN Pilot In Mongolia Uses Blockchain To Help Farmers Deliver Sustainable Cashmere</h3>
                                    </header>
                                    <footer>
                                        <a
                                            href="https://www.forbes.com/sites/rogerhuang/2019/12/28/un-pilot-in-mongolia-uses-blockchain-to-help-farmers-deliver-sustainable-cashmere/#5a34aefa17d9" 
                                            target="_blank"
                                        >
                                            <h4>
                                                https://www.forbes.com/sites/rogerhuang/2019/12/28/un-pilot-in-mongolia-uses-blockchain-to-help-farmers-deliver-sustainable-cashmere/#5a34aefa17d9
                                            </h4>
                                        </a>
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
