import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import './Persons.css';

const useStyles = makeStyles({
    root: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        position: 'relative',
    },
    p1: {
        display: 'flex',
        position: 'relative',
        height: '20vh',
    },
    p2: {
        display: 'flex',
        position: 'relative',
        height: '20vh',
    },
    avatar: {
        height: '100px',
        width: '100px',
        alignSelf: 'center',
    },
    right: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    name: {
        color: 'wheat',
        marginLeft: '2rem',
        fontFamily: 'lato',
        position: 'relative',
        bottom: '3rem',
    },
    '@media (max-width: 1050px)': {
        root: {
            flexDirection: 'column',
        },
        name: {
            bottom: '3rem',
        },
        p1: {
            marginBottom: '3rem',
        },
    },

    '@media (max-width: 490px)': {
        avatar: {
            height: '70px',
            width: '70px',
        },
        name: {
            bottom: '1.9rem',
        },
    },
    '@media (max-width: 320px)': {
        name: {
            bottom: '0.8rem',
        },
        avatar: {
            height: '70px',
            width: '70px',
        },
    },
});

function Persons(props) {
    const classes = useStyles();
    const { person1, per1Img, comment1, person2, per2Img, comment2 } = props;

    return (
        <div className={classes.root}>
            <div className={classes.p1}>
                <Avatar
                    alt={person1}
                    src={per1Img}
                    className={classes.avatar}
                />

                <div className={classes.right}>
                    <div className='chat'>
                        <span>{comment1}</span>
                    </div>
                    <span className={classes.name}>{person1}</span>
                </div>
            </div>
            <div className={classes.p2}>
                <Avatar
                    alt={person2}
                    src={per2Img}
                    className={classes.avatar}
                />
                <div className={classes.right}>
                    <div className='chat'>
                        <span>{comment2}</span>
                    </div>
                    <span className={classes.name}>{person2}</span>
                </div>
            </div>
        </div>
    );
}

export default Persons;
