import "./CurrentState.css"
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';

export default function CurrentState({data}) {
  const listDevices = data.map((data) =>
    <div className="currentStateData" key={data}>
      <span className="slot">{data.name}</span>
      <MonitorWeightIcon className="WeightIcon" style={{ fontSize: 500 }} />
      <span className="title">Quantidade de Produtos: {data.amountOfProducts} Unidades</span>
      <span className="updatedDate">Ultima atualização em: {data.last_Update}</span>
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
