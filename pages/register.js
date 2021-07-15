import {useState} from "react"
import axios from 'axios'
import styles from '../styles/Home.module.css';
import {toast} from 'react-toastify'
import { SyncOutlined } from "@ant-design/icons";
import Link from 'next/link'

const Register = () => {
    const [name, setName] = useState('Bela');
    const [email, setEmail] = useState('test@test.com');
    const [password, setPassword] = useState('123asd');
    const [loading, setLoading] = useState(false)


    const handleSubmit = async (e) => {
        e.preventDefault();
        //console.table({name, email, password})

        try {
            setLoading(true)
            const { data } = await axios.post(`/api/register`, {
            name,
            email,
            password,
        });
            //console.log("REGISTER RESPONSE", data);
            toast('Registration successful. Please login.')
            setLoading(false)
        } catch (err) {
            toast(err.response.data)
            setLoading(false)
        }
    }

    return (
        <div>
            <h1 className={`  bg-primary text-center ${styles.square}`}>Registration</h1>

            <div className="container col-md-4 offset-md-4 pb-5">
                <form onSubmit={handleSubmit}>
                    <input type="text" className="form-control mb-4 p-4" defaultValue={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" required />
                    <input type="email" className="form-control mb-4 p-4" defaultValue={email} onChange={(e)  => setEmail(e.target.value)} placeholder="Enter email" required />
                    <input type="password" className="form-control mb-4 p-4" defaultValue={password} onChange={(e)  => setPassword(e.target.value)} placeholder="Enter password" required />
                  
                    <div className="d-grid gap-2">
                        <button
                            type="submit"
                            className="btn btn-block btn-primary"
                            disabled={!name || !email || !password || loading}
                        >
                            {loading ? <SyncOutlined spin /> : "Submit"}
                        </button>
                        
                    </div>
                    <p className="text-center p-3">
                        Already registered?{" "}
                        <Link href="/login">
                            <a>Login</a>
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Register
