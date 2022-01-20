import React, { useEffect, useState } from 'react';
import {
  PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend
} from 'recharts';

const EventGenre = ({events}) => {
  const [data, setData] = useState([]);
  const colors = ['#0be688', '#4997b6', '#7a57dc', '#aa1dfd', '#d621d7'];
  useEffect(() => { setData(() => getData()); }, [events]); 

  const getData = () => {
    const genres = ['React', 'JavaScript', 'Node.js', 'jQuery', 'AngularJS'];
    const data = genres.map((genre) => {
      const value = events.filter((event) => event.summary.split(' ').includes(genre)).length;
      return { name: genre, value: value };
    });
    return data;
  }
  return (
    <ResponsiveContainer height={200} 
    min-width={350}
    >
      <PieChart>
        <Pie
        data={data}
        cx={`50%`}
        cy={150}
        labelLine={false}
        outerRadius={100}
        innerRadius={60}
        fill="#000"
        startAngle={180}
        endAngle={0}
        dataKey="value"
        paddingAngle={5}
        // label={({ name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
           {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}          
        </Pie>
        <Tooltip />
        <Legend 
        bottom=''
        top='0'
        />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default EventGenre;