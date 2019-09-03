import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './../sass/style.scss';
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
        timeout: 300,
        counter: this.props.counter,
    };

    handleClick = () => {
        this.setState({
            start: true,
        });
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
            }
        }, 1000);
    };


    render() {
        if (this.state.start) {
            return (
                <div>
                    <div className={"sideList"}>
                        <div className={"timeout"}>Pozostały czas: {this.state.timeout} s.</div>
                        <div>{this.props.counter} / 15</div>
                        <div className={"itemsList"}>
                            <img src={usb} className={"item"}/>
                            <img src={baseball} className={"item"}/>
                            <img src={basketball} className={"item"}/>
                            <img src={iron} className={"item"}/>
                            <img src={coffee} className={"item"}/>
                            <img src={hanger} className={"item"}/>
                            <img src={lipstick} className={"item"}/>
                            <img src={calc} className={"item"}/>
                            <img src={chess} className={"item"}/>
                            <img src={brush} className={"item"}/>
                            <img src={banana} className={"item"}/>
                            <img src={mirror} className={"item"}/>
                            <img src={bible} className={"item"}/>
                            <img src={glasses} className={"item"}/>
                            <img src={creditCard} className={"item"}/>
                        </div>
                    </div>
                </div>
            )
        }  else if (this.state.timeout !== 0) {
            return (
                <div className={"startScreenItems"}>
                    <h2>Po rozpoczęciu gry masz 5 minut na znalezienie przedmiotów</h2>
                    <button className={"startButton"} onClick={this.handleClick}>Odsłoń przedmioty</button>
                </div>
            )
        } else if (this.state.timeout <= 0) {
            return (
                <div className={"startScreenItems"}>
                    <h2>Twój czas się skończył</h2>
                </div>
            )
        }
        }
}

export default ItemsList;