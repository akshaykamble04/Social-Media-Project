import { Link } from "react-router-dom"
import "./register.scss"

const Register = () => {
    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>Hi there...</h1>
                    <p>
                        Unlock a world of connections!
                        Join now and be part of a vibrant community at ConnectSphere.
                        🌐 #JoinUs #SocialMedia
                    </p>
                    <span>Do you have an account?</span>
                    <Link to="/login">
                    <button>Login</button>
                    </Link>
                    
                </div>
                <div className="right">
                    <h1>Register</h1>
                    <form action="">
                        <input type="text" placeholder="username" />
                        <input type="email" placeholder="email" />
                        <input type="password" placeholder="password" />
                        <input type="text" placeholder="name" />
                        <button>Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register