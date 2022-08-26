import * as React from 'react';
import { connect } from 'react-redux';
import { UncontrolledCarousel } from 'reactstrap';
import './css/AboutMe.css';
const AboutMe = () => (
    <div className='about-me'>
        <div className='about-me-text-container'>
            <div className='about-me-title'>
                <p>About Me</p>
                <hr/>
            </div>
            <div>
                <p>
                    Hi, I’m Vinny. I’m a Software Engineer with professional
                    experience in <mark>aerospace</mark>, <mark>social</mark>, and <mark>financial </mark>
                    companies large and small.
                </p>
                <p>
                    I take pride in solving puzzles like turning business
                    rules into code, orchestrating processes, and designing UI’s.
                </p>
                <p>
                    As a software engineer, it is my job to find the best
                    tools to solve the problems at hand. Throughout my career,
                    I’ve worked professionally across many technologies to
                    accomplish this. Here’s a list of my favorites:
                </p>
                <div className='tech-list-container'>
                    <ul>
                        <li><p>C#</p></li>
                        <li><p>Java</p></li>
                        <li><p>Python</p></li>
                        <li><p>C++</p></li>
                    </ul>
                    <ul>
                        <li><p>C</p></li>
                        <li><p>SQL</p></li>
                        <li><p>NoSQL</p></li>
                        <li><p>Node</p></li>
                    </ul>
                    <ul>
                        <li><p>React</p></li>
                        <li><p>Angular</p></li>
                        <li><p>TypeScript</p></li>
                        <li><p>AWS</p></li>
                    </ul>
                    <ul>
                        <li><p>Azue</p></li>
                        <li><p>Docker</p></li>
                        <li><p>Terraform</p></li>
                        <li><p>Jenkins</p></li>
                    </ul>
                </div>
            </div>
        </div >

    </div>
);

export default connect()(AboutMe);