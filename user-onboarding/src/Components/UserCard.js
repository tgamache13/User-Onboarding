import React from 'react';

function UserCard(props) {
    return (
        <div>
            <p>User Name: {props.user.name}</p>
            <p>User Email: {props.user.email}</p>
            <p>User ID: {props.user.id}</p>

        </div>

    );
}

export default UserCard;