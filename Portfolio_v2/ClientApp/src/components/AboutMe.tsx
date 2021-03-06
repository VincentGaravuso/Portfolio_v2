import * as React from 'react';
import { connect } from 'react-redux';
import { UncontrolledCarousel } from 'reactstrap';
import './AboutMe.css';
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
                        I moved here from New York in the beginning of 2021 with my fiance Liz and our golden retriever Basil.
                    </p>
                    <p className='about-me-txt'>
                        I really enjoy cooking, gaming, travel and exploring new foods and restaurants around LA.
                    </p>
                    <p className='about-me-txt'>
                        I'm also constantly working on new projects whether it's learning new frameworks like React, creating Discord bots for my communities or learning emerging technologies like blockchain.
                    </p>
                </div>
            </div>
            <UncontrolledCarousel className='about-me-img'
                items={[
                    {
                        key: 1,
                        src: require('../assets/food1.png')
                    },
                    {
                        key: 2,
                        src: require('../assets/travel1.png')
                    },
                    {
                        key: 3,
                        src: require('../assets/personal1.png')
                    },
                    {
                        key: 4,
                        src: require('../assets/food2.png')
                    },
                    {
                        key: 5,
                        src: require('../assets/travel2.png')
                    },
                    {
                        key: 6,
                        src: require('../assets/pup1.png')
                    },
                    {
                        key: 7,
                        src: require('../assets/food3.png')
                    },
                    {
                        key: 8,
                        src: require('../assets/travel3.png')
                    },
                    {
                        key: 9,
                        src: require('../assets/pup2.png')
                    },
                    {
                        key: 10,
                        src: require('../assets/travel4.png')
                    }
                ]}
            />
        </div>
    </div>
);

export default connect()(AboutMe);