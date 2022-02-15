import React, { useState, useEffect } from "react";
import axios from "axios";
import {
Bar,
BarChart,
CartesianGrid,
ResponsiveContainer,
XAxis,
YAxis,
} from "recharts";

const Barchart = () => {
const [data, setdata] = useState({
xaxis: {
categories: [],
},
});

const [chartData, setChartData] = useState([]);

const [series, setSeries] = useState({
option: [],
});

useEffect(() => {
// const confirmed = [];
// const deaths = [];
axios
.get("https://data.covid19india.org/data.json")
.then((res) => {
setChartData(res.data.statewise);
// console.log("res", res);
// res.data.statewise.map((item) => {
// console.log("item", item);

// confirmed.push(item.confirmed);
// deaths.push(item.deaths);
// });
// setdata({
// XAxis: {
// categories: confirmed,
// },
// });
// setSeries([
// {
// option: deaths,
// },
// ]);
// console.log("confirmed", confirmed, "deaths", deaths);
})
.catch((e) => {
alert(e);
});
}, []);
return (
<div>
<ResponsiveContainer width={"100%"} height={300}>
<BarChart data={chartData}>
<CartesianGrid stroke="#ccc" />
<XAxis dataKey="state" />
<YAxis />
<Bar dataKey="active" fill="green" />
<Bar dataKey="deaths" fill="red" />
<Bar dataKey="recovered" fill="blue" />
</BarChart>
</ResponsiveContainer>
</div>
);
};

export default Barchart;