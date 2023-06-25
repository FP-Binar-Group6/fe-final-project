import React, { useState } from 'react'
import './login.css'
import auth from '../../assets/auth.jpg'
import { Link } from 'react-router-dom'
import Register from '../register/Register'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
const Login = () => {

  const [password, setPassword] = useState("")
  const [visible, setVisible] = useState(true)

  return (
    <div className='Login'>
      <div className= "bg-login">
      <img src={auth}/>
      </div>
      <div className='login-form'>
        <h2>Masuk</h2>
        <form>
          <p>Email/No Telepon</p>
          <input placeholder='contoh: johndoe@gmail.com' />
          <label className='password'>
            <p>Password</p>
            <a href=''> lupa kata sandi?</a>
          </label>
          <div className='password-input' >
            <input
              value={password}
              type={visible ? "text" : "password"}
              id='password'
              placeholder='password'
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <div className="password-icon" onClick={() => setVisible(!visible)}>
              {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </div>
          </div>
          <button className='btn-signin'>Masuk</button>
        </form>
        <div className='regist-account'>
          <p>Belum punya akun?
          </p>
          <a href={'register'}>Daftar di si ni</a>
        </div>
      </div>
    </div>
  )
}

export default Login