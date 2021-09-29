import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavBar, Footer } from '../Components';
import { useAuth0 } from '@auth0/auth0-react';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    footer: {
        height: '40vh',
        marginTop: 'auto',
    },
    container: {
        marginTop: '1.5rem',
        width: '85%',
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '10rem',
    },
    title: {
        textAlign: 'center',
        color: 'wheat',
        letterSpacing: '5px',
        fontWeight: '300',
        fontSize: '3rem',
    },

    large: {
        width: '90px',
        height: '90px',
        alignSelf: 'center',
    },
    fieldContainer: {
        width: '75%',
        marginTop: '2rem',
        backgroundColor: 'wheat',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    field: {
        color: 'wheat',
        backgroundColor: 'wheat',
        width: '90%',
        height: '70px',
    },
    btnContainer: {
        position: 'absolute',
        top: '55rem',
        zIndex: '20',
    },
}));

function CheckOutPage() {
    const classes = useStyles();
    const { user } = useAuth0();
    console.log(user);
    return (
        <div className={classes.root}>
            <NavBar />

            <div className='hero-cart'>
                <h1>Payment</h1>
            </div>
            <div className={classes.container}>
                <Avatar
                    alt={user.name}
                    src={user.picture}
                    className={classes.large}
                />

                <h1 className={classes.title}>Welcome, {user.name}</h1>
                <div className={classes.fieldContainer}>
                    <TextField
                        color='secondary'
                        id='standard-basic'
                        label='Full Name'
                        className={classes.field}
                    />
                    <TextField
                        color='secondary'
                        id='standard-basic'
                        label='Email'
                        className={classes.field}
                    />
                    <TextField
                        color='secondary'
                        id='standard-basic'
                        label='Shipping Address'
                        className={classes.field}
                    />
                    <TextField
                        color='secondary'
                        id='standard-basic'
                        label='Card Number'
                        className={classes.field}
                    />
                </div>

                <div className={classes.btnContainer}>
                    <button className='button wood' type='submit'>
                        <div>Submit</div>
                    </button>
                </div>
            </div>
            <div className={classes.footer}>
                <Footer />
            </div>
        </div>
    );
}

export default CheckOutPage;
