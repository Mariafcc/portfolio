import React from "react";

const Ux = () => {


    return (

        <div id="home" className="center header" style={{ height: "400px", display: 'block', backgroundColor: "c3dbdf"}}>
            <p className="card-body font-trebuchet text-justify center"
                style={{
                    height: "auto",
                    fontSize: "200%",
                    lineHeight: "200%",
                }}>
                UI/UX Project
                </p>

            <div className="card-body font-trebuchet text-justify center"
                style={{
                    height: "auto",
                    fontSize: "132%",
                    lineHeight: "200%",
                }}>
                <div style={{
                    height:"300px",
                    width:"300px",
                }}>
                    <a href={"https://www.figma.com/proto/xHETWAMtWNLrN3LdxcI6yI/Untitled?node-id=65%3A114&scaling=scale-down&page-id=6%3A4951"}>
                        <img src="../build/images/uxui.png" alt={"Figma"} style={{ color: "black" }} ></img>
                    </a>
                </div>

            </div>
            <p className="font-trebuchet text-justify center"
                style={{
                    height: "auto",
                    fontSize: "132%",
                }}>
                This design is meant for users that are interested in taking beach vacation but do not know where to go. With a study i have found that users mainly go to vacations based on family or friends recommendation. If a booking site adds a feature like this it will increase the time spent on site as well as the amount of items booked with the site.
                </p>
        </div>
    )

}

export default Ux;