import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";

const Chart = ({ data, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    fetchDailyData().then(async (myData) => {
      setDailyData(await myData);
    });
  }, []);

  const lineChart = dailyData[0] ? (
    <Line
      data={{
        labels: dailyData.map((data) => data.date),
        datasets: [
          {
            label: "infected",
            data: dailyData.map((data) => data.confirmed),
            borderColor: "#33f",
            fill: true,
          },
          {
            label: "deaths",
            data: dailyData.map((data) => data.deaths),
            borderColor: "red",
            backgroundColor: " rgba(255, 255, 255, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  const barChart = data ? (
    <Bar
      data={{
        labels: ["infected", "recovered", "deaths"],
        datasets: [
          {
            label: "people",
            backgroundColor: [
              "rgba(0,0,255, .5)",
              "rgba(0,255,0, .5)",
              "rgba(255,0,0, .5)",
            ],
            data: [
              data.confirmed && data.confirmed.value,
              data.recovered && data.recovered.value,
              data.deaths && data.deaths.value,
            ],
          },
        ],
      }}
      options={{
        legend: {
          display: false,
          title: { display: true, text: country },
        },
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>
      {country && country !== "world" ? barChart : lineChart}
    </div>
  );
};

export default Chart;
