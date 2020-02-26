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
                <header>
                    <h3>Participation and Next Steps</h3>
                    <p>Now that you know what it's all about it is time to get doing!</p>

                    <ul>
                        <li className="mdc-elevation--z16">
                            <header>
                                <div>
                                    <strong>EXPRESS YOUR INTEREST</strong>
                                </div>
                            </header>
                            <div>
                                <p>Select the button to express your interest.</p>
                            </div>
                            <footer>
                                <a className="blg-btn" href="#" onClick={() => window.open('https://goo.gl/forms/LGmorh3YbdAy4Qew2')}>COUNT ME IN!</a>
                            </footer>
                        </li>

                        <li className="mdc-elevation--z16">
                            <header>
                                <div>
                                    <strong>REGISTER YOUR TEAM</strong>
                                </div>
                            </header>
                            <div>
                                <p>Register for the upcoming challenge.</p>
                            </div>
                        </li>
                        <li className="mdc-elevation--z16">
                            <header>
                                <div>
                                    <strong>START BUILDING!</strong>
                                </div>
                            </header>
                            <div>
                                <p>Get to doing! Start building your solution.</p>
                            </div>
                        </li>
                    </ul>
                </header>

                <footer>
                    <ul>
                        <li id="COURSE--DEVELOPER-EDUCATION-COURSE">
                            <div className="wrapper">
                                <header>
                                    <h4 className="mdc-elevation--z4">
                                        <div>CHALLENGES</div>
                                        <div>
                                            <strong>WHAT  IS A CHALLENGE?</strong>
                                        </div>
                                    </h4>
                                </header>
                                <footer className="mdc-elevation--z8">
                                    <p>
                                        A challenge is a problem or use case that is presented to all participants.  Challenges may be as broad as one of the United Nation’s Sustainable Development Goals or as specific as the tracking of medicine from a given producer to consumer in Bangladesh.
                                        A challenge outlines the scope of the problem to be tackled as well as outlines the given deliverables.
                                        In many cases a prototype of a solution and complementary presentation will be required to submitted. Including a recorded demonstration and presentation clearly communicating what was achieved and how this has overcome the given challenge.
                                    </p>

                                    <h5>EXPECTED DELIVERABLES</h5>
                                    <dl>
                                        <dt>1 Code Base</dt>
                                        <dd>Functional MVP of the given solution.</dd>

                                        <dt>2 Presentation:</dt>
                                        <dd>Deck or document detailing the design of the solution, value proposition, benefits and roadmap minimally.</dd>

                                        <dt>3 Video:</dt>
                                        <dd>Demonstration of the solution and presentation.</dd>
                                    </dl>

                                    <h5>WHAT YOU BRING</h5>
                                    <ul>
                                        <li>Enthusiasm and a genuine passion for technology and experimentation.</li>
                                        <li>Software development experience is a plus.</li>
                                    </ul>

                                    <h5>PRIZES & OUTCOMES</h5>
                                    <p>Each challenge will feature a unique opportunity to be won.  Many involving cash prizes ranging from $500 up to over $5000!!</p>
                                    <p>Special challenges also exist where a specific global partner or sponsor has but something much more interesting than just money on the line...</p>
                                </footer>
                            </div>
                        </li>
                    </ul>
                </footer>
            </section>
        );
    }
}
