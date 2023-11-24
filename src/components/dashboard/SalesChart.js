import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import Chart from "react-apexcharts";

const SalesChart = () => {
  const chartoptions = {
    series: [
      {
        name: "Iphone 13",
        data: [0, 1, 2, 1, 0, 1, 2, 1, 1, 1,1 ,1, 1, 1],
      },
    ],
    options: {
      dataLabels: {
        enabled: false,
      },
      grid: {
        strokeDashArray: 3,
      },

      stroke: {
        curve: "smooth",
        width: 1,
      },
      xaxis: {
        categories: [
          "0",
          "1min",
          "2min",
          "3min",
          "4min",
          "5min",
          "6min",
          "7min",
        ],
      },
    },
  };
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Sensor Activity Summary</CardTitle>
        <CardSubtitle className="text-muted" tag="h6">
          Every Refresh 
        </CardSubtitle>
        <Chart
          type="area"
          width="100%"
          height="390"
          options={chartoptions.options}
          series={chartoptions.series}
        ></Chart>
      </CardBody>
    </Card>
  );
};

export default SalesChart;
