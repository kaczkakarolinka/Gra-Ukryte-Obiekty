import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './../sass/style.scss';
import ItemsList from "./itemsList";
import Room from "./room"

class App extends Component {
    state = {
        counter: 0,
        timeout: 300,
        start: false,
        mirror: '',
        usb: '',
        baseball: '',
        basketball: '',
        iron: '',
        coffee: '',
        calc: '',
        banana: '',
        chess: '',
        doorHanger: '',
        lipstick: '',
        glasses: '',
        creditCard: '',
        bible: '',
        brush: '',
    };

    counterClick = (e) => {
        this.setState({
            counter: this.state.counter + 1,
            [e.target.id]: e.target.id,
        });
    };

    setTimeout = (e) => {
        this.id = setInterval(() => {
            this.setState({
                timeout: this.state.timeout - 1,
            });
            if (this.state.timeout === 0) {
                clearInterval(this.id);
                this.setState({
                    timeout: 0,
                    start: false,
                });
            } else if (this.state.counter === 15) {
                clearInterval(this.id);
                this.setState({
                    timeout: this.state.timeout,
                })
            }
        }, 1000);
    };

    render() {

        return (
            <>
                <div className={"container"}>
                    <Room
                        counterClick={this.counterClick}
                        counter={this.state.counter}
                        timeout={this.state.timeout}
                    />
                    <ItemsList
                        counter={this.state.counter}
                        setTimeout={this.setTimeout}
                        timeout={this.state.timeout}
                        start={this.state.start}
                        usb={this.state.usb}
                        baseball={this.state.baseball}
                        basketball={this.state.basketball}
                        iron={this.state.iron}
                        coffee={this.state.coffee}
                        calc={this.state.calc}
                        banana={this.state.banana}
                        mirror={this.state.mirror}
                        chess={this.state.chess}
                        doorHanger={this.state.doorHanger}
                        lipstick={this.state.lipstick}
                        glasses={this.state.glasses}
                        creditCard={this.state.creditCard}
                        bible={this.state.bible}
                        brush={this.state.brush}
                    />
                </div>
            </>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));

