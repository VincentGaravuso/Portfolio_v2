import * as React from 'react';
import { connect } from 'react-redux';
import './Home.css';
import './Resume.css';
import AboutMe from './AboutMe';
import SocialsAndResume from './SocialsAndResume';
import GitHubRepositories from './GitHubRepositories';

const Home = () => (
    <div>
        <section id='home' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', justifyContent: 'space-evenly', scrollSnapAlign: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
                <p className='fade-in-text-intro'>Hello, my name is</p>
                <p className='fade-in-text-name'>Vinny Garavuso.</p>
                <p className='fade-in-text-title'>I'm a Software Engineer.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <img className='fade-in-scroll-icon' src={require('../assets/icons8-down-48.png')}></img>
            </div>
        </section>
        <section id='aboutMe' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly', height: '100vh', scrollSnapAlign: 'center' }}>
            <AboutMe/>
        </section>
        <section id='socialsAndResume' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly', height: '100vh', scrollSnapAlign: 'center' }}>
            <SocialsAndResume />
        </section>
    </div>
);

export default connect()(Home);
