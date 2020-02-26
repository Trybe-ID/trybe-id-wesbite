import React from "react";
import Main from "./views/Main";

export default class extends React.Component {
    render() {
        window.location.hash = "";
        return (
            <div id="App">
                <Main />
            </div>
        );
    }
}
