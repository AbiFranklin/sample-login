import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [code, setCode] = useState(0);

    const onChange = (e) => {
        e.preventDefault();
        setCode(e.target.value);
    }

    const submitCode = async () => {
        await axios.post('https://api-v2.yacchat.com/api/v1/users/login', {
            email: localStorage.getItem('email'),
            loginCode: code,
            deviceToken: "fireBaseToken Generated For Device"
        })
            .then(function (res) {
                const data = {
                    "token" : localStorage.getItem('token'),
                    "channel": localStorage.getItem('channel'),
                    "text": "",
                    "blocks": [{"type":"divider"},{"type": "section", "text": {"type": "mrkdwn", "text": "*You are now logged into Yac.* \n From here you can: \n • Invite your entire workspace to your Yac team by typing 'invite team'. \n • Check for new Yacs by typing 'new yacs'. \n • Log out of the Yac Slack App by typing 'logout'. \n\n If you ever need assistance, feel free to type 'help' to see these option again."}, "accessory": {"type":"image", "image_url": "https://pbs.twimg.com/profile_images/1181980317365817344/aTfWmhkJ_400x400.jpg", "alt_text": "Yac Logo"}}]
              }
                if (res.data.status === true) {
                    axios.get(`https://slack.com/api/chat.postMessage?token=${data.token}&channel=${data.channel}&text=${data.text}&blocks=${data.blocks}`)
                      .then(res => console.log(res))
                      .catch(err => console.log('ERROR: ', err))
                    //window.close();
                } else {
                    localStorage.setItem('message', res.data.message);
                    window.location.assign('../error')
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <>
            <h1>Verify Your Email</h1>
            <p>We just sent an email to <b>{localStorage.getItem('email')}</b>.
            Enter your 6 digit verification code below to continue.</p>
            <input type='text' placeholder='Verification Code' onChange={onChange} /><br />
            <button className='btn__primary' onClick={submitCode}>Continue</button>
        </>);
}

export default Login;
