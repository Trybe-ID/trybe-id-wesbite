import React from 'react';

export default class extends React.Component {
    render() {
        return (
            <section id="ChallengeLandingHeading">
                <header>
                    <h3>Blockchain Learning Group's <strong>Challenge Series</strong></h3>
                    <p>The Blockchain Learning Group is launching a series of global challenges.</p>
                    <p>Examples may include human rights, world hunger, financial inclusion, pharmaceutical fraud and many more...</p>
                    <div>
                        <a className="blg-btn" onClick={() => window.open('https://goo.gl/forms/LGmorh3YbdAy4Qew2')}>I'M INTERESTED!</a>
                        <div />
                    </div>
                </header>
                <footer>
                </footer>
            </section>
        );
    }
}