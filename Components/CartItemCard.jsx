import React from 'react';
import { useGlobal } from '../Context';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import './CartItemCard.css';

const useStyles = makeStyles({
    img: {
        width: '40%',
        height: '100%',
    },
    content: {
        width: '60%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
    },
    spn: {
        color: 'wheat',
        fontFamily: 'lato',
    },
    namePrice: {
        marginLeft: '1rem',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'column',
    },
    qntityDelete: {
        marginRight: '1rem',
        height: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        // border: '1px solid white',
    },
    icon: {
        color: '#FAD397',
        alignSelf: 'flex-start',
        cursor: 'pointer',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
            transform: 'scale(1.1)',
        },
        position: 'relative',
        bottom: '1rem',
    },
    quantity: {
        position: 'static',
        alignSelf: 'center',
    },
});

function CartItemCard(props) {
    const { image, quantity, name, price, id } = props;
    const { changeQuantity, deleteItem } = useGlobal();
    const classes = useStyles();

    const handleMinus = () => {
        let newQuantity;
        if (quantity > 1) {
            newQuantity = quantity - 1;
        } else if (quantity === 1) {
            newQuantity = quantity;
        }

        changeQuantity(id, newQuantity);
    };

    const handlePlus = () => {
        let newQuantity;

        newQuantity = quantity + 1;

        changeQuantity(id, newQuantity);
    };

    return (
        <div className='cart-item-root'>
            <div className={classes.img}>
                <img
                    height='100%'
                    width='100%'
                    src={image}
                    alt={name}
                    style={{ objectFit: 'cover' }}
                />
            </div>

            <div className={classes.content}>
                <div className={classes.namePrice}>
                    <span className={classes.spn}>{name}</span>
                    <span className={classes.spn}>
                        ${price} x {quantity}
                    </span>
                </div>

                <div className={classes.qntityDelete}>
                    <IconButton>
                        <DeleteIcon
                            className={classes.icon}
                            onClick={() => deleteItem(id)}
                        />
                    </IconButton>

                    <div className={classes.quantity}>
                        <div
                            className='wood'
                            style={{
                                height: '40px',
                                width: '100px',
                                borderRadius: '5px',
                                boxShadow:
                                    'inset 0px 0px 0px 1px rgba(0, 0, 0, 0.2),inset 0px -5px 0px 0px rgba(0, 0, 0, 0.3),inset 0px 2px 0px 0px rgba(255, 255, 255, 0.5)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-around',
                            }}>
                            <IconButton size='small' onClick={handleMinus}>
                                {' '}
                                <RemoveIcon />
                            </IconButton>

                            <span style={{ fontFamily: 'lato' }}>
                                {quantity}
                            </span>
                            <IconButton size='small' onClick={handlePlus}>
                                {' '}
                                <AddIcon />
                            </IconButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItemCard;
