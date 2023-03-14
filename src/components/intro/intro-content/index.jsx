import React from "react";
import "./style.scss";
import handicon from "../../../images/hand.png";
import CallToAction from "../../shared/CallToAction";
import myimage from "../../../images/me.png";
import { BsAwardFill } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import { scrollToSection } from "../../utils/helpers";

const IntroContent = () => {
    return (
        <div className="intro-content">
            <div className="layout">
                <div className="left-col">
                    <h1 className="title">
                        <span className="small-text">
                            <span className="text">Hello</span>
                            <span className="icon">
                                <img
                                    src={handicon}
                                    alt="iconhand"
                                />
                            </span>
                            <span className="text">, I am</span>
                        </span>
                        <div
                            style={{ fontSize: "40px", paddingBottom: "20px" }}
                        >
                            <Typewriter
                                options={{
                                    autoStart: true,
                                    loop: true,
                                    delay: 40,
                                    strings: ["Saurabh Bhatt"],
                                }}
                            />
                        </div>
                    </h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">
                                Frontend Developer
                            </div>
                            <div className="i-title-item">
                                React Js Developer
                            </div>
                            <div className="i-title-item">Freelancer</div>
                        </div>
                    </div>
                    <p>
                        I am a frontend developer. My skills are HTML, CSS, JS,
                        Bootstrap,Tailwind Css, Git, GitHub & React.js and I am
                        looking for an in-office internship for growing my
                        skills.
                    </p>
                    <span onClick={() => scrollToSection("contact")}>
                        <CallToAction text="Contact me" />
                    </span>
                </div>
                <div className="right-col">
                    <img
                        src={myimage}
                        alt="imagegirl"
                    />
                    <div className="highlights horizontal">
                        <div className="icon">
                            <BsAwardFill />
                        </div>
                        <div className="text">Frontend Devloper</div>
                    </div>
                    <div className="highlights verticle">
                        <div className="icon">
                            <FaReact />
                        </div>
                        <div className="text">
                            <span>React Js</span>
                            Devloper
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroContent;
