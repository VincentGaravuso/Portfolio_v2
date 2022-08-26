import * as React from 'react';
import { connect } from 'react-redux';
import './css/WorkHistory.css';

const WorkHistory = () => (
    <div style={{ marginTop: '15rem' }}>
        <div className='work-history-title-text'>
            <p>Where I've Worked</p>
        </div>
        <hr/>
        <div className='work-history-container'>
            <div className='fa-container'>
                <p className='company-name-text'>First American</p>
                <p className='job-title-text'>Software Engineer</p>
                <p className='job-duration-title'>November 2020 - Present</p>
                <div>
                    <ul>
                        <li><p>End to end ownership of deliverables to production -
                            including analysis, planning, model, design, code, test,
                            document and push to production.</p></li>
                        <li><p>Refactored document matching logic giving a per-order
                            performance increase of 50%</p></li>
                        <li><p>Stand up and manage AWS resources with Terraform.</p></li>
                    </ul>
                </div>
            </div>

            <div className='nai-container'>
                <p className='company-name-text'>North Atlantic Industries</p>
                <p className='job-title-text'>Software Engineer</p>
                <p className='job-duration-title'>Jan 2019 - November 2020</p>
                <div>
                    <ul>
                        <li><p>Lorem ipsum Lorem ipsum Lorem ipsum</p></li>
                        <li><p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p></li>
                        <li><p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

export default connect()(WorkHistory);
