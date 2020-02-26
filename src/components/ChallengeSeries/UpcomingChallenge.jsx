import React from 'react';

export default class extends React.Component {
    render() {
        return (
            <section id="UpcomingChallenge">
                <header>
                    <h3>Upcoming Challenge: <strong>#2 Combating Deforestation!</strong></h3>
                    <p>
                        Spots are limited so be sure to register now!
                    </p>

                    <ul>
                         <li className="mdc-elevation--z16">
                            <header>
                                <div>
                                    <strong>VIEW CHALLENGE</strong>
                                </div>
                            </header>
                            <div>
                                <p>View the details of the challenge.</p>
                            </div>
                            <footer>
                                <a className="blg-btn" href="#challenge-series/2">VIEW DETAILS</a>
                            </footer>
                        </li>
                    </ul>
                </header>
            </section>
        );
    }
}
