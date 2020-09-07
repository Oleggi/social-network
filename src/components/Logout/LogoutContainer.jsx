import React from "react";
import Logout from "./Logout";
import { connect } from "react-redux";
import { logOutUser, setAuthMeData } from "../../Redux/auth-reducer";

class LogoutContainer extends React.Component {
    render () {
        return (
            <div>
                <Logout login={this.props.login} isAuth={this.props.isAuth} setAuthMeData={this.props.setAuthMeData} logOutUser={this.props.logOutUser} />
            </div>
        )
    }
    
};

const mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { logOutUser, setAuthMeData })(LogoutContainer);