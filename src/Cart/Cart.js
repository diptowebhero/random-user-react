import React from 'react';

const Cart = (props) => {
    console.log(props.carts)
    return (
        <div>
            <h4>Total Members : {props.carts.length}</h4>
        </div>
    );
};

export default Cart;