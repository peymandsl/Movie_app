import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../auth/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async () => {
    try {
      let user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="register">
      <div className="form-image">
        <img src={"https://picsum.photos/800/800"} alt="sample-movie" />
      </div>
      <div className="register-form">
        <h1 className="form-title display-3">Login</h1>
        <form id="login">
          <div className="mb-3">
            <label for="email" className="form-label display-4">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="form-control"
              placeholder="Enter your email address..."
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label for="password" className="form-label display-4">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="form-control"
              placeholder="Enter your password..."
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <input
            type="button"
            value="Login"
            onClick={handleSubmit}
            className="btn btn-primary form-control"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
