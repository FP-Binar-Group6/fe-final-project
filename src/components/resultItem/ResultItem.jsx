import React, {useState} from 'react'
import './resultItem.css'
import {KeyboardArrowDown, Luggage,  AirplanemodeActive, } from '@mui/icons-material'
// import pencarianNull from '../../assets/images/pencariannull.png'

const ResultItem = ({data}) => {

    const [open, setOpen] = useState(false)

  return (<>
    <div className={`${open? 'isOpen' : 'resultItems'}`}>
      <div className="resultItem">
        <div className="resultItemPlane">
          <AirplanemodeActive fontSize='small'/>
          <p className="resultItemPlaneName">
            {data.detailPesawat.namaPesawat} - {data.detailPesawat.jenisPesawat}
          </p>
        </div>
        <KeyboardArrowDown fontSize='small' className="resultItemMore" onClick={() => setOpen(!open)}/>
      </div>
      <div className="resultItem">
        <div className="resultItemLeft">
          <div className="resultItemUp">
            <p className="resultItemUpDepartureJam">
              {data.detailTerbang.jamDeparture}
            </p>
            <p className="resultItemUpDuration">
              {data.detailTerbang.durasi}
            </p>
            <p className="resultItemUpArrivalJam">
              {data.detailTerbang.jamArrival}
            </p>
          </div>
          <div className="resultItemUpDownLine">
            
          </div>
          <div className="resultItemDown">
            <p className="resultItemDownDepartureAirport">
              {data.detailTerbang.bandaraDeparture}
            </p>
            <p className="resultItemDownTransit">
              {data.detailTerbang.transit}
            </p>
            <p className="resultItemDownArrivalAirport">
              {data.detailTerbang.bandaraArrival}
            </p>
          </div>
        </div>
        <div className="resultItemCenter">
          <Luggage className='resultItemCenterLogo'/>
        </div>
        <div className="resultItemRight">
          <h2 className="resultItemRightPrice">
            IDR. {data.detailLainnya.harga}
          </h2>
          <button>
            Pilih
          </button>
        </div>
      </div>
      {open && 
        <div className='resultItemDetail'>
          <div className="resultItemDetailLine1">
          </div>
          <div className="resultItemDetailItem">
          <h3 className="resultItemDetailTitle">
            Detail Penerbangan
          </h3>
          <div className="resultItemDetailDeparture">
            <div className="resultItemDetailDepartureLeft">
              <p className="resultItemDetailDepartureJam">
                {data.detailTerbang.jamDeparture}
              </p>
              <p className="resultItemDetailDepartureTanggal">
                {data.detailTerbang.tanggalDeparture}
              </p>
              <p className="resultItemDetailDepartureBandara">
                {data.detailTerbang.bandaraDeparture}
              </p>
            </div>
            <div className="resultItemDetailDepartureRight">
              <p className="resultItemDetailDepartureTitle">
                Keberangkatan
              </p>
            </div>
          </div>
          <div className="resultItemDetailLine2">
            <div className="resultItemDetailLine2in">
            </div>
          </div>
          <div className="resultItemDetailPlane">
            <AirplanemodeActive className='resultItemDetailPlaneLogo'/>
            <div className="resultItemDetailPlanetext">
              <p className="resultItemDetailPlaneName">
                {data.detailPesawat.namaPesawat} - {data.detailPesawat.jenisPesawat}
              </p>
              <p className="resultItemDetailPlaneNumber">
                {data.detailPesawat.nomorPesawat}
              </p>
              <p className="resultItemDetailPlaneInformationTitle">
                Informasi:
              </p>
              <p className="resultItemDetailPlaneInformationItem">
                Baggage {data.detailLainnya.jumlahBagasi}
              </p>
              <p className="resultItemDetailPlaneInformationItem">
                Cabin baggage {data.detailLainnya.jumlahBagasiCabin}
              </p>
              <p className="resultItemDetailPlaneInformationTitle">
                In Flight Entertainment
              </p>
            </div>
          </div>
          <div className="resultItemDetailLine2">
            <div className="resultItemDetailLine2in">
            </div>
          </div>
          <div className="resultItemDetailArrival">
          <div className="resultItemDetailArrivalLeft">
              <p className="resultItemDetailArrivalJam">
                {data.detailTerbang.jamArrival}
              </p>
              <p className="resultItemDetailArrivalTanggal">
                {data.detailTerbang.tanggalArrival}
              </p>
              <p className="resultItemDetailArrivalBandara">
                {data.detailTerbang.bandaraArrival}
              </p>
            </div>
            <div className="resultItemDetailArrivalRight">
              <p className="resultItemDetailArrivalTitle">
                Kedatangan
              </p>
            </div>
          </div>
          </div>
        </div>
      }
    </div>
  
    </>
  )
}

export default ResultItem