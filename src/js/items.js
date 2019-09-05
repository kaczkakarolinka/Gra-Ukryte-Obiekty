import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './../sass/style.scss';
import './../sass/items.scss';
import './../sass/clickableItems.scss';
import chair from "../images/chair.png";
import shelf from "../images/shelf.png";
import bed from "../images/bed.png"
import carpet from "../images/carpet.png"
import lamp2 from "../images/lamp2.png"
import window from "../images/window.png"
import lamp from "../images/lamp.png"
import wardrobe from "../images/wardrobe.png"
import mirror from "../images/mirror.png"
import kontakt from "../images/kontakt.png"
import box from "../images/box.png"
import vaccum from "../images/vaccum.png"
import toolbox from "../images/toolbox.png"
import dog from "../images/dog.png"
import boks from "../images/boks.png"
import telephone from "../images/telephone.png"
import darts from "../images/darts.png"
import coffee from "../images/coffee.png"
import iron from "../images/iron.png"
import radio from "../images/radio.png"
import triangles from "../images/triangles.png"
import trumpet from "../images/trumpet.png"
import bat from "../images/bat.png"
import banana from "../images/banana.png"
import baseball from "../images/baseball.png"
import basketball from "../images/basketball.png"
import brush from "../images/brush.png"
import bible from "../images/bible.png"
import book from "../images/book.png"
import calc from "../images/calc.png"
import certificate from "../images/certificate.png"
import chess from "../images/chess.png"
import creditCard from "../images/creditcard.png"
import doorHanger from "../images/doorhanger.png"
import glasses from "../images/glasses.png"
import lipstick from "../images/lipstick.png"
import usb from "../images/usb.png"
import watch from "../images/watch.png"

class Items extends Component {
    state = {
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


    addClass = (e) => {
        const clicked = e.target;
             this.setState({
                [clicked.id]: clicked.id,
            });
    };

    render() {
        return (
            <>
                <img src={chair} className={"chair"}/>
                <img src={shelf} className={"shelf"}/>
                <img src={bed} className={"bed"}/>
                <img src={carpet} className={"carpet"}/>
                <img src={lamp2} className={"lamp2"}/>
                <img src={window} className={"window"}/>
                <img src={lamp} className={"lamp"}/>
                <img src={wardrobe} className={"wardrobe"}/>
                <img src={mirror} className={`${this.state.mirror === 'mirror' ? 'disabled' : ''}`} id={"mirror"} onClick={(e) => {this.props.counterClick(e); this.addClass(e)}}/>
                <img src={kontakt} className={"kontakt"}/>
                <img src={box} className={"box"}/>
                <img src={vaccum} className={"vaccum"}/>
                <img src={toolbox} className={"toolbox"}/>
                <img src={dog} className={"dog"}/>
                <img src={boks} className={"boks"}/>
                <img src={telephone} className={"telephone"}/>
                <img src={darts} className={"darts"}/>
                <img src={coffee} className={`${this.state.coffee === 'coffee' ? 'disabled' : ''}`} id={"coffee"} onClick={(e) => {this.props.counterClick(e); this.addClass(e)}}/>
                <img src={iron} className={`${this.state.iron === 'iron' ? 'disabled' : ''}`} id={"iron"} onClick={(e) => {this.props.counterClick(e); this.addClass(e)}}/>
                <img src={radio} className={"radio"}/>
                <img src={triangles} className={"triangles"}/>
                <img src={trumpet} className={"trumpet"}/>
                <img src={bat} className={"bat"}/>
                <img src={banana} className={`${this.state.banana === 'banana' ? 'disabled' : ''}`} id={"banana"} onClick={(e) => {this.props.counterClick(e); this.addClass(e)}}/>
                <img src={baseball} className={`${this.state.baseball === 'baseball' ? 'disabled' : ''}`} id={"baseball"} onClick={(e) => {this.props.counterClick(e); this.addClass(e)}}/>
                <img src={basketball} className={`${this.state.basketball === 'basketball' ? 'disabled' : ''}`} id={"basketball"} onClick={(e) => {this.props.counterClick(e); this.addClass(e)}}/>
                <img src={brush} className={`${this.state.brush === 'brush' ? 'disabled' : ''}`} id={"brush"} onClick={(e) => {this.props.counterClick(e); this.addClass(e)}}/>
                <img src={bible} className={`${this.state.bible === 'bible' ? 'disabled' : ''}`} id={"bible"} onClick={(e) => {this.props.counterClick(e); this.addClass(e)}}/>
                <img src={book} className={"book"}/>
                <img src={calc} className={`${this.state.calc === 'calc' ? 'disabled' : ''}`} id={"calc"} onClick={(e) => {this.props.counterClick(e); this.addClass(e)}}/>
                <img src={certificate} className={"certificate"}/>
                <img src={chess} className={`${this.state.chess === 'chess' ? 'disabled' : ''}`} id={"chess"} onClick={(e) => {this.props.counterClick(e); this.addClass(e)}}/>
                <img src={creditCard} className={`${this.state.creditCard === 'creditCard' ? 'disabled' : ''}`} id={"creditCard"} onClick={(e) => {this.props.counterClick(e); this.addClass(e)}}/>
                <img src={doorHanger} className={`${this.state.doorHanger === 'doorHanger' ? 'disabled' : ''}`} id={"doorHanger"} onClick={(e) => {this.props.counterClick(e); this.addClass(e)}}/>
                <img src={glasses} className={`${this.state.glasses === 'glasses' ? 'disabled' : ''}`} id={"glasses"} onClick={(e) => {this.props.counterClick(e); this.addClass(e)}}/>
                <img src={lipstick} className={`${this.state.lipstick === 'lipstick' ? 'disabled' : ''}`} id={"lipstick"} onClick={(e) => {this.props.counterClick(e); this.addClass(e)}}/>
                <img src={usb} className={`${this.state.usb === 'usb' ? 'disabled' : ''}`} id={"usb"} onClick={(e) => {this.props.counterClick(e); this.addClass(e)}}/>
                <img src={watch} className={"watch"}/>
            </>
        )
    }
}

export default Items;