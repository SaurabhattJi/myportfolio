import React from "react";
import "./style.scss";
import Arrow from "../../shared/Arrow";

const Showcase = ({ data, transition }) => {
    return (
        <div className="projects-showcase">
            {data.map((curElem, i) => {
                return (
                    <div
                        className={`showcase-item ${
                            transition === "zoomout"
                                ? "zoomOut"
                                : transition === "zoomin"
                                ? "zoomIn"
                                : ""
                        }`}
                        key={i}
                    >
                        <div className="meta-content">
                            <h3>{curElem.name}</h3>
                            <div className="go-to-cta">
                                <a
                                    className="text"
                                    href={curElem.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{
                                        color: "black",
                                        backgroundColor: "white",
                                        background: "none",
                                        textDecoration: "none",
                                    }}
                                >
                                    View Project
                                </a>
                                <Arrow />
                            </div>
                        </div>
                        <img
                            src={curElem.media.thumbnail}
                            alt="imageofportfolio"
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default Showcase;
