import React from 'react';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='text-center bg-dark text-light p-5'>
            <p>
                <small>Copyright coming soon-2022</small></p>
            <h6> S M Mustakim Bellah</h6>

            <h2 className='m-2'><FaFacebook></FaFacebook><FaLinkedin></FaLinkedin><FaGithub></FaGithub></h2>

        </div>
    );
};

export default Footer;