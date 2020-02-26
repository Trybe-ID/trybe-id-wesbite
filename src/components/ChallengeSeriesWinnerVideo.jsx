import React from 'react';

export default class extends React.Component {
    render() {
        return (
            <section id="Clients">
                <div />
                {this.props.winningMessage}
                <br />
                <div>
                    <header>
                        <div>
                        <iframe 
                            src={this.props.src}
                            width="640" 
                            height="360" 
                            frameborder="0" 
                            allow="autoplay; fullscreen" 
                            allowfullscreen>
                        </iframe>
                        </div>
                    </header>
                </div>
            </section>
        );
    }
}