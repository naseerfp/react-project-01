import React from "react";
const Message = props => <p>{props.msg}</p>;
function Users(){
    return(
        <div>
               {/* <Message msg="A Generic Hello World Text" /> */}
            <div className="users">
            <h1>Users List</h1>
            </div>
        </div>
    )
}

export default Users;