import './App.css';
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Profile from "./Components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import {useState} from "react";

function App() {
    const [user, setLoginUser] = useState({})
    return <BrowserRouter>
        <div className={"app"}>
            <Routes>
                <Route exact path={"/"} element={user && user._id ? <Profile setLoginUser={setLoginUser}/> : <Login setLoginUser={setLoginUser}/>}/>
                <Route path={"/register"} element={<Register/>}/>
                <Route path={"/login"} element={<Login setLoginUser={setLoginUser}/>}/>

                <Route path={"/profile"} element={<Profile/>}/>
            </Routes>
        </div>
    </BrowserRouter>
}

export default App;
