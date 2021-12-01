import React, {Fragment} from "react";
import menu from "../assets/Unknown.png"

export default function Menu() {
    return (
        <Fragment>
            <div className="row">
                <div
                    className="col"
                    style={{
                    display: 'flex',
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: 'center',
                    height: "auto"
                }}>
                    <img
                        src={menu}
                        alt="menu"
                        width={100}
                        height={100}
                        style={{
                        width: "90%",
                        height: "100%",
                        loading: "lazy"
                    }}/>
                </div>
            </div>

        </Fragment>
    );
}
