import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './../sass/style.scss';
import ItemsList from "./itemsList";
import Room from "./room"

class App extends Component {
    state = {
        counter: 0,
        minutes: 5,
        seconds: 0,
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
                seconds: this.state.seconds - 1,
            });
            if (this.state.minutes === 0 && this.state.seconds === 0) {
                clearInterval(this.id);
                this.setState({
                    minutes: 0,
                    seconds: 0,
                    start: false,
                });
            } else if (this.state.counter === 15) {
                clearInterval(this.id);
                this.setState({
                    minutes: this.state.minutes,
                    seconds: this.state.seconds,
                })
            } else if (this.state.seconds < '00') {
                this.setState({
                    minutes: this.state.minutes - 1,
                    seconds: 59,
                })
            } else if (this.state.counter === 15 && this.state.seconds < 10) {
                this.setState({
                    minutes: this.state.minutes,
                    seconds: '0' + this.state.seconds,
                });
                clearInterval(this.id);
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
                        minutes={this.state.minutes}
                        seconds={this.state.seconds}
                    />
                    <ItemsList
                        counter={this.state.counter}
                        setTimeout={this.setTimeout}
                        minutes={this.state.minutes}
                        seconds={this.state.seconds}
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

