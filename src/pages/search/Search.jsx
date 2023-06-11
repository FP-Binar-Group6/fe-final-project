import React, { useState } from 'react'
import './search.css'
import ResultItem from '../../components/resultItem/ResultItem'

import {  ArrowBack, AttachMoney, FavoriteBorder, NavigateNext, SwapVert, ViewInAr } from '@mui/icons-material'


const Search = () => {

  const filterUrutan = "Termurah"

  const pencarian = {
    kotaAwal :  "jakarta",
    kotaAkhir : "surabaya",
    jumlahPenumpang : 1,
    jenisPesawat : "Ekonomi"
  }

  const calendar = [
        {
            display: 'Senin',
            date: '02/03/2002'
        },
        {
            display: 'Senin',
            date: '02/03/2002'
        },
        {
            display: 'Senin',
            date: '02/03/2002'
        },
        {
            display: 'Senin',
            date: '02/03/2002'
        },
        {
            display: 'Senin',
            date: '02/03/2002'
        },
        {
            display: 'Senin',
            date: '02/03/2002'
        },
        {
            display: 'Senin',
            date: '02/03/2002'
        },
    ];

  const items = [
    {
      detailPesawat: {
        nomorPesawat: "QZ-851",
        namaPesawat : "air asia",
        jenisPesawat: "ekonomi",
      },
      detailTerbang : {
        jamDeparture: "09:30",
        tanggalDeparture: "19 Februari 2023",
        bandaraDeparture: "CGK",
        jamArrival : "15:15",
        tanggalArrival: "19 Februari 2023",
        bandaraArrival: "HKG",
        durasi: "5h 45m",
        transit: "direct"
      },
      detailLainnya : {
        jumlahBagasi: "20 kg",
        jumlahBagasiCabin: "7 kg",
        harga : "5.250.000"
      }
    },
    {
      detailPesawat: {
        nomorPesawat: "QZ-851",
        namaPesawat : "air asia",
        jenisPesawat: "ekonomi",
      },
      detailTerbang : {
        jamDeparture: "09:30",
        tanggalDeparture: "19 Februari 2023",
        bandaraDeparture: "CGK",
        jamArrival : "15:15",
        tanggalArrival: "19 Februari 2023",
        bandaraArrival: "HKG",
        durasi: "5h 45m",
        transit: "direct"
      },
      detailLainnya : {
        jumlahBagasi: "20 kg",
        jumlahBagasiCabin: "7 kg",
        harga : "5.250.000"
      }
    },
    {
      detailPesawat: {
        nomorPesawat: "QZ-851",
        namaPesawat : "air asia",
        jenisPesawat: "ekonomi",
      },
      detailTerbang : {
        jamDeparture: "09:30",
        tanggalDeparture: "19 Februari 2023",
        bandaraDeparture: "CGK",
        jamArrival : "15:15",
        tanggalArrival: "19 Februari 2023",
        bandaraArrival: "HKG",
        durasi: "5h 45m",
        transit: "direct"
      },
      detailLainnya : {
        jumlahBagasi: "20 kg",
        jumlahBagasiCabin: "7 kg",
        harga : "5.250.000"
      }
    },
    {
      detailPesawat: {
        nomorPesawat: "QZ-851",
        namaPesawat : "air asia",
        jenisPesawat: "ekonomi",
      },
      detailTerbang : {
        jamDeparture: "09:30",
        tanggalDeparture: "19 Februari 2023",
        bandaraDeparture: "CGK",
        jamArrival : "15:15",
        tanggalArrival: "19 Februari 2023",
        bandaraArrival: "HKG",
        durasi: "5h 45m",
        transit: "direct"
      },
      detailLainnya : {
        jumlahBagasi: "20 kg",
        jumlahBagasiCabin: "7 kg",
        harga : "5.250.000"
      }
    },
  ]


  return (
    <div className='search'>
        <div className="searchHeaderBox">
        <div className="searchHeader">
          <h2 className="searchTitle">
            Pilih Penerbangan
          </h2>
          <div className="searchResult">
            <div className="searchResultMenu">
              <ArrowBack onClick={() => window.history.back()} className="searchBtnBack"/>
              <p className="searchResultText">{pencarian.kotaAwal} &#62; {pencarian.kotaAkhir} - {pencarian.jumlahPenumpang} Penumpang - {pencarian.jenisPesawat}</p>
            </div>
            <div className="searchBtnUbah">
              <p>Ubah Pencarian</p>
            </div>
          </div>
          <div className="searchResultDate">
            {
              calendar.map((e, i) => (
                            <div key={i} className="pickDate">
                              <p className='searchResultDateDay'>{e.display}</p>
                              <p className='searchResultDateDate'>{e.date}</p>
                            </div>
                            ))
            }
          </div>
        </div>
        </div>
        <div className="searchContainer">
          <div className="searchFilterUrutan">
            <div className="searchFilterUrutanItem">
              <SwapVert className='searchFilterUrutanBtn'/>
              <p className="searchFilterUrutanText">{filterUrutan}</p>
            </div>
          </div>
          <div className="searchItem">
            <div className="searchItemLeft">
              <h3 className="searchItemLeftTitle">
                Filter
              </h3>
              <div className="searchFilterItems">
                <div className="searchFilterItem">
                  <span className='searchFilterItemLogo'><ViewInAr/></span>
                  <p className='searchFilterItemText'>Transit</p>
                  <span className='searchFilterItemArrow'><NavigateNext/></span>
                </div>
                <div className="searchFilterItemsLine">

                </div>
                <div className="searchFilterItem">
                  <span className='searchFilterItemLogo'><FavoriteBorder/></span>
                  <p className='searchFilterItemText'>Fasilitas</p>
                  <span className='searchFilterItemArrow'><NavigateNext/></span>
                </div>
                <div className="searchFilterItemsLine">
                  
                </div>
                <div className="searchFilterItem">
                  <span className='searchFilterItemLogo'><AttachMoney/></span>
                  <p className='searchFilterItemText'>Harga</p>
                  <span className='searchFilterItemArrow'><NavigateNext/></span>
                </div>
              </div>
            </div>
            <div className="searchItemRight">
                {
                  items.map((e, i) => (
                                <ResultItem key={i} data={e}/>
                                ))
                }
              
            </div>
          </div>
      </div>
    </div>
  )
}

export default Search