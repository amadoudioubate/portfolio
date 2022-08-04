import React from 'react';
import { FaHtml5, FaCss3, FaSass, FaBootstrap, FaJsSquare, FaNpm, FaDatabase, 
    FaEnvira, FaGithub, FaGitAlt, FaNode, FaNodeJs } from 'react-icons/fa';
import './Skills.css';

function Skills() {
    return (
        <div className='skills'>

            {/* Debut markup / styling language */}
            <div className="skills_card2">
                <h5 className='card_title' style={{ "color": " #CBB26A" }}>markup / styling language</h5>
                <div className='card_content'>
                    <div className="content_icon">
                        <FaHtml5 className='icon_html' style={{ "color": "rgba(255,103,57,.9)" }} />
                        <h6>html</h6>
                    </div>
                    <div className="content_icon">
                        <FaCss3 className='icon_css' style={{ "color": "#5DADE2" }} />
                        <h6>css</h6>
                    </div>
                    <div className="content_icon">
                        <FaSass className='icon_sass' style={{ "color": "#c69" }} />
                        <h6>sass</h6>
                    </div>
                </div>
            </div>
            {/* Fin markup / styling language */}

            {/* Debut css framework */}
            <div className="skills_card1">
                <h5 className='card_title' style={{ "color": " #CBB26A" }}>css framework</h5>
                <div className='card_content'>
                    <div className="content_icon">
                        <FaBootstrap className='icon_bootstrap' style={{ "color": "#AF7AC5" }} />
                        <h6>bootstrap</h6>
                    </div>
                </div>
            </div>
            {/* Fin JavaScript */}

            {/* Debut JavaScript */}
            <div className="skills_card1">
                <h5 className='card_title' style={{ "color": " #CBB26A" }}>programming language</h5>
                <div className="card_content">
                    <div className="content_icon">
                        <FaJsSquare className='icon_javascript' style={{ "color": "yellow" }} />
                        <h6>javascript</h6>
                    </div>
                </div>
            </div>
            {/* Fin JavaScript */}

            {/* Debut JavaScript Framework */}
            <div className="skills_card1">
                <h5 className='card_title' style={{ "color": " #CBB26A" }}>framework javascript</h5>
                <div className="card_content">
                    <div className="content_icon">
                        <FaJsSquare className='icon_react' style={{ "color": "#61dafb" }} />
                        <h6>react js</h6>
                    </div>
                </div>
            </div>
            {/* Fin JavaScript Framework */}

            {/* Debut package manager */}
            <div className="skills_card1">
                <h5 className='card_title' style={{ "color": " #CBB26A" }}>package manager</h5>
                <div className="card_content">
                    <div className="content_icon">
                        <FaNpm className='icon_npm' style={{ "color": "#cb0000" }} />
                        <h6>npm</h6>
                    </div>
                </div>
            </div>
            {/* Fin package manager */}

            {/* Debut database management */}
            <div className="skills_card2">
                <h5 className='card_title' style={{ "color": " #CBB26A" }}>database management</h5>
                <div className="card_content">
                    <div className="content_icon">
                        <FaDatabase className='icon_mysql' style={{ "color": "#3E6E93" }} />
                        <h6>mysql</h6>
                    </div>
                    <div className="content_icon">
                        <FaEnvira className='icon_mongodb' style={{ "color": "#82E0AA" }} />
                        <h6>mongo db</h6>
                    </div>
                </div>
            </div>
            {/* Fin database management */}

            {/* Debut version control */}
            <div className="skills_card2">
                <h5 className='card_title' style={{ "color": " #CBB26A" }}>version control</h5>
                <div className='card_content'>
                    <div className="content_icon">
                        <FaGithub className='icon_github' style={{ "color": "black" }} />
                        <h6>github</h6>
                    </div>

                    <div className="content_icon">
                        <FaGitAlt className='icon_git' style={{ "color": "#f14e32" }} />
                        <h6>git</h6>
                    </div>
                </div>
            </div>
            {/* Fin version control */}

            {/* Debut backend */}
            <div className="skills_card2">
                <h5 className='card_title' style={{ "color": " #CBB26A" }}>backend</h5>
                <div className='card_content'>
                    <div className="content_icon">
                        <FaNode className='icon_nodejs' style={{ "color": "#27AE60" }} />
                        <h6>node js</h6>
                    </div>

                    <div className="content_icon">
                        <FaNodeJs className='icon_expressjs' style={{ "color": "#259dff" }} />
                        <h6 className='icon_text'>express js</h6>
                    </div>
                </div>
            </div>
            {/* Fin backend */}

        </div>

    );
};

export default Skills;