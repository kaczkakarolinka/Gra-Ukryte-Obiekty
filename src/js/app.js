import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './../sass/style.scss';
import Items from "./items";
import Room from "./room"

class App extends Component {
    render() {
        return (
            <>
                <div>Ciekawe</div>
                <Room />
                <Items />
            </>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));
// export default App;
