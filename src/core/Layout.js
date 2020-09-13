import React from "react";
import Menu from "./Menu";
// import "../styles.css";

//This is our Layout and we should be able to show this on each page
const Layout = ({
    //It will act as a custom component on each page
    title = "Title",
    description = "Description",
    className,
    children
}) => (
        <div>
            <Menu />
            <div className="jumbotron">
                <h2>{title}</h2>
                <p className="lead">{description}</p>
            </div>
            <div className={className}>{children}</div>
        </div>
    );

export default Layout;
