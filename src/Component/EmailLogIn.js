import React, { useState, useEffect } from 'react';
import axios from 'axios';
import queryString from 'query-string';

const EmailLogIn = () => {
    const [email, setEmail] = useState('');

    useEffect(() => {
        const values = queryString.parse(window.location.search);
        localStorage.setItem('channel', values.channel);
        localStorage.setItem('user', values.user);
        localStorage.setItem('token', values.token);
    }, []);


    const onChange = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
        localStorage.setItem('email', e.target.value);
    }

    const submitEmail = () => {
        axios.post('https://api-v2.yacchat.com/api/v1/users/signin', {
            email: email,
        })
            .then(function (res) {
                if (res.data.status === true) {
                    window.location.assign('/login');
                } else {
                    localStorage.setItem('message', res.data.message);
                    window.location.assign('/error')
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <div>
            <h2>Sign In</h2>
            <p>Use the email your team admin invited you to YAC with.</p>
            <input type="text" placeholder="Enter your work email" onChange={onChange} /><br />
            <button onClick={submitEmail} className='btn__primary'>Continue</button>
        </div>
    );
}

export default EmailLogIn;