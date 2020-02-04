import React from 'react'

const Error = () => {
    return (
        <>
            <h1>Error</h1>
            <p>{localStorage.getItem('message')}</p>
            <button className='btn__primary' onClick={() => { window.location.assign('../') }}>
                Go Back
            </button>
        </>);
}

export default Error;