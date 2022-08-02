import "./chart.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function Chart({title,data,dataKey,grid}) {
    // test in github
    return (
    <div className="chart">
        <h3 className="charTitile">{title}</h3>
        <ResponsiveContainer width="100%" aspect={4/1}>
            <LineChart data={data}>
                <XAxis dataKey="name" stroke="#550bd"></XAxis>
                <Tooltip></Tooltip>
                <Line type="monotone" dataKey={dataKey}></Line>
                {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"></CartesianGrid>}
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}
