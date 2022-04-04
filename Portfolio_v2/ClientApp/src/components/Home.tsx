import * as React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import './Home.css';
import './Resume.css';
import AboutMe from './AboutMe';

const Home = () => (
    <div>
        <section id='home' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', justifyContent: 'center', scrollSnapAlign: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left', position: 'relative', bottom: '10rem' }}>
                <p className='fade-in-text-intro' style={{ fontSize: '3rem', margin: 0 }}>Hello, my name is</p>
                <p className='fade-in-text-name' style={{ fontSize: '4rem', color: '#4287f5', margin: 0, }}>Vinny Garavuso.</p>
                <p className='fade-in-text-title' style={{ fontSize: '3rem', margin: 0 }}>I'm a Software Engineer.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
                <img className='fade-in-scroll-icon' style={{ bottom: '10rem', position: 'absolute' }} src={require('../assets/icons8-down-48.png')}></img>
            </div>
        </section>
        <section id='aboutMe' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', paddingTop: '100px', scrollSnapAlign: 'center' }}>
            <AboutMe/>
        </section>
        <section id='thisProject' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', paddingTop: '100px', scrollSnapAlign: 'center' }}>
            <p style={{ fontSize: '3rem' }}>About This</p>
        </section>
        <section id='socialsAndResume' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', paddingTop: '100px', scrollSnapAlign: 'center' }}>
            <p style={{ fontSize: '3rem' }}>Socials & Resume</p>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '30%', marginTop: '1rem' }}>
                <a className='social-media' target="_blank" rel="noopener noreferrer" href='https://github.com/VincentGaravuso/'>
                    <img alt='GitHub' className='social-media-icon' style={{ width: '60px', height: '60px', margin: '2rem', marginBottom: 0 }} src={require('../assets/icons8-github.svg')} />
                    <p>GitHub</p>
                </a>
                <a className='social-media' target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/vincentgaravuso/'>
                    <img alt='LinkedIn' className='social-media-icon' style={{ width: '60px', height: '60px', margin: '2rem', marginBottom: 0 }} src={require('../assets/icons8-linkedin.svg')} />
                    <p>LinkedIn</p>
                </a>
            </div>
            <div className='resume-body'>
                <a className='resume-links' target='_blank' rel='noopener noreferrer' href={require('../assets/Vincent_Garavuso_Resume.pdf')}>
                    <Button color="primary" className='resume-button'>
                        <p className='resume-text'>Open</p>
                    </Button>
                </a>
                <a className='resume-links' download="Vincent_Garavuso_Resume.pdf" href={require('../assets/Vincent_Garavuso_Resume.pdf')}>
                    <Button color="primary" className='resume-button'>
                        <p className='resume-text'>Download</p>
                    </Button>
                </a>
            </div>
        </section>
    </div>
);

export default connect()(Home);
