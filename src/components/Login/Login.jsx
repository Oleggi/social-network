import React from "react";

const Login = () => {
    return (
        <div>
            <h2>You are not autorized</h2>
            <label htmlFor="">Login</label>
            <form action="login">
                <input type="text"/>
            </form>
        </div>
    )
}

export default Login;