import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Rectangle,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "월",
    매출: 150,
  },
  {
    name: "화",
    매출: 98,
  },
  {
    name: "수",
    매출: 203,
  },
  {
    name: "목",
    매출: 170,
  },
  {
    name: "금",
    매출: 104,
  },
  {
    name: "토",
    매출: 360,
  },
  {
    name: "일",
    매출: 430,
  },
];

const BarChartLayout = () => {
  return (
    <ResponsiveContainer width={"100%"} height={300}>
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="2 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar
          dataKey="매출"
          fill="#484482"
          activeBar={<Rectangle fill="#484482" stroke="#ffffff" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
export default BarChartLayout;
