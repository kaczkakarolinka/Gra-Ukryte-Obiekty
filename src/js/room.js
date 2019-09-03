import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './../sass/style.scss';
import "./../sass/items.scss"
import Items from "./items"


class Room extends Component {
    state = {
        start: false,
        counter: this.props.counter
    };

    handleButtonClick = () => {
        this.setState({
            start: true,
            counter: this.state.counter,
        })
};
    render() {
        if (this.state.start) {
            return (
                <div className={"roomContainer"}>
                    <div className={"wall"}>
                        <Items />
                    </div>
                    <div className={"baseboard"}></div>
                    <div className={"floor"}></div>
                </div>
            )
        }

        return (
            <div className={"startScreen"}>
                <h1>GRA UKRYTE OBIEKTY</h1>
                <h2>Znajdź wszystkie 15 obiektów ukrytych w pokoju</h2>
                <button className={"startButton"} onClick={this.handleButtonClick}>Kliknij aby rozpocząć</button>
            </div>
        )
    }
}

export default Room;