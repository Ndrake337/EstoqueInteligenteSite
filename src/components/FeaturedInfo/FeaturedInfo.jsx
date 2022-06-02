import './FeaturedInfo.css'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import { useState, useEffect } from 'react';
import Axios from 'axios';

export default function FeaturedInfo() {

  const [BigNumbersData, setBigNumbersData] = useState([])

  // fetches data
  async function fetchData() {
    await Axios.get("https://apiestoqueinteligente.herokuapp.com/balancoEstoque").then((response) => {
      setBigNumbersData(response.data);
      console.log(response.data);
    })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    fetchData();
  }, []);


  const listBigData = BigNumbersData.map((BigNumbersData) =>
    <div className="featuredItem" key={BigNumbersData}>
      <span className='featureTitle'>Teste</span>
      <div className='featureDataContainer'>
        <span className='featureData'>{BigNumbersData.origin === 'custo' ? `R$ ${BigNumbersData.balanco.toFixed(2)}` : `${BigNumbersData.balanco} Unidades`}</span>
        <span className='featureDataRate'> {BigNumbersData.value} {BigNumbersData.value < 0 ? <ArrowDownward className='featuredIconNegative' /> : <ArrowUpward className='featuredIconPositive' />} </span>
      </div>
      <span className='featuredSub'>{BigNumbersData.Data_Estocagem}</span>
    </div>
  );

  return (
    <div className='featured'>

      {listBigData}
    </div>
  )
}
