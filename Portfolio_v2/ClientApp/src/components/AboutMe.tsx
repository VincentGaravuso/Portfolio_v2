import * as React from 'react';
import { connect } from 'react-redux';
import { UncontrolledCarousel } from 'reactstrap';
import './css/AboutMe.css';
const AboutMe = () => (
    <div>
        <div className='title-text'>
            <p style={{ fontSize: '3rem' }}>About Me</p>
        </div>
        <div className='spacer'></div>
        <div className='content-container'>
            <div className='about-me-container'>
                <div className='about-me'>
                    <p className='about-me-txt'>
                        In 2021, I moved from New York to Los Angeles with my fiancé Liz and our golden retriever Basil.
                    </p>
                    <p className='about-me-txt'>
                        I really enjoy cooking, gaming, travel and just getting out and trying experiencing new things.
                    </p>
                    <p className='about-me-txt'>
                        In my free time I'm usually working on side projects like learning new frameworks, creating Discord bots for my communities and learning emerging technologies.
                    </p>
                </div>
            </div>
            <UncontrolledCarousel className='about-me-img'
                items={[
                    {
                        key: 1,
                        src: require('../assets/food1.png'),
                        Text: ''
                    },
                    {
                        key: 2,
                        src: require('../assets/travel1.png'),
                        Text: ''
                    },
                    {
                        key: 3,
                        src: require('../assets/personal1.jpeg'),
                        Text: ''
                    },
                    {
                        key: 4,
                        src: require('../assets/food2.png'),
                        Text: ''
                    },
                    {
                        key: 5,
                        src: require('../assets/travel2.png'),
                        Text: ''
                    },
                    {
                        key: 6,
                        src: require('../assets/pup1.jpeg'),
                        Text: ''
                    },
                    {
                        key: 7,
                        src: require('../assets/personal2.jpeg'),
                        Text: ''
                    },
                    {
                        key: 8,
                        src: require('../assets/travel3.png'),
                        Text: ''
                    },
                    {
                        key: 9,
                        src: require('../assets/pup2.jpeg'),
                        Text: ''
                    },
                    {
                        key: 10,
                        src: require('../assets/travel4.jpeg'),
                        Text: ''
                    }
                ]}
            />
        </div>
    </div>
);

export default connect()(AboutMe);