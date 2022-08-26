import * as React from 'react';
import { connect } from 'react-redux';
import './css/SocialsAndResume.css';

const SocialsAndResume = () => (
    <div style={{ marginTop: '15rem' }}>
        <div className='title-text'>
            <p>Let's Connect</p>
        </div>
        <hr/>
        <div className='socials-and-resume-container'>
            <div className='socials-container'>
                <div className='title-text-socials-resume'>
                    Socials
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <a className='social-media' target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/vincentgaravuso/'>
                        <img alt='LinkedIn' className='social-media-icon' style={{ width: '60px', height: '60px' }} src={require('../assets/icons8-linkedin.svg')} />
                        <p style={{ color: '#051c32' }}>LinkedIn</p>
                    </a>
                    <a className='social-media' target="_blank" rel="noopener noreferrer" href='https://github.com/VincentGaravuso/'>
                        <img alt='GitHub' className='social-media-icon' style={{ width: '60px', height: '60px' }} src={require('../assets/icons8-github.svg')} />
                        <p style={{ color: '#051c32' }}>GitHub</p>
                    </a>
                    <a className='social-media' href="mailto: vinnyg96@hotmail.com">
                        <img alt='Download' className='social-media-icon' style={{ width: '60px', height: '60px', padding: '8px' }} src={require('../assets/email-svgrepo-com.svg')} />
                    </a>
                </div>
            </div>

            <div className='resume-container'>
                <div className='title-text-socials-resume'>
                    Resume
                </div>
                <div className='resume-body'>
                    <a className='social-media' target="_blank" rel="noopener noreferrer" href={require('../assets/Vincent_Garavuso_Resume.pdf')}>
                        <img alt='New Tab' className='social-media-icon' style={{ width: '60px', height: '60px', padding: '8px' }} src={require('../assets/new-window.svg')} />
                        <p style={{ color:'#d2d3d3' }}>Open</p>
                    </a>
                    <a className='social-media' download='Vincent_Garavuso_Resume.pdf' href={require('../assets/Vincent_Garavuso_Resume.pdf')}>
                        <img alt='Download' className='social-media-icon' style={{ width: '60px', height: '60px', padding: '8px' }} src={require('../assets/download-icon.svg')} />
                        <p style={{ color: '#d2d3d3' }}>Download</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
);

export default connect()(SocialsAndResume);