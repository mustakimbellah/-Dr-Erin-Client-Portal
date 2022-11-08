import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

const Home2Section = () => {
    return (
        <div className='mx-5 p-5'>
            <h2>Maximum Patient Information</h2>

            <ProgressBar className='m-2' striped variant="danger" now={96} label={` Blood Pressure : ${96}% `} />
            <ProgressBar className='m-2' striped variant="warning" now={87} label={` Diabetes : ${87}% `} />
            <ProgressBar className='m-2' striped variant="info" now={70} label={` Stroke exercises : ${70}% `} />
            <ProgressBar className='m-2' striped variant="success" now={44} label={` Baby Patient : ${44}% `} />
            <ProgressBar className='m-2' striped variant="dark" now={56} label={` Other Patient : ${56}% `} />

        </div>
    );
};

export default Home2Section;