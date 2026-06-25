import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const data = [
  { date: "Apr 14", value: 0.8421 },
  { date: "Apr 21", value: 0.8434 },
  { date: "Apr 28", value: 0.8463 },
  { date: "May 06", value: 0.8422 },
  { date: "May 14", value: 0.8533 },
  
  { date: "Apr 14", value: 0.8421 },
  { date: "Apr 21", value: 0.8634 },
  { date: "Apr 28", value: 0.8423 },
  { date: "May 06", value: 0.8322 },
  { date: "May 14", value: 0.8533 },
  
  { date: "Apr 14", value: 0.8421 },
  { date: "Apr 21", value: 0.8634 },
  { date: "Apr 28", value: 0.8423 },
  { date: "May 06", value: 0.8422 },
  { date: "May 14", value: 0.8533 },
  
  { date: "Apr 14", value: 0.8421 },
  { date: "Apr 21", value: 0.8634 },
  { date: "Apr 28", value: 0.8423 },
  { date: "May 06", value: 0.8422 },
  { date: "May 14", value: 0.8533 },
  
];

const Charts = () => {
  return (
    <div className="h-74.5 w-[95%] mx-auto">
      <div className="w-full h-full ">
        <ResponsiveContainer className="w-full h-full ">
          <AreaChart data={data}>
            <CartesianGrid
              stroke="#9D9D9D"
              strokeDasharray="3 7"
              vertical={false}
            ></CartesianGrid>
            <XAxis dataKey="date"></XAxis>
            <YAxis domain={["dataMin", "dataMax"]} />
            <defs>
              <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#C6F02A" stopOpacity={0.65} />
                <stop offset="55%" stopColor="#8AA52A" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#C6F02A" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="value"
              stroke="#D7FF2F"
              strokeWidth={2}
              fill="url(#areaGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Charts;
//  <div style={{ width: '100%', height: '100%' }}>
//       <ResponsiveContainer>
//         <AreaChart
//           data={data}
//           margin={{ top: 10, right: 30, left: 0, bottom: 30 }}
//         >
//           <defs>
//             <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
//               <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
//             </linearGradient>
//           </defs>
//           <XAxis dataKey="name" />
//           <YAxis />
//           <CartesianGrid strokeDasharray="3 3" />
//           <Tooltip />
//           <Area
//             type="spike"
//             dataKey="value"
//             stroke="#8884d8"
//             fillOpacity={1}
//             fill="url(#colorValue)"
//           />
//         </AreaChart>
//       </ResponsiveContainer>
//     </div>
