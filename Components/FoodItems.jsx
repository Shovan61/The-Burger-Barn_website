import React from 'react';
import { useGlobal } from '../Context';
import BurgerShake from './BurgerShake';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    navigatons: {
        alignSelf: 'center',
        height: '14vh',
        width: '85%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginBottom: '2rem',
    },
    navName: {
        color: 'wheat',
        letterSpacing: '2px',
        fontSize: '2rem',
        cursor: 'pointer',
        transition: 'color 0.2s ease-in-out',
        '&:hover': {
            color: 'red',
        },
    },
    container: {
        alignSelf: 'center',
        width: '90%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 33.33%)',
        gap: '10px',
        justifyItems: 'center',
    },

    '@media (max-width: 1025px)': {
        container: {
            gridTemplateColumns: 'repeat(2, 50%)',
        },
    },
    '@media (max-width: 950px)': {
        navName: {
            fontSize: '1.5rem',
        },
    },
    '@media (max-width: 730px)': {
        navName: {
            fontSize: '1.2rem',
        },
        container: {
            gridTemplateColumns: 'repeat(1, 100%)',
        },
    },
    '@media (max-width: 550px)': {
        navName: {
            fontSize: '1rem',
        },
    },
    '@media (max-width: 420px)': {
        navName: {
            fontSize: '0.6rem',
        },
    },
});

function FoodItems() {
    const classes = useStyles();
    const { getTypes, changeFilterName, curFilter, filteredData } = useGlobal();

    const types = getTypes();

    return (
        <div className={classes.root}>
            <div className={classes.navigatons}>
                {types.map((cur, i) => (
                    <span
                        key={i}
                        className={classes.navName}
                        style={{ color: cur === curFilter ? 'red' : 'wheat' }}
                        onClick={() => changeFilterName(cur)}>
                        {cur}
                    </span>
                ))}
            </div>
            <div className={classes.container}>
                {filteredData.map((cur, i) => (
                    <BurgerShake key={i} {...cur} />
                ))}
            </div>
        </div>
    );
}

export default FoodItems;
