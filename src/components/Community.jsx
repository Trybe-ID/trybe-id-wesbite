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
                <footer>
                    <h3>In the Community</h3>
                    <p>
                        We are not only passionate about the work we do, but we are also vested in the communities that we serve. 
                        Here are some of the events we are spearheading to support a variety of initiatives from providing a platform to look at how the future of education is evolving with technology to bringing together the ecosystem of mental health practitioners to utilize technology to support issues like child and youth mental health
                    </p>
                </footer>

                <header>
                    {/* <h3>In the Community</h3> */}
                    <ul>
                        <li className="mdc-elevation--z16">
                            <header>
                                <div><strong>Future of Learning Forum (Oct 7, 2019)</strong></div>
                                <div>
                                    <a href={"https://futureoflearning.io"} target="blank">https://futureoflearning.io/</a>
                                </div>
                            </header>
                            <div className="delivery-formats">
                                <p>
                                    This forum will look at the impact that technology will have on the future of learning and the jobs of tomorrow. 
                                    <br />
                                    <br />
                                    We are bringing together leading public and private school educators; government bodies, corporations and innovation experts to take a deep dive into the various considerations and start to chart a path forward.
                                </p>
                            </div>
                        </li>

                        <li className="mdc-elevation--z16">
                            <header>
                                <div><strong>Hack 4 Child Mental Health</strong></div>
                                <div>
                                    <a href={"https://hack4childmentalhealth2019.org/"} target="blank">https://hack4childmentalhealth2019.org/</a>
                                </div>
                            </header>
                            <div className="delivery-formats">
                                <p>
                                    One of the initiatives that Blockchain Learning Group puts together annually in Toronto is a not-for-profit event called Hack 4 Child Mental Health, where we bring together leading subject matter experts and technology enthusiasts to look at how innovative technology and data-driven solutions can help address various child and youth mental health considerations.
                                    <br />
                                    <br />
                                    This is a rewarding event that helps to drive solutions for a very important cause - please see below for a video from our most recent event held in April 2019:
                                    <iframe 
                                        src="https://player.vimeo.com/video/333942345" 
                                        width="100%" 
                                        // height="360" 
                                        frameborder="0" 
                                        allow="autoplay; fullscreen" 
                                        allowfullscreen>
                                    </iframe>
                                </p>
                            </div>
                        </li>
                    </ul>                    
                </header>
            </section>
        );
    }
}
