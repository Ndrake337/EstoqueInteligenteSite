import "./CurrentState.css"
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';
import { useState, useEffect } from 'react';
import Axios from 'axios';

export default function CurrentState({ data }) {
  const [CurrentState, setCurrentState] = useState([])

  // fetches data
  async function fetchData() {
    await Axios.get("https://apiestoqueinteligente.herokuapp.com/prateleiras").then((response) => {
      setCurrentState(response.data);
      console.log(response.data);
    })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    fetchData();
  }, []);
  
  const listDevices = CurrentState.map((CurrentState) =>
    <div className="currentStateData" key={CurrentState}>
      <span className="slot">Slot {CurrentState.id_prateleira}</span>
      <MonitorWeightIcon className="WeightIcon" style={{ fontSize: 500 }} />
      <span className="title">Produto Estocado: {CurrentState.nome_produto} </span>
      <span className="title">Quantidade de Produtos: {CurrentState.quantidade} Unidade(s)</span>
      <span className="updatedDate">Ultima atualização em: {CurrentState.data_Alteracao}</span>
    </div>
  );
  return (

    <div className="CurrentState">
      <div className="CurrentStateContainer">
        {listDevices}
      </div>
    </div>
  )
}
