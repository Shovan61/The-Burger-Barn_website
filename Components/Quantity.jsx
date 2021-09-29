import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    span: {
        color: 'black',
        fontFamily: 'lato',
    },
    icon: {},
});

function Quantity({ isFresh }) {
    const classes = useStyles();
    return (
        <div
            className='wood'
            style={{
                height: '40px',
                width: '150px',
                borderRadius: '5px',
                marginLeft: '3rem',
                boxShadow:
                    'inset 0px 0px 0px 1px rgba(0, 0, 0, 0.2),inset 0px -5px 0px 0px rgba(0, 0, 0, 0.3),inset 0px 2px 0px 0px rgba(255, 255, 255, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
            }}>
            <IconButton size='small'>
                {' '}
                <RemoveIcon className={classes.icon} />
            </IconButton>

            <span className={classes.span}>1</span>
            <IconButton size='small'>
                {' '}
                <AddIcon className={classes.icon} />
            </IconButton>
        </div>
    );
}

export default Quantity;
