import React from "react";
import {motion} from "framer-motion";

const Home = () => {
    return (
        <div id={'home'} className={"home"}>
            <div className={'home-text-upper'}>
                <div className={'home-text-upper-left'}>
                    <motion.div transition={{duration: 1.1}} initial={{x: -125, opacity: 0}}
                                animate={{x: 0, opacity: 1}}>
                        <span className={'paragraph-title'}>Let's innovate</span>
                        <p className={'paragraph-text'}>Est qu'il possède une distribution de lettres plus ou moins
                            normale,
                            et en tout cas comparable avec
                            celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de
                            sites
                            Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum'
                            vous
                            conduira vers de nombreux</p>
                        <div className={'buttons'}>
                            <div id={'arrow-box'}>
                                <div id={'arrow'}/>
                            </div>
                                <div id={'learn-more'}>
                                    <a>Learn more</a>
                                </div>
                        </div>
                    </motion.div>
                </div>
                <div className={'home-text-upper-right'}>
                    {/*<p className={'paragraph-title'}>1/2</p>*/}
                </div>
            </div>
            <div className={'home-text-lower'}>
                <div className={'home-text-lower-right'}>
                    <div className={'paragraph'}>
                        <motion.div transition={{duration: 1.1}} initial={{x: 125, opacity: 0}}
                                    animate={{x: 0, opacity: 1}}>
                            <span className={'paragraph-title'}>Advo</span>
                            <p className={'paragraph-text'}>Est qu'il possède une distribution de lettres plus ou moins
                                normale, et en tout cas
                                comparable
                                avec
                                celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs
                                de
                                sites
                                Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem
                                Ipsum'
                                vous
                                conduira vers de nombreux</p>
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{opacity: 0, scale: 0.5}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01]}}
                        whileHover={{scale: 1.1, transition: {duration: 0.4, delay: 0}}}
                        whileTap={{scale: 0.8, transition: {duration: 0.25, delay: 0}}}
                    >
                        <div id={'watch'}>
                            <a>Watch</a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
};
export default Home;