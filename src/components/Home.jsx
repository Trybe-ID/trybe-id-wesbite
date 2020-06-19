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
            <section id="Home">
                <header>
                    <h1>Trybe.ID</h1>
                    <p>
                        A platform that is fundamentally reshaping the way credentials and relationships are managed online.
                    </p>
                    <div>
                        <a href="#Courses" className="blg-btn" onClick={this.scrollTo.bind(this)}>LEARN MORE</a>
                        <div />
                        <div />
                        <a className="blg-btn" onClick={() => window.open('https://trybe.id/express-interest')}>GET INVOLVED</a>
                    </div>
                </header>
                <footer>
                    <p>
                        {/* Trybe.ID features various web components which are powered exclusively by our cloud-based API and microservices.  Trybe.ID has been extensively researched and designed to meet and serve the needs of the growing education digital credentials market. Of note, Trybe.ID has been developed with integration in mind, consisting of various loosely coupled and modular components.  This design enables ease of integration with existing Student Information Systems or Learning Management Systems as well as strong standalone capabilities. */}
                    </p>
                </footer>
            </section>
        );
    }
}
