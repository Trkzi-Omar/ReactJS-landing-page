import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import imgArrowDown from "../assets/img/arrow-1@2x.svg";
import imgInnovationCircle from "../assets/img/vector@2x.svg";

const Home = () => {
    return (
        <div id={'home'} className={"home"}>
            <div className={'home-text-upper'}>
                <div className={'home-text-upper-left'}>
                    <span className={'paragraph-title'}>Let's innovate</span>
                    <p className={'paragraph-text'}>Est qu'il possède une distribution de lettres plus ou moins normale,
                        et en tout cas comparable avec
                        celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de
                        sites
                        Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous
                        conduira vers de nombreux</p>
                    <img src={imgArrowDown} alt={''}/>
                    <a>Learn more</a>
                </div>
                <div className={'home-text-upper-right'}>
                    <p className={'paragraph-title'}>1/2</p>
                    <img src={imgInnovationCircle} alt={''}/>
                </div>
            </div>
            <div className={'home-text-lower'}>
                <div className={'home-text-lower-right'}>
                    <a>Watch</a>
                    <div className={'paragraph'}>
                        <span className={'paragraph-title'}>Advo</span>
                        <p  className={'paragraph-text'}>Est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas
                            comparable
                            avec
                            celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de
                            sites
                            Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum'
                            vous
                            conduira vers de nombreux</p>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Home;