import axios from "axios";
import { useState } from "react";

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID': '5e565e0a-fc0f-4635-9d1e-26cdb8587571', 'User-Name': username, 'User-Secret': password }

        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
        } catch (err) {
            setError('Oops, incorect credentials');
            console.log(err);
        }
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat App</h1>
                <form onSubmit={handleSubmit}>
                    <input type='text' className="input" placeholder="username" required value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type='password' className="input" placeholder="password" required value={password} onChange={(e) => setPassword(e.target.value)} onSubmit={handleSubmit}/>
                    <div align='center'>
                        <button type="submit" className="button">
                            <span>Start chating</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;