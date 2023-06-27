import React from 'react'
import './profile.css'
import { ArrowBack, Create, Output } from '@mui/icons-material'

const Profile = () => {
  return (
    <div className='profile'>
        <div className="profileHeaderBox">
            <div className="profileHeader">
            <h2 className="profileTitle">
                Akun
            </h2>
            <div className="profileResultMenu">
              <ArrowBack onClick={() => window.history.back()} className="searchBtnBack"/>
              <div className="profileResultText">
                <p className='adaalah'>Beranda </p>
              </div>
            </div>
            </div>
        </div>
        <div className="profileContainer">
            <div className="profileMenu">
                <div className="ubahProfile">
                    <Create className='ubahProfileIcon'/>
                    <p className="ubahProfileText">
                        Ubah Profile
                    </p>
                </div>
                <div className="ubahProfile">
                    <Output className='ubahProfileIcon'/>
                    <p className="ubahProfileText">
                        Keluar
                    </p>
                </div>
            </div>
            <div className="profileMain">
                <div className="ubahProfilMain">
                    <h2>
                        Ubah Data Profil
                    </h2>
                    <div className="ubahProfilFormContainer">
                        <h3>
                            Data Diri
                        </h3>
                        <form className="ubahProfilForm">
                        <p className="inputTitle">Nama Lengkap</p>
                        <input type="text" />
                        <p className="inputTitle">Nomor Telepon</p>
                        <input type="text" />
                        <p className="inputTitle">Email</p>
                        <input type="email" />
                        <button>
                            Simpan
                        </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile