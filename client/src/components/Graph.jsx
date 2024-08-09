import React from "react";
import { Chart, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Labels from "./Labels";

Chart.register(ArcElement);

const data = {};

const config = {
  data: {
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  },
};
const Graph = () => {
  return (
    <div>
    
          <Doughnut {...config}></Doughnut>
      
    </div>
  );
};

export default Graph;
