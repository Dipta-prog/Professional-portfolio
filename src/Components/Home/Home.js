import React, { createContext, useState } from 'react';
import './Home.css'
import AboutMe from '../AboutMe/AboutMe';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
export const togglarStatus = createContext();

const Home = () => {
    const [isTogglarActive, setIsTogglarActive] = useState(false);
    if (isTogglarActive) {
        document.getElementById("togglarActiveMargin").classList.add("togglarActiveMarginClass");
        // console.log("Togglaractive", isTogglarActive);      
    }
    else if (!isTogglarActive) {
        console.log(document.getElementById("togglarActiveMargin"));
        if (document.getElementById("togglarActiveMargin") !== null) {
            document.getElementById("togglarActiveMargin").classList.remove("togglarActiveMarginClass");
            console.log("Togglaractive", isTogglarActive);
        }
    }
    return (
        <togglarStatus.Provider value={[isTogglarActive, setIsTogglarActive]}>
            <div>
                <Header></Header>
                <div id="togglarActiveMargin" className="header-bottom-components">
                    <Projects></Projects>
                    <AboutMe></AboutMe>
                    <Skills></Skills>
                </div>
            </div>
        </togglarStatus.Provider>
    );
};

export default Home;