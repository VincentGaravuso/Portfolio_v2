import * as React from 'react';
import { connect } from 'react-redux';
import { UncontrolledCarousel } from 'reactstrap';
import './AboutThis.css';
const AboutThis = () => (
    <div>
        <div className='title-text'>
            <p style={{ fontSize: '3rem' }}>About This</p>
        </div>
        <div className='about-this-first'>
            <div className='about-this-first-img'>
            </div>
            <div className='about-this-first-text'>
            </div>
        </div>
        <div className='about-this-second'>
            <div className='about-this-second-img'>
            </div>
            <div className='about-this-second-text'>
            </div>
        </div>
    </div>
);

export default connect()(AboutThis);