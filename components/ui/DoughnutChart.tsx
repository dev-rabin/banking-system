"use client";

import {Chart as ChartJs, ArcElement, Tooltip , Legend} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJs.register(ArcElement, Tooltip , Legend);

const data = {
    datasets : [
        {
            label : "Banks",
            data : ["6350" , "9000", "12000"],
            backgroundColor : ['#0757b6', '#2265D8', '#2f91fa']
        }
    ],
    labels : ['Bank 1', 'Bank 2', 'Bank 3']
}

function DoughnutChart({accounts} : DoughnutChartProps) {
  return <Doughnut data={data}/>
}

export default DoughnutChart
