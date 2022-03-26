import * as React from 'react';
import { connect } from 'react-redux';
import './Home.css';

const Home = () => (
    <div style={{ marginTop: '10rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
            <p className='fade-in-text-intro' style={{ fontSize: '3rem', margin: 0 }}>Hello, My name is</p>
            <p className='fade-in-text-name' style={{ fontSize: '4rem', color: '#4287f5', margin: 0, }}>Vinny Garavuso.</p>
            <p className='fade-in-text-title' style={{ fontSize: '3rem', margin: 0 }}>I'm a Software Engineer.</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '30%', marginTop: '1rem' }}>
            <a className='social-media' target="_blank" rel="noopener noreferrer" href='https://github.com/VincentGaravuso/'>
                <img alt='GitHub' className='social-media-icon' style={{ width: '60px', height: '60px', margin: '1rem', marginBottom: 0 }} src={require('../assets/icons8-github.svg')} />
                <p>GitHub</p>
            </a>
            <a className='social-media' target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/vincentgaravuso/'>
                <img alt='LinkedIn' className='social-media-icon' style={{ width: '60px', height: '60px', margin: '1rem', marginBottom: 0 }} src={require('../assets/icons8-linkedin.svg')} />
                <p>LinkedIn</p>
            </a>
        </div>
    </div>
);

export default connect()(Home);
