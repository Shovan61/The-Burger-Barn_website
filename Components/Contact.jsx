import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        marginTop: '0rem',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
    },
    input: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '4rem',
    },
    title: {
        color: 'wheat',
        fontWeight: '400',
        fontSize: '2rem',
        letterSpacing: '7px',
        marginBottom: '4rem',
        textAlign: 'center',
    },
    email: {
        height: '40px',
        width: '300px',
        backgroundColor: 'wheat',
        marginTop: '0.5rem',
        borderRadius: '5px',
        outline: 'none',
        border: '1px solid wheat',
    },
    textarea: {
        minHeight: '200px',
        width: '570px',
        resize: 'none',
        backgroundColor: 'wheat',
        marginTop: '0.5rem',
        borderRadius: '5px',
        outline: 'none',
        border: '1px solid wheat',
    },
    btnContainer: {
        position: 'absolute',
        top: '30rem',
        zIndex: '20',
    },
    '@media (max-width: 1050px)': {
        root: {
            marginTop: '15rem',
        },
        btnContainer: {
            top: '45rem',
        },
    },
    '@media (max-width: 605px)': {
        textarea: {
            width: '400px',
        },
    },
    '@media (max-width: 450px)': {
        textarea: {
            width: '200px',
        },
        email: {
            width: '150px',
        },
    },
});

function Contact() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h1 className={classes.title}>Contact Us</h1>
            <form
                action='https://formspree.io/f/xvodlqke'
                method='POST'
                className={classes.form}>
                <div className={classes.input}>
                    <label
                        htmlFor='email'
                        style={{ color: 'wheat', fontFamily: 'lato' }}>
                        Email Address
                    </label>
                    <input
                        id='email'
                        className={classes.email}
                        type='email'
                        name='_replyto'
                        required
                    />
                </div>

                <div className={classes.input}>
                    <label
                        htmlFor='message'
                        style={{ color: 'wheat', fontFamily: 'lato' }}>
                        Your Message
                    </label>
                    <textarea
                        className={classes.textarea}
                        id='message'
                        name='message'
                        required
                    />
                </div>

                <div className={classes.btnContainer}>
                    <button className='button wood' type='submit'>
                        <div>Submit</div>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Contact;
