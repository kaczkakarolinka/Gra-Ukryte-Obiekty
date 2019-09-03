import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './../sass/style.scss';
import './../sass/items.scss'
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

class Items extends Component {
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
                <img src={mirror} className={"mirror"}/>
                <img src={kontakt} className={"kontakt"}/>
                <img src={box} className={"box"}/>
                <img src={vaccum} className={"vaccum"}/>
                <img src={toolbox} className={"toolbox"}/>
                <img src={dog} className={"dog"}/>
                <img src={boks} className={"boks"}/>
                <img src={telephone} className={"telephone"}/>
                <img src={darts} className={"darts"}/>
                <img src={coffee} className={"coffee"}/>
                <img src={iron} className={"iron"}/>
                <img src={radio} className={"radio"}/>
                <img src={triangles} className={"triangles"}/>
                <img src={trumpet} className={"trumpet"}/>
                <img src={bat} className={"bat"}/>
                <img src={banana} className={"banana"}/>
                <img src={baseball} className={"baseball"}/>
                <img src={basketball} className={"basketball"}/>
                <img src={brush} className={"brush"}/>
                <img src={bible} className={"bible"}/>
                <img src={book} className={"book"}/>
                <img src={calc} className={"calc"}/>
                <img src={certificate} className={"certificate"}/>
            </>
        )
    }
}

export default Items;