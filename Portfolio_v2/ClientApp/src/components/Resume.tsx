import * as React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import './Resume.css';
const Resume = () => (
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
);

export default connect()(Resume);