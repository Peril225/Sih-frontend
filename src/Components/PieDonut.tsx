import React from "react";
import ReactApexChart from "react-apexcharts";
import { TPieDonut } from "../../typings";
import { Options } from "../constants";

function PieDonut({ Current, pievals }: TPieDonut) {
  return (
    <div className='py-9 space-y-10'>
      <h2 className='text-xl w-4/5 h-4 py-8'>GPI INDEX OF {Current}</h2>
      <ReactApexChart
        options={Options as object}
        series={pievals}
        type='donut'
        width={510}
      />
    </div>
  );
}

export default PieDonut;
