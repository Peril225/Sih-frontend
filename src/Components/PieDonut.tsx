import React from "react";
import ReactApexChart from "react-apexcharts";
import { TPieDonut } from "../../typings";
import { Options } from "../constants";

function PieDonut({ Current, pievals, labels, width }: TPieDonut) {
  return (
    <div className='py-9 space-y-10'>
      <h2 className='text-xl w-4/5 h-4 '>GPI INDEX OF {Current}</h2>
      <ReactApexChart
        height={400}
        options={{ ...Options, labels: labels } as object}
        series={pievals}
        type='donut'
        width={width}
      />
    </div>
  );
}

export default PieDonut;
