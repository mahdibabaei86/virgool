import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useState, useEffect } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartComponent = () => {
  let [con, setCon] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL_BACKEND}api/user/chart-detail/`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((result) => {
        setCon(result.result.data);
      });
  }, []);

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const chartData = {
    labels,
    datasets: [
      {
        label: "Posts",
        data: con?.posts,
        borderColor: "rgb(74, 125, 252)",
        backgroundColor: "rgb(74, 125, 252)",
      },
      {
        label: "Followers",
        data: con?.followers,
        borderColor: "rrgb(255, 123, 0)",
        backgroundColor: "rgb(255, 123, 0)",
      },
      {
        label: "Comments",
        data: con?.comments,
        borderColor: "rrgb(237, 28, 53)",
        backgroundColor: "rgb(237, 28, 53)",
      },
      {
        label: "Views",
        data: con?.views,
        borderColor: "rgb(212, 0, 255)",
        backgroundColor: "rgb(212, 0, 255)",
      },
    ].filter(Boolean),
  };

  return (
    <div>
      <Bar
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: { display: true },
            title: { display: true, text: "User Activity Over Time" },
          },
        }}
      />
    </div>
  );
};

export default ChartComponent;
