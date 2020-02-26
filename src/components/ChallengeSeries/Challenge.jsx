import React from 'react';
import ChallengeSeriesWinnerVideo from '../ChallengeSeriesWinnerVideo';

export default class extends React.Component {
    render() {
        const { id, title, duration, registrationURL, prizes, problemStatement, externalLink, externalLinkTitle, completed, winnerVideoLink, winningMessage } = this.props;

        return (
            <div>
                <section id="ChallengeHeading">
                    <header>
                        <h3><strong>Challenge #{id} {title}</strong></h3>
                        <p><strong><u>{duration}</u></strong></p>
                        {
                            (
                                !completed &&
                                <p>
                                    Spots are limited so be sure to register now!
                                </p>
                            )
                        }
                        <div>
                            {
                                (
                                    !completed ? 
                                    <a className="blg-btn" onClick={() => window.open(registrationURL)}>REGISTER NOW!</a> :
                                    <a className="blg-btn">CHALLENGE COMPLETE!</a>
                                )
                            }
                            <div/>
                        </div>
                    </header>
                    {
                        (
                            completed ? 
                            <ChallengeSeriesWinnerVideo winningMessage={winningMessage}  src={winnerVideoLink}/> :
                            <a></a>
                        )
                    }
                </section>

                <section id="Courses">
                <footer>
                    <ul>
                        <li id="COURSE--DEVELOPER-EDUCATION-COURSE">
                            <div className="wrapper">
                                <header>
                                    <h4 className="mdc-elevation--z4">
                                        <div>Challenge #{id} {title}</div>
                                        <div>
                                            <strong>THE CHALLENGE</strong>
                                        </div>
                                    </h4>
                                </header>
                                <footer className="mdc-elevation--z8">
                                    <h5>PROBLEM STATEMENT</h5>
                                    <p>
                                        {problemStatement}
                                        <br /><br />
                                        <a href={externalLink}>{externalLinkTitle}</a>
                                    </p>

                                    <br />
                                    <h5><strong>PRIZES</strong></h5>
                                    <p>{prizes}</p>

                                    <br />
                                    <h5>REQUIREMENTS</h5>
                                    <p>
                                        <strong>Main Requirement:</strong> Build functioning software to address {title}! 
                                        <br /><br />
                                        The following assets must be submitted via the dedicated Slack channel:
                                        <br />
                                        <u>The Slack details will be shared only to the selected participants</u>
                                    </p>
                                    <dl>
                                        <dt>1 Code Base:</dt>
                                        <dd>Complete code base of the functional application and ideally a way to access your working application for judging and testing.</dd>
                                        
                                        <dt>2 Presentation:</dt>
                                        <dd>Deck or document detailing the design of the solution, value proposition, benefits and roadmap minimally.</dd>
                                        
                                        <dt>3 Demo Video:</dt>
                                        <dd>
                                            A demo video (hosted on YouTube, Vimeo, Google Drive or similar). Your video should include a demo of your working application via a step-by-step visual demo 
                                            as well as a walk through of the accompanying presentation.
                                        </dd>
                                    </dl>

                                    <br />
                                    <h5>HOW TO PARTICIPATE</h5>
                                    <ol>
                                        <li>
                                            1. Register to participate!
                                        </li>
                                        <li>2. Build any app you want. If you need a place to start, review the problem statement above.</li>
                                        <li>3. Find a team (optional) by reaching out to other developers on the dedicated Slack channel.</li>
                                        <li>4. Start building!</li>
                                        <li>5. Submit the specified assets before the conclusion of the Challenge!</li>
                                    </ol>

                                    <br />
                                    <h5>JUDGING CRITERIA</h5>
                                    <ol>
                                        <li>1. Quality of the idea (creativity and originality of the idea).</li>
                                        <li>2. Implementation of the idea (how well the idea was executed and functionality of the application).</li>
                                        <li>3. Potential impact (the extent to which the solution can be widely adopted and global impact opportunity).</li>
                                    </ol>
                                    
                                    <br />
                                </footer>
                            </div>
                        </li>
                    </ul>
                </footer>
                </section>
            </div>
        );
    }
}