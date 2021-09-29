import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './CaseItem.css';

const useStyles = makeStyles({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    card: {},
    title: {
        color: 'wheat',
        fontWeight: '400',
        fontSize: '2rem',
        letterSpacing: '7px',
        marginBottom: '3rem',
    },
    img: {
        display: 'block',
        width: '100%',
        height: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        boxShadow: '-13px -19px 13px -2px rgba(6,5,5,0.75)',
    },
});

function CaseItem(props) {
    const { image, name } = props;

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className='card'>
                <img className={classes.img} src={image} alt={name} />
            </div>
            <h1 className={classes.title}>{name}</h1>
        </div>
    );
}

export default CaseItem;
