import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './../sass/style.scss';
import './../sass/clickableItems.scss'
import usb from "../images/usb.png"
import baseball from "../images/baseball.png"
import basketball from "../images/basketball.png"
import iron from "../images/iron.png"
import coffee from "../images/coffee.png"
import hanger from "../images/doorhanger.png"
import lipstick from "../images/lipstick.png"
import calc from "../images/calc.png"
import chess from "../images/chess.png"
import brush from "../images/brush.png"
import banana from "../images/banana.png"
import mirror from "../images/mirror.png"
import bible from "../images/bible.png"
import glasses from "../images/glasses.png"
import creditCard from "../images/creditcard.png"

class ItemsList extends Component {
    state = {
        start: false,
    };

    handleClick = () => {
        this.setState({
            start: true,
        });
        this.props.setTimeout();
    };

    render() {
        let timeout;
        if (this.props.seconds < 10) {
            timeout = <div className={"timeout"}>Pozostały czas: {this.props.minutes}:0{this.props.seconds}</div>
        } else {
            timeout = <div className={"timeout"}>Pozostały czas: {this.props.minutes}:{this.props.seconds}</div>
        }

        if (!this.state.start) {
            return (
                <div className={"startScreenItems"}>
                    <h2>Po odsłonięciu przedmiotów masz 5 minut na ich znalezienie</h2>
                    <button className={"startButtonList"} onClick={this.handleClick}>Odsłoń przedmioty</button>
                </div>
            )
        } else if (this.props.minutes === 0 && this.props.seconds === 0 && this.state.start) {
            return (
                <div className={"startScreenItems"}>
                    <h1>Twój czas się skończył</h1>
                    <h2>Twój wynik to: {this.props.counter}</h2>
                </div>
            )
        }

        return (
            <div>
                <div className={"sideList"}>
                    <section className={"infoSection"}>
                        {timeout}
                        <div className={"counter"}>{this.props.counter} / 15</div>
                    </section>
                    <div className={"itemsList"}>
                        <img src={usb} className={`${this.props.usb === 'usb' ? 'founded' : ''} item`} />
                        <img src={baseball} className={`${this.props.baseball === 'baseball' ? 'founded' : ''} item`}/>
                        <img src={basketball} className={`${this.props.basketball === 'basketball' ? 'founded' : ''} item`}/>
                        <img src={iron} className={`${this.props.iron === 'iron' ? 'founded' : ''} item`}/>
                        <img src={coffee} className={`${this.props.coffee === 'coffee' ? 'founded' : ''} item`}/>
                        <img src={hanger} className={`${this.props.doorHanger === 'doorHanger' ? 'founded' : ''} item`}/>
                        <img src={lipstick} className={`${this.props.lipstick === 'lipstick' ? 'founded' : ''} item`}/>
                        <img src={calc} className={`${this.props.calc === 'calc' ? 'founded' : ''} item`}/>
                        <img src={chess} className={`${this.props.chess === 'chess' ? 'founded' : ''} item`}/>
                        <img src={brush} className={`${this.props.brush === 'brush' ? 'founded' : ''} item`}/>
                        <img src={banana} className={`${this.props.banana === 'banana' ? 'founded' : ''} item`}/>
                        <img src={mirror} className={`${this.props.mirror === 'mirror' ? 'founded' : ''} item`}/>
                        <img src={bible} className={`${this.props.bible === 'bible' ? 'founded' : ''} item`}/>
                        <img src={glasses} className={`${this.props.glasses === 'glasses' ? 'founded' : ''} item`}/>
                        <img src={creditCard} className={`${this.props.creditCard === 'creditCard' ? 'founded' : ''} item`}/>
                    </div>
                </div>
            </div>
        )
        }
}

export default ItemsList;