import './Home.css';
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo';
import InventoryPerDate from '../../components/InventoryPerDate/InventoryPerDate';
import { Data } from '../../backendData'

export default function Home() {
  return (
    <div className='Home'>
      <FeaturedInfo data={Data[1]} />
      <InventoryPerDate data={Data[0]} title='Histórico de Inventario' dataKeyX="Mes" dataKeyY="Quantidade" />
    </div>
  )
}
