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
                <p className='job-title-text'>Full Stack Software Engineer</p>
                <p className='job-duration-title'>November 2020 - Present</p>
                <div>
                    <ul>
                        <li><p>End-to-end ownership of deliverables to production -
                            including analysis, planning, model, design, code, test,
                            document and push to production.</p></li>
                        <li><p>Re-skin customer facing website to bring at a glance summaries and responsive design.</p></li>
                        <li><p>Introduce architectural improvements, boosting developer efficiency and product reliability.</p></li>
                        <li><p>Build out environment monitoring tools by leveraging AWS CloudWatch and Splunk</p></li>
                        <li><p>Design and implement ETL pipelines for processing tens of millions of records from multiple sources utilizing PySpark, Snowflake, S3, and AWS Glue.</p></li>
                    </ul>
                </div>
            </div>

            <div className='nai-container'>
                <p className='company-name-text'>North Atlantic Industries</p>
                <p className='job-title-text'>Software Engineer</p>
                <p className='job-duration-title'>Jan 2019 - November 2020</p>
                <div>
                    <ul>
                        <li><p>Implement decoupled and clean architecture for applications.</p></li>
                        <li><p>Create UI controller for proprietary hardware giving engineers the ability to test remotely.</p></li>
                        <li><p>Develop tools to automatically enforce coding standards on commits.</p></li>
                        <li><p>Revamp in-house web application for hardware management.</p></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

export default connect()(WorkHistory);
