import '../InventoryPerDate/InventoryPerDate.css'
import { BarChart, Bar, XAxis, ResponsiveContainer, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { useState } from 'react';
import Axios from 'axios';


export default function InventoryPerDate({ title, dataKeyX, dataKeyY, grid }) {
    
    const [Dados, setDados] = useState("")
    
    const getData = () => {

        var url = 'https://estoque-inteligente.herokuapp.com/dashboard'

        Axios.get(url).then((result) => {
            
            //console.log(result.data);
            for (let key of result.data) {
                for (const value in key) {
                    key['mes'] = key['0'];
                    key['quantidade'] = key['1'];
                }
                delete key['1'];
                delete key['0'];
            }
            console.log(result.data)
            setDados(result.data)
        });
    }
    return (
        <div className="InventoryPerDate">
            <button onClick={getData}>Atualizar Dados</button>
            <div className="ChartContainer">
                <div className='ChartTitle'>
                    <span className='title'>{title}</span>
                </div>
                <ResponsiveContainer width="100%" aspect={4 / 1}>
                    <BarChart data={Dados}>
                        <Tooltip cursor={false} />
                        <XAxis dataKey={'mes'} stroke="#ECEFF4" />
                        <YAxis dataKey={'quantidade'} stroke="#ECEFF4" />
                        <Bar type="monotone" dataKey={dataKeyY} fill="#5E6A82" />
                        {grid && <CartesianGrid stroke='#D8DEE9' strokeDashoffset="5 5" />}
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

