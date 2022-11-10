import React from 'react';
import Table from 'react-bootstrap/Table';

const Blog = () => {
    return (
        <div>
            <div className='text-center m-5'>
                <h3>Difference between SQL and NoSQL</h3>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>SQL</th>
                            <th>NoSQL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
                            <td>They have dynamic schema</td>
                        </tr>
                        <tr>
                            <td>These databases have fixed or static or predefined schema</td>
                            <td>Non-relational or distributed database system.</td>
                        </tr>
                        <tr>
                            <td>These databases are not suited for hierarchical data storage.</td>
                            <td>These databases are best suited for hierarchical data storage.</td>
                        </tr>
                    </tbody>
                </Table>

            </div>
            <div className='m-5'>
                <h3>What is JWT, and how does it work?</h3>
                <p>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP)</p>
                <br />
                <p>Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.</p>
                <p><span>1. User sign-in using username and password or google/facebook.</span></p>
                <p><span>2. Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.</span></p>
                <p><span>3. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.</span></p>
            </div>

            <div className='text-center m-5'>
                <h3>What is the difference between javascript and NodeJS</h3>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Javascript</th>
                            <th>NodeJS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Javascript is a programming language that is used for writing scripts on the website.</td>
                            <td>NodeJS is a Javascript runtime environment.</td>
                        </tr>
                        <tr>
                            <td>Javascript can only be run in the browsers.</td>
                            <td>We can run Javascript outside the browser with the help of NodeJS.</td>
                        </tr>
                        <tr>
                            <td>It is basically used on the client-side.</td>
                            <td>It is mostly used on the server-side.</td>
                        </tr>
                    </tbody>
                </Table>

            </div>

            <div className='m-5'>
                <h3>How does NodeJS handle multiple requests at the same time?</h3>
                <p>How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
            </div>


        </div>
    );
};

export default Blog;