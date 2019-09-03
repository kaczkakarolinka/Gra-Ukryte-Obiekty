import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './../sass/style.scss';
import ItemsList from "./itemsList";
import Room from "./room"

class App extends Component {
    state = {
        counter: 0,
    };


    render() {
        return (
            <>
                <div className={"container"}>
                    <Room counter={this.state.counter} />
                    <ItemsList counter={this.state.counter} />
                </div>
            </>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));
