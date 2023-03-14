import React, { useState } from "react";
import "./style.scss";
import Section from "../shared/section";
import Filters from "./filter";
import Showcase from "./showcase";

const projectsData = [
    {
        id: 1,
        name: "E-commerce",
        tags: ["web-app", "mobile-app", "product"],
        media: {
            thumbnail: require("../../images/portfolio/Ecom.png"),
        },
        link: "https://gentle-unicorn-a0a990.netlify.app/",
    },
    {
        id: 7,
        name: "YouTube ",
        tags: ["web-page", "web-app", "mobile-app", "product"],
        media: {
            thumbnail: require("../../images/portfolio/youtube1.jpeg"),
        },
        link: "https://bucolic-bunny-563081.netlify.app/",
    },
    {
        id: 2,
        name: "News-App",
        tags: ["web-page"],
        media: {
            thumbnail: require("../../images/portfolio/News.png"),
        },
        link: "https://github.com/SaurabhattJi/News-App_fnc-based",
    },
    {
        id: 3,
        name: "Calculator",
        tags: ["product"],
        media: {
            thumbnail: require("../../images/portfolio/Calc.jpg"),
        },
        link: "https://saurabhattji.github.io/NewCalculator/",
    },
    {
        id: 4,
        name: "Notes-App",
        tags: ["product"],
        media: {
            thumbnail: require("../../images/portfolio/Notes.jpeg"),
        },
        link: "https://saurabhattji.github.io/NewNotesApp/",
    },
    {
        id: 5,
        name: "TextUtils",
        tags: ["web-app", "web-page"],
        media: {
            thumbnail: require("../../images/portfolio/TextUtils.png"),
        },
        link: "https://saurabhattji.github.io/Text_utils/",
    },
    {
        id: 6,
        name: "ex-Portfolio ",
        tags: ["product", "web-app", "mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/Portfolio.jpg"),
        },
        link: "https://saurabhattji.github.io/Portfolio/",
    },
];

const Portfolio = () => {
    const [projects, setProjects] = useState(projectsData);
    const [transition, setTransition] = useState(false);

    const filterProjects = (tag) => {
        setTransition("zoomout");

        setTimeout(() => {
            if (tag !== "all") {
                const filteredProjects = projectsData.filter((item) =>
                    item.tags.includes(tag)
                );
                setProjects(filteredProjects);
            } else {
                setProjects(projectsData);
            }
            setTransition("zoomin");
        }, 200);

        setTimeout(() => {
            setTransition(false);
        }, 600);
    };

    return (
        <Section
            id="portfolio"
            title="Check My Portfolio"
            background="light"
        >
            <div className="portfolio-content-wrapper">
                <Filters filterProjects={(tag) => filterProjects(tag)} />
                <Showcase
                    data={projects}
                    transition={transition}
                />
            </div>
        </Section>
    );
};

export default Portfolio;
