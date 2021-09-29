/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CallIcon from '@material-ui/icons/Call';
import RoomIcon from '@material-ui/icons/Room';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import logoWhite from '../images/white logo.png';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import './Footer.css';

const useStyles = makeStyles({
    content: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    },
    contentItem: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '2rem',
        marginBottom: '0.5rem',
    },
    font: {
        color: 'wheat',
        fontFamily: 'lato',
    },
    location: {
        height: '100%',
        width: '400px',
        alignSelf: 'center',
        marginBottom: '1rem',
    },
    map: {
        height: '100%',
        width: '100%',
    },
    header: {
        color: 'wheat',
        fontSize: '1.7rem',
        letterSpacing: '2px',
        marginBottom: '3rem',
    },
    logoContainer: {
        display: 'flex',
        flexDirection: 'column',

        justifyContent: 'space-evenly',
    },
    logo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    social: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },

    '@media (max-width: 1040px)': {
        location: {
            width: '300px',
        },
    },
    '@media (max-width: 960px)': {
        location: {
            display: 'none',
        },
    },
    '@media (max-width: 650px)': {
        logoContainer: {
            display: 'none',
        },
    },
    '@media (max-width: 450px)': {
        font: {
            fontSize: '12px',
        },
    },
});

function Footer() {
    const classes = useStyles();

    return (
        <div className='footer-root'>
            <div className={classes.content}>
                <span className={classes.header}>Contact Details</span>
                <div className={classes.contentItem}>
                    <RoomIcon className={classes.font} />
                    <span
                        className={classes.font}
                        style={{ marginLeft: '0.4rem' }}>
                        3 Government Fleet Road Natchez, MS
                    </span>
                </div>
                <div className={classes.contentItem}>
                    <AccessTimeIcon className={classes.font} />
                    <span
                        className={classes.font}
                        style={{ marginLeft: '0.4rem' }}>
                        Mon-Sat 10 AM - 10 PM
                    </span>
                </div>
                <div className={classes.contentItem}>
                    <CallIcon className={classes.font} />
                    <span
                        className={classes.font}
                        style={{ marginLeft: '0.4rem' }}>
                        (01) 234 5678
                    </span>
                </div>
            </div>

            <div className={classes.location}>
                <span className={classes.header}>Location Map</span>
                <div className={classes.map}>
                    <iframe
                        src='https://maps.google.com/maps?q=3%20Government%20Fleet%20Road%20Natchez&t=&z=19&ie=UTF8&iwloc=&output=embed'
                        width='100%'
                        height='100%'
                        frameBorder='0'
                        style={{
                            borderRadius: '20px',
                        }}
                        allowFullScreen=''
                        aria-hidden='false'
                        tabIndex='0'
                    />
                </div>
            </div>

            <div className={classes.logoContainer}>
                <div className={classes.logo}>
                    <img height='80px' src={logoWhite} alt='logo' />
                    <span
                        className={classes.header}
                        style={{ letterSpacing: '0px' }}>
                        The Burger Barn
                    </span>
                </div>
                <div className={classes.social}>
                    <FacebookIcon style={{ color: '#3b5998' }} />
                    <InstagramIcon
                        style={{
                            background:
                                'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
                        }}
                    />
                    <TwitterIcon style={{ color: '#00ACEE' }} />
                </div>
            </div>
        </div>
    );
}

export default Footer;
