import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './../sass/style.scss';
import "./../sass/items.scss"
import Items from "./items"


class Room extends Component {
    state = {
        start: false,
    };

    handleButtonClick = () => {
        this.setState({
            start: true,
        });
};

    render() {
        if (this.state.start && this.props.counter !== 15) {
            return (
                <div className={"roomContainer"}>
                    <div className={"wall"}>
                        <Items counterClick={this.props.counterClick} />
                    </div>
                    <div className={"baseboard"}></div>
                    <div className={"floor"}></div>
                </div>
            )
        } else if (this.props.counter === 15) {
            return (
                <div className={"startScreen"}>
                    <div className={"finalBorder"}>
                        <h1>GRATULACJE!</h1>
                        <h2>Odnaleziono wszystkie obiekty!</h2>
                        <h3>Twój czas to: {300 - this.props.timeout} s.</h3>
                    </div>
                </div>
            )
        } else if (!this.state.start && this.props.counter === 0) {
            return (
                <div className={"startScreen"}>
                    <h1>GRA UKRYTE OBIEKTY</h1>
                    <h2>Znajdź wszystkie 15 obiektów ukrytych w pokoju</h2>
                    <button className={"startButton"} onClick={this.handleButtonClick}>Kliknij aby rozpocząć</button>
                </div>
            )
        }
    }
}

export default Room;