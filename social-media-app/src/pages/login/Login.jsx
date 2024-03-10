import { Link } from "react-router-dom"
import "./login.scss"
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Login = () => {

    const { login } = useContext(AuthContext);

    const handleLogin = () => {
        login();

    }

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
                        <input type="text" placeholder="username" />
                        <input type="password" placeholder="password" />
                        <button onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login