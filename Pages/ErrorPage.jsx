import React from 'react';
import { useHistory } from 'react-router-dom';

function ErrorPage() {
    let history = useHistory();

    const gotoHome = () => {
        history.push('/');
    };

    return (
        <div
            style={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <h1
                style={{
                    color: 'wheat',
                    fontSize: '5rem',
                    fontWeight: '300',
                    fontFamily: 'lato',
                    letterSpacing: '5px',
                    textAlign: 'center',
                }}>
                Page not Found!
            </h1>
            <div
                style={{
                    position: 'absolute',
                    top: '30rem',
                    zIndex: '20',
                }}
                onClick={gotoHome}>
                <button className='button wood' type='submit'>
                    <div>Go to home</div>
                </button>
            </div>
        </div>
    );
}

export default ErrorPage;
