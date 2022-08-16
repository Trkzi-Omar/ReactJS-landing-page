import React from "react";

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
                    <div className={'buttons'}>
                        <div id={'arrow-box'}>
                            <div id={'arrow'}/>
                        </div>
                        <div id={'learn-more'}>
                            <a>Learn more</a>
                        </div>
                    </div>
                </div>
                <div className={'home-text-upper-right'}>
                    {/*<p className={'paragraph-title'}>1/2</p>*/}
                </div>
            </div>
            <div className={'home-text-lower'}>
                <div className={'home-text-lower-right'}>
                    <a>Watch</a>
                    <div className={'paragraph'}>
                        <span className={'paragraph-title'}>Advo</span>
                        <p className={'paragraph-text'}>Est qu'il possède une distribution de lettres plus ou moins
                            normale, et en tout cas
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