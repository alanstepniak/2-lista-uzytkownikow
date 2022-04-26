import React from "react";
import './UsersList.css';

function UsersList(props) {
    let names = props.usersList;
    let usersLiElement = names.map((user) => {
        return(
    <li key={user.id}>{user.name} <span onClick={()=>{props.removeUserMethod(user.id);}}>X</span></li>
        );
    })
return(
    <ul className="theList">
        {usersLiElement}
</ul>
);
}

export default UsersList;