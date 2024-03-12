import { Link } from "react-router-dom"
import "./login.scss"
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";

const Login = () => {

    const [inputs, setInputs] = useState({
        username: "",
        password: "",
    });

    const [err, setErr] = useState(null);

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const { login } = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await login(inputs);
        } catch (err) {
            setErr(err.response.data);
        }

    };

    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Hi there...</h1>
                    <p>
                        Unlock a world of connections!
                        Join now and be part of a vibrant community at ConnectSphere.
                        🌐 #JoinUs #SocialMedia
                    </p>
                    <span>Don't you have an account?</span>
                    <Link to="/register">
                        <button>Register</button>
                    </Link>

                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form action="">
                        <input type="text"
                            placeholder="username"
                            name="username"
                            onChange={handleChange}
                        />
                        <input type="password"
                            placeholder="password"
                            name="password"
                            onChange={handleChange}
                        />
                        {err && err}
                        <button onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login