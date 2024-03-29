import * as React from 'react';
import { connect } from 'react-redux';
import './css/Home.css';
import AboutMe from './AboutMe';
import SocialsAndResume from './SocialsAndResume';
import GitHubData from './GitHubRepositories';
import WorkHistory from './WorkHistory';

const Home = () => (
    <div>
        <section id='home' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly', height: '100vh' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
                <p className='fade-in-text-intro'>Hello, my name is</p>
                <p className='fade-in-text-name'>Vinny Garavuso.</p>
                <p className='fade-in-text-title'>I'm a <mark>Software Engineer</mark> currently working at <a href='https://www.therootapp.com/'>First American</a></p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <img className='fade-in-scroll-icon' src={require('../assets/icons8-down-48.png')}></img>
            </div>
        </section>
        <section id='aboutMe' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly'}}>
            <AboutMe />
        </section>
        <section id='workHistory' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly'}}>
            <WorkHistory />
        </section>
        <section id='socialsAndResume' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly'}}>
            <SocialsAndResume/>
        </section>
        <section id='github'>
            <GitHubData/>
        </section>
    </div>
);

export default connect()(Home);
