import React, { useState } from 'react'
import './search.css'
import ResultItem from '../../components/resultItem/ResultItem'

import pencarianNull from '../../assets/images/pencariannull.png'

import {  ArrowBack, KeyboardArrowDown, SwapVert } from '@mui/icons-material'
import SearchFilterUrutan from '../../components/searchFilterUrutan/SearchFilterUrutan'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import SearchFilterItem from '../../components/searchFilterItem/SearchFilterItem'


const Search = () => {

  const filterUrutan = "Termurah"

  const [openFilterModal, setOpenFilterModal] = useState(false)

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
            display: 'Selasa',
            date: '02/03/2002'
        },
        {
            display: 'Rabu',
            date: '02/03/2002'
        },
        {
            display: 'Kamis',
            date: '02/03/2002'
        },
        {
            display: 'Jumat',
            date: '02/03/2002'
        },
        {
            display: 'Sabtu',
            date: '02/03/2002'
        },
        {
            display: 'Minggu',
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
              <div className="searchResultText">
                <p>{pencarian.kotaAwal} &#62; {pencarian.kotaAkhir} </p> 
                <span className='searchResultTextSub1'> &#160; - {pencarian.jumlahPenumpang} Penumpang - {pencarian.jenisPesawat}</span>
                <span className='searchResultTextSub2'>{pencarian.jumlahPenumpang} Penumpang - {pencarian.jenisPesawat}</span>
              </div>
            </div>
            <div className="searchBtnUbah">
              <p>Ubah Pencarian</p>
              <div className="searchBtnUbahBtn"><KeyboardArrowDown/></div>
            </div>
          </div>
          <div className="searchResultDate">
            <Swiper
              breakpoints={{
                320 :{
                  slidesPerView : 3
                },
                600 :{
                  slidesPerView : 5
                },
                1024 : {
                  slidesPerView : 7
                }
              }}
              slidesPerView={7}
              spaceBetween={0}
              loop = {true}
              modules={[Pagination]}
              className="mySwiper"
            >
            {
            calendar.map((e, i) => (
                            <SwiperSlide key={i} className='pickDate'>
                              <p className='searchResultDateDay'>{e.display}</p>
                              <p className='searchResultDateDate'>{e.date}</p>
                            </SwiperSlide>
                          ))
            }
            </Swiper>
          </div>
        </div>
        </div>
        <div className="searchContainer">
          <div className="searchFilterUrutan">
            <div className="searchItemLeftComponent">
              <SearchFilterItem />
            </div>
            <div className="searchFilterUrutanItem" onClick={() => setOpenFilterModal(!openFilterModal)}>
              <SwapVert className='searchFilterUrutanBtn'/>
              <p className="searchFilterUrutanText">{filterUrutan}</p>
            </div>
            {openFilterModal &&
              <SearchFilterUrutan />
            }
          </div>
          <div className="searchItem">
            <div className="searchItemLeft">
              <SearchFilterItem/>
            </div>
            <div className="searchItemRight">
                {
                  items.length !== 0? items.map((e, i) => (
                                <ResultItem key={i} data={e}/>
                                ))
                                :
                                <div className="nullData">
                                  <img className='nullDataImg' src={pencarianNull} alt="" />
                                  <p className="nullDataTitle">Maaf, pencarian anda tidak ditemukan</p>
                                  <p className="nullDataSubTitle">Coba cari perjalanan lainnya</p>
                                </div>
                }
              
            </div>
          </div>
      </div>
    </div>
  )
}

export default Search