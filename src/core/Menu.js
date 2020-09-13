import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from '../auth/index'

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        /*Whenever user will click on the button in navbar it wil show orange,otherwise white
        Except the Signout button */
        return { color: "#ff9900" };
    } else {
        return { color: "#ffffff" };
    }
};

const Menu = ({ history }) => (
    <div>
        <ul className='nav nav-tabs bg-dark'>
            <li className='nav-item'>
                <Link className='nav-link' style={isActive(history, "/")} to='/'>Home</Link>
            </li>
            {isAuthenticated() && isAuthenticated().user.role === 0 && (
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={isActive(history, "/user/dashboard")}
                        to="/user/dashboard"
                    >
                        Dashboard
                    </Link>
                </li>
            )}

            {isAuthenticated() && isAuthenticated().user.role === 1 && (
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={isActive(history, "/admin/dashboard")}
                        to="/admin/dashboard"
                    >
                        Dashboard
                    </Link>
                </li>
            )}
            {!isAuthenticated() && (
                <Fragment>
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            style={isActive(history, "/signin")}
                            to="/signin"
                        >
                            Signin
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            style={isActive(history, "/signup")}
                            to="/signup"
                        >
                            Signup
                        </Link>
                    </li>
                </Fragment>
            )}
            {isAuthenticated() && (
                <li className="nav-item">
                    <span
                        className="nav-link"
                        style={{ cursor: "pointer", color: "#ffffff" }}
                        onClick={() =>
                            signout(() => {
                                history.push("/");
                            }).then(()=>{
                                const modal = document.createElement('div');
                                modal.innerHTML = "You've successfully signed out";
                                modal.style.position = "absolute";
                                modal.style.top = 0;
                                modal.style.left = 0;
                                modal.style.height = "100vh";
                                modal.style.width = "100vw";
                                modal.style.textAlign = "center";
                                modal.style.background = "rgba(0,0,0,0.9)";
                                modal.style.marginTop = "auto";
                                modal.style.color = "white";
                                modal.style.fontSize = "3vmin";
                                modal.style.display = "flex";
                                modal.style.justifyContent = "center";
                                modal.style.alignItems = "center";
                                modal.onclick = () => {
                                    modal.style.display = "none"
                                }
                                document.getElementById('root').append(modal);
                            })
                        }
                    >
                        Signout
                    </span>
                </li>
            )}
        </ul>
    </div>
)

export default withRouter(Menu);