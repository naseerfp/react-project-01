import React from "react";
import TextForm from "./TextForm";
import Message from "./Users";
function Homepage() {
    return (
        <div>
            <div className="Homepage">
                <div className="container mt-2">

              {/* <Message msg=""/>  */}


                    <TextForm heading="Enter the text to analyze below" />




                </div>
            </div>

        </div>
    )
}

export default Homepage;