import '../InventoryPerDate/InventoryPerDate.css'
import { BarChart, Bar, XAxis, ResponsiveContainer, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { useState } from 'react';
import Axios from 'axios';


export default function InventoryPerDate({ title, dataKeyX, dataKeyY, grid }) {
    const [ChartData, setChartData] = useState("")

    const getDataChart = () => {

        var url = 'https://apiestoqueinteligente.herokuapp.com/dashboard'

        Axios.get(url, {
            headers: {
                "X-API-KEY": "__KEY__",
                "Access-Control-Allow-Origin": "true",
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            },
        }).then((result) => {
            setChartData(result.data)
        });
    }
    getDataChart()
    return (
        <div className="InventoryPerDate" >
            <div className="ChartContainer">
                <div className='ChartTitle'>
                    <span className='title'>{title}</span>
                </div>
                <ResponsiveContainer width="100%" aspect={4 / 1}>
                    <BarChart data={ChartData}>
                        <Tooltip cursor={false} />
                        <XAxis dataKey={'mes'} stroke="#ECEFF4" />
                        <YAxis dataKey={'quantidade'} stroke="#ECEFF4" />
                        <Bar type="monotone" dataKey={'quantidade'} fill="#5E6A82" />
                        {grid && <CartesianGrid stroke='#D8DEE9' strokeDashoffset="5 5" />}
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

