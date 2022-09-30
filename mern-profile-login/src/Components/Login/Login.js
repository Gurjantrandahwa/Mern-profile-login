import React, {useState} from "react";
import "./Login.css";
import axios from "axios";
import {Link,useNavigate} from "react-router-dom";

export default function Login({setLoginUser}) {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: '',
        password: '',
    })
    const handleChange = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const login = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3001/login", user)
            .then(res => {
                alert(res.data.message)
                setLoginUser(res.data.user)
navigate("/profile")
            })

    }
    // console.log(user)
    return <div>

        <form>
            <h1>Login</h1>
            <div>

                <input type={"email"}
                       placeholder={"Email"}
                       name={"email"}
                       value={user.email}
                       onChange={handleChange}/>
            </div>
            <div>
                <input type={"password"}
                       placeholder={"Password"}
                       name={"password"}
                       value={user.password}
                       autoComplete={"off"}
                       onChange={handleChange}/>
            </div>
            <button onClick={login}>Login</button>
            <div>Or</div>
        </form>
        <Link to={"/register"}>
            <button>Register</button>
        </Link>
    </div>
}