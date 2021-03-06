import styles from '../styles/Home.module.css';
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("123asd");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.table({ name, email, password });
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/login`, {
        email,
        password,
      });
      console.log("LOGIN RESPONSE", data);
      // setLoading(false);
    } catch (err) {
      toast(err.response.data);
      setLoading(false);
    }
  };
    return (
        <div>
            <h1 className={`  bg-primary text-center ${styles.square}`}>Login</h1>
            <div className="container col-md-4 offset-md-4 pb-5">
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        className="form-control mb-4 p-4"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                        required
                    />

                    <input
                        type="password"
                        className="form-control mb-4 p-4"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                        required
                    />
                    <div className="d-grid gap-2">
                        <button
                            type="submit"
                            className="btn btn-block btn-primary"
                            disabled={!email || !password || loading}
                        >
                            {loading ? <SyncOutlined spin /> : "Submit"}
                        </button>
                    </div>
                </form>

                <p className="text-center p-3">
                    Not yet registered?{" "}
                <Link href="/register">
                    <a>Register</a>
                </Link>
                </p>
            </div>
        </div>
    )
}

export default Login
