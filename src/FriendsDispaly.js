import React from "react";
import friendsData from "./FriendList";
import { Link } from "react-router-dom";

const Message = props => <p>{props.msg}</p>;
const mystyle = {
  width: "100px",
  borderRadius: "50%"
};
function FriendsDispaly() {
  return (
    <div>
      {/* <Message msg="A Generic Hello World Text" /> */}
      <div className="users">
        <div className="container mt-2">
          <h1>Friends List</h1>

          <table class="table">
            <thead>
              <tr>
                {/* <th>ID</th> */}
                <th>Name</th>
                <th>Image</th>
                <th>Phone</th>
                <th>Email</th>
                <th>View Details</th>
              </tr>
            </thead>
            <tbody>
              {
                friendsData.map((users) => (
                  <tr>

                    {/* <td>{users.id}</td> */}
                    <td>{users.name}</td>
                    <td><img style={mystyle} src={users.imgURL} /></td>
                    <td>{users.phone}</td>
                    <td>{users.email}</td>
                    <td><Link to={`/details/${users.id}`}>View Details</Link></td>

                  </tr>
                )
                )
              }
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}

export default FriendsDispaly;