import React from 'react';
import './User.css'
const User = (props) => {
    const { name, gender, location, email, phone, picture } = props.user
    return (
        <div className="col-md-4">
            <div className="col mb-4">
                <div class="card h-100 align-items-center p-2">
                    <img className="logo" src={picture.large} class="card-img-top" alt="..." />
                    <div class="card-body text-center">
                        <h5 class="card-title">{name.first}</h5>
                        <p class="card-text">Gender: {gender}</p>
                        <p class="card-text">Country: {location.country}</p>
                        <p class="card-text">Email: {email}</p>
                        <p class="card-text">Phone: {phone}</p>
                        <button onClick={()=>props.handleAddToCart(props.user)} className="btn btn-info">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;