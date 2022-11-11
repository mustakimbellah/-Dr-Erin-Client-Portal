import React, { useState } from 'react';
import PostView from './PostView';

const Review = () => {

    const [user, setUser] = useState({});

    const handleAddReview = event => {
        event.preventDefault();
        console.log(user);

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('User comment successfully');
                    event.target.reset();
                }
            })



    }

    const handleInputBlur = event => {
        const field = event.target.name;
        const value = event.target.value;

        const newUser = { ...user }
        newUser[field] = value;
        setUser(newUser);
        console.log(newUser);
    }

    return (


        <div className='text-center m-5'>
            <h2>ADD Review Option</h2>
            <form onSubmit={handleAddReview}>
                <input className='m-2' onBlur={handleInputBlur} type="text" name='name' placeholder='name' required />
                <br />
                <input className='m-2 w-100' onBlur={handleInputBlur} type="text" name='address' placeholder='Comment' required />
                <br />
                <button type="submit">Add Review</button>
            </form>

            <div>
            </div>
        </div>



    );
};

export default Review;