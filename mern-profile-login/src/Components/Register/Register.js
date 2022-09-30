import React, {useState} from "react";
import "./Register.css";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        reEnterPassword: ''
    })
    const handleChange = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const register = (e) => {
        e.preventDefault()
        const {name, email, password, reEnterPassword} = user
        if (name && email && password && (password === reEnterPassword)) {

            axios.post("http://localhost:3001/register", user)
                .then(res => alert(res.data.message))
        } else {
            alert("invalid user")
            navigate("/login")
        }

    }
    // console.log(user)
    return <div>
        <h1>Register</h1>
        <form>
            <div>
                <input type={"name"}
                       placeholder={"Name"}
                       name={"name"}
                       value={user.name}
                       onChange={handleChange}/>
            </div>
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
            <div>

                <input type={"password"}
                       placeholder={"Re-Enter Password"}
                       name={"reEnterPassword"}
                       value={user.reEnterPassword}
                       autoComplete={"off"}
                       onChange={handleChange}
                />
            </div>
            <div>
                <button onClick={register}>Register</button>
            </div>
            <div>Or</div>

        </form>

            <Link to={"/login"}>
                <button>Login</button>
            </Link>


    </div>
}