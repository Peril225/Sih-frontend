import React from "react";
import ReactApexChart from "react-apexcharts";
import { TPieDonut } from "../../typings";
import { Options } from "../constants";

function PieDonut({ Current, pievals, labels, width, value }: TPieDonut) {
  const resp = () => {
    switch (value) {
      case "enro":
        return "ENROLLMENT RATE"
        break;
      case "lit":
        return "Literacy RATE"
        break;
      case "dropout":
        return "DROPOUT  RATE"
        break;
      case "gpi":
        return "GP INDEX"
        break;

      default:
        break;
    }
  }
  return (
    <div className='py-9 space-y-10'>
      <h2 className='text-xl w-4/5 h-4 '>{resp()} OF {Current}</h2>
      <ReactApexChart
        // height={400}
        options={{ ...Options, labels: labels } as object}
        series={pievals}
        type='donut'
        width={width}
      />
    </div>
  );
}

export default PieDonut;
