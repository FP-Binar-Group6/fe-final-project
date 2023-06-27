import React from 'react'
import './register.css'
import auth from '../../assets/auth.jpg'

const Register = () => {
  return (
    <div className='register'>
      <img src={auth} className='bg-register' />
      <div className='register-form'>
        <h2>Daftar</h2>
        <form>
          <p>nama</p>
          <input placeholder='Nama' />
          <p>Email</p>
          <input placeholder='contoh: johndoe@gmial.com' />
          <p>Nomor Telepon</p>
          <input placeholder='Nomor Telepon' />
          <p>Password</p>
          <input placeholder='Masukkan Password'></input>
          <button className='btn-register'>Masuk</button>
        </form>
        <div className='regist-account'>
          <p>Sudah punya akun?
          </p>
          <a href={'login'}>Masuk di sini</a>
        </div>
      </div>
    </div>
  )
}

export default Register