import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: '', password: '' })

    let navigate = useNavigate()

    const handleSumbit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json()
        console.log(json)
        if (json.success) {
            //save the auth token and redirect
            localStorage.setItem('token', json.authToken)

            props.showAlert("Logged in Successfully", "success")
            navigate('/home')

        }
        else {
            props.showAlert("Invalid Details", "danger")
        }
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div>

            <div className="text-center mt-5 mb-4">
                <h1>iNOTEBOOK</h1>
                <p>Your notes on cloud ☁️ </p>
            </div>

            <p className='text-center'>Login to continue using iNotebook 😊</p>
            <div className="container form ">
                <form onSubmit={handleSumbit}>

                    <div className=" mb-4  ">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name='email' aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-4 ">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" value={credentials.password} onChange={onChange} id="password" name='password' />
                    </div>

                    <div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary" >Login</button>

                        </div>
                        <br />
                        <p className='text-center last-para'>Don't have an account? <Link to="/signup">SignUp-&gt;</Link> </p>
                    </div>
                </form>
            </div>



        </div>
    )
}

export default Login