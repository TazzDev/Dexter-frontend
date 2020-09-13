import React from "react";
import Layout from "../core/Layout";

//Layout of the dashboard strictly for Admin 
class AdminDashboard extends React.Component {

    constructor(props) {
        super(props);
        this.renderAdminStream = this.renderAdminStream.bind(this);
    }

    renderAdminStream = (e) => {
        this.props.history.push(`/admin/dashboard/${e.target.innerText}`)
    }

    render() {
    return (
        <React.Fragment>
        <Layout title='Dashboard' description='Your Educator Dashboard'>
        </Layout>
        <h1 id="edu-dash-title">Pick a course to start a session:</h1>
        <div id="edu-courses">

            <div className="edu-card" onClick={this.renderAdminStream}>
                React
            </div>

            <div className="edu-card" onClick={this.renderAdminStream}>
                JavaScript
            </div>

            <div className="edu-card" onClick={this.renderAdminStream}>
                AWS
            </div>

            <div className="edu-card" onClick={this.renderAdminStream}>
                Python
            </div>

        </div>
        </React.Fragment>
    )}
}

export default AdminDashboard;