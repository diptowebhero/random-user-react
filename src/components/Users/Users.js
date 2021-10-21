import React, { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
import User from '../User/User';

const Users = () => {
    const [users, setUser] = useState([]);
    const[carts,setCart] = useState([]);
    useEffect(() => {
        fetch('./user.json')
            .then(response => response.json())
            .then(data => setUser(data.results))
    }, [])
    const handleAddToCart=(name)=>{
        const newCart=[...carts,setCart];
        setCart(newCart)
    }
    return (
        <div>
            <div className="row">
                <div className="col-md-9">
                    <div className="row cards">
                        {users.map(user => <User handleAddToCart={handleAddToCart} user={user}></User>)}
                    </div>
                </div>
                <div className="col-md-3">
                    <Cart carts={carts}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Users;