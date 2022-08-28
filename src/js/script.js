// remove this code

console.log("JavaScript works");

import Chart from "chart.js/auto";
const ctx = document.getElementById("demo").getContext("2d");
new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["1Q", "2Q", "3Q", "4Q"],
    datasets: [
      {
        label: "Sales by quarter",
        data: [12, 19, 3, 5],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
