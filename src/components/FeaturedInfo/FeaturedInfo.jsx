import './FeaturedInfo.css'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'


export default function FeaturedInfo({ data }) {

  const listBigData = data.map((data) =>
    <div className="featuredItem" key={data}>
      <span className='featureTitle'>{data.title}</span>
      <div className='featureDataContainer'>
        <span className='featureData'>{data.origin === 'custo' ? `R$ ${data.Data}` : `${data.Data} Unidades`}</span>
        <span className='featureDataRate'> {data.Rate} {data.Rate < 0 ? <ArrowDownward className='featuredIconNegative' /> : <ArrowUpward className='featuredIconPositive' />} </span>
      </div>
      <span className='featuredSub'>Comparativo do dia</span>
    </div>
  );

  return (
    <div className='featured'>
      {listBigData}
    </div>
  )
}
