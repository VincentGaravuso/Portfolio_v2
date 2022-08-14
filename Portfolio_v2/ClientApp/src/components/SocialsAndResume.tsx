import * as React from 'react';
import { connect } from 'react-redux';
import './SocialsAndResume.css';
import { Button, Form, Input } from 'reactstrap';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';


const SocialsAndResume = () => (
    <div>
        <div className='title-text'>
            <p style={{ fontSize: '3rem', paddingBottom: '3rem' }}>Let's Connect</p>
        </div>
        <div className='socials-and-resume-container'>
            <div className='socials-container'>
                <div className='title-text-socials-resume'>
                    Socials
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <a className='social-media' target="_blank" rel="noopener noreferrer" href='https://github.com/VincentGaravuso/'>
                        <img alt='GitHub' className='social-media-icon' style={{ width: '60px', height: '60px' }} src={require('../assets/icons8-github.svg')} />
                        <p style={{ color: '#E4DEAE' }}>GitHub</p>
                    </a>
                    <a className='social-media' target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/vincentgaravuso/'>
                        <img alt='LinkedIn' className='social-media-icon' style={{ width: '60px', height: '60px' }} src={require('../assets/icons8-linkedin.svg')} />
                        <p style={{ color: '#E4DEAE' }}>LinkedIn</p>
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
                        <p style={{ color:'#E4DEAE' }}>Open</p>
                    </a>
                    <a className='social-media' download='Vincent_Garavuso_Resume.pdf' href={require('../assets/Vincent_Garavuso_Resume.pdf')}>
                        <img alt='Download' className='social-media-icon' style={{ width: '60px', height: '60px', padding: '8px' }} src={require('../assets/download-icon.svg')} />
                        <p style={{ color: '#E4DEAE' }}>Download</p>
                    </a>
                </div>
            </div>
        </div>
        <div className='resume-container'>
            <div className='title-text-socials-resume'>
                Email Me
            </div>
            <div className='resume-body'>
                <a className='social-media' href="mailto: vinnyg96@hotmail.com">
                    <img alt='Download' className='social-media-icon' style={{ width: '60px', height: '60px', padding: '8px' }} src={require('../assets/email-svgrepo-com.svg')} />
                </a>
            </div>
        </div>
        {/*<div className='contact-me-container'>*/}
        {/*    <div className='title-text-socials-resume'>*/}
        {/*        Send me something*/}
        {/*    </div>*/}
        {/*    <div>*/}
        {/*        <Input placeholder="_____ was here! 👀" className='contact-me-text-area' bsSize="lg" type="textarea"/>*/}
        {/*    </div>*/}
        {/*    <Form className='email-send-button-container'>*/}
        {/*            <Input type="email" bsSize="lg" placeholder="Email"/>*/}
        {/*            <Button outline color="success" style={{ marginLeft: '5px', minWidth: '100px'}}>Send</Button>*/}
        {/*        </Form>*/}
        {/*</div>*/}
    </div>
);

export default connect()(SocialsAndResume);