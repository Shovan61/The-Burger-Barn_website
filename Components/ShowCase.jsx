import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { specialities } from '../utilitis';
import CaseItem from './CaseItem';

const useStyles = makeStyles({
    root: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        marginBottom: '5rem',
    },
    title: {
        color: 'wheat',
        fontWeight: '400',
        fontSize: '2rem',
        letterSpacing: '7px',
        marginBottom: '3rem',
        marginTop: '5rem',
    },
    container: {
        marginTop: '2rem',
        width: '85%',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 23%)',
        justifyContent: 'space-between',
    },

    '@media (max-width: 850px)': {
        container: {
            gridTemplateColumns: 'repeat(2, 48%)',
        },
    },
    '@media (max-width: 420px)': {
        title: {
            fontSize: '1.2rem',
        },
        container: {
            gridTemplateColumns: 'repeat(1, 98%)',
        },
    },
});

function ShowCase() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1 className={classes.title}>We Ensure Top</h1>
            <div className={classes.container}>
                {specialities.map((curObj) => (
                    <CaseItem key={curObj.id} {...curObj} />
                ))}
            </div>
        </div>
    );
}

export default ShowCase;
