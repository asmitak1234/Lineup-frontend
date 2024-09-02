import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import "../styles/Form.css"
import LoadingIndicator from "./LoadingIndicator";

function Form({ route, method }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const name = method === "login" ? "Login" : "Register";

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            const res = await api.post(route, { username, password })
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/")
                setTimeout(()=>{alert("You are Logged in !!");},500);
                
            }
            else if (method==="register")
            {
                navigate("/login");
                setTimeout(()=>{alert("Thank you to Register !! Log in to your account.");},500); 
            }
            else {
                navigate("/login")
            }
        } catch (error) {
            if (method === "login") {
                // Show specific error alert for login
                alert(`Login failed: ${error.response?.data?.message || 'An error occurred.Try again with CORRECT Credentials.'}`);
            } else {
                // Show specific error alert for registration
                alert(`Registration failed: ${error.response?.data?.message || 'An error occurred.Try again with other Credentials.'}`);
            }
        } finally {
            setLoading(false)
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h1>{name}</h1>
            <input
                className="form-input"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <input
                className="form-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            {loading && <LoadingIndicator />}
            <button className="form-button" type="submit">
                {name}
            </button>
        </form>
    );
}

export default Form