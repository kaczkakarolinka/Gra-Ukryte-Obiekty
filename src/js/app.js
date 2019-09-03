import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './../sass/style.scss';
import ItemsList from "./itemsList";
import Room from "./room"

class App extends Component {
    render() {
        return (
            <>
                <div className={"container"}>
                    <Room />
                    <ItemsList />
                </div>
            </>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));
