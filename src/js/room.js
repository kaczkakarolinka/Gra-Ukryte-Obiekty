import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './../sass/style.scss';
import "./../sass/items.scss"
import "./../sass/clickableItems.scss"
import Items from "./items"
import startScreen from "../images/Ukryte Obiekty.png"
import congrats from "../images/Congrats.png"


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
        let yourTime;
        if (this.props.seconds < 60 && this.props.seconds > 50) {
            yourTime = <h3 className={'time'}>Twój czas to: {4 - this.props.minutes}:0{60 - this.props.seconds} </h3>
        } else {
            yourTime = <h3 className={'time'}>Twój czas to: {4 - this.props.minutes}:{60 - this.props.seconds} </h3>
        }

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
                        <img src={congrats}/>
                        {yourTime}
                    </div>
                </div>
            )
        } else if (!this.state.start && this.props.counter === 0) {
            return (
                <div className={"startScreen"}>
                    <img src={startScreen}/>
                    <button className={"startButton"} onClick={this.handleButtonClick}>Kliknij aby rozpocząć</button>
                </div>
            )
        }
    }
}

export default Room;