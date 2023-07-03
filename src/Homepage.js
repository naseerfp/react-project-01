import React from "react";
import TextForm from "./TextForm";
import Message from "./FriendsDispaly";
import friendsData from "./FriendList";
import { Link } from "react-router-dom";
const mystyle = {
    width: "100px",
    borderRadius: "50%"
};
function Homepage() {
    return (
        <div>
            <div className="Homepage">
                <div className="container mt-2">


                    {/* <Message msg=""/>  */}


                    <table class="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Phone</th>
                                <th>Email</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                friendsData.filter((users) => users.id == 1).map((users) => (
                                    <tr>
                                        <td>{users.name}</td>
                                        <td><img style={mystyle} src={users.imgURL} /></td>
                                        <td>{users.phone}</td>
                                        <td>{users.email}</td>


                                    </tr>
                                )
                                )
                            }
                        </tbody>
                    </table>

                    <Link to="/friends">
                        <button type="button" class="btn btn-primary btn-lg btn-block"> Show More Freinds</button>

                    </Link>
                    <TextForm heading="Enter the text to analyze below" />




                </div>
            </div>

        </div>
    )
}

export default Homepage;