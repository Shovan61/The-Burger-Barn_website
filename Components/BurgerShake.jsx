import React from 'react';
import './BurgerShake.css';
import Card from '@material-ui/core/Card';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '4rem',
    },
    cardContainer: {
        position: 'relative',
        height: '230px',
        width: '300px',
        boxShadow: ' 10px 10px 0px -7px rgba(150,111,51,0.75)',
        transition: 'all 0.5s ease-in-out',
        '&:hover': {
            boxShadow: '10px 10px 16px 0px rgba(150,111,51,0.75)',
        },
        // '&:hover': {

        // }
    },
    details: {
        marginTop: '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    content: {
        color: 'wheat',
        width: '70%',
        marginRight: 'auto',
        fontFamily: 'lato',
    },
    contentPrice: {
        display: 'flex',
        color: 'wheat',
        justifyContent: 'flex-end',
        fontFamily: 'lato',
        width: '30%',
    },
});

function BurgerShake(props) {
    const { price, name, id, image } = props;
    const classes = useStyles();
    let history = useHistory();

    const gotoDetailPage = () => {
        history.push(`/menu/${id}`);
    };

    return (
        <div className={classes.root} onClick={gotoDetailPage}>
            <div className={classes.cardContainer}>
                <Card className='burger-card'>
                    <img src={image} alt={name} className='image' />
                    <span className='name'>{name}</span>
                    <span className='name view'>View Details</span>
                </Card>
            </div>

            <div className={classes.details}>
                <span className={classes.content}>{name}</span>
                <span className={classes.contentPrice}>${price}</span>
            </div>
        </div>
    );
}

export default BurgerShake;
