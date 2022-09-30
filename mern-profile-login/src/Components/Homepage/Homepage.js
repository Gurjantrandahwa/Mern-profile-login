import React from "react";
import {Link} from "react-router-dom";
export default  function Homepage(){
    return<div>
        <h1>Homepage</h1>
        <Link to={"/profile"}>
            <button>Profile</button>
        </Link>

        <Link to={"/login"}>
            <button>Login</button>
        </Link>
     <Link to={"/register"}>
         <button>Register</button>
     </Link>

    </div>
}